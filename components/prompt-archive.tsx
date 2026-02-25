"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { seedancePrompts, type PromptSource } from "@/data/seedance-prompts";

type SourceFilter = "All" | PromptSource;
type EmbedConsent = "accepted" | "rejected" | null;

type TwitterWidgetsApi = {
  widgets?: {
    createTweet: (
      tweetId: string,
      element: HTMLElement,
      options?: {
        theme?: "light" | "dark";
        dnt?: boolean;
        align?: "left" | "center" | "right";
      },
    ) => Promise<HTMLElement>;
  };
};

const sourceFilters: SourceFilter[] = ["All", "X", "Manual"];
const EMBED_CONSENT_KEY = "seedance_x_embed_consent_v1";
const TWITTER_WIDGETS_SCRIPT_ID = "twitter-wjs";
const INITIAL_VISIBLE_PROMPTS = 24;
const PROMPTS_PER_PAGE = 24;

let twitterWidgetsPromise: Promise<boolean> | null = null;

function getTweetId(url: string) {
  const match = url.match(/status\/(\d+)/);
  return match?.[1] ?? null;
}

function getXEmbedUrl(tweetId: string) {
  return `https://platform.twitter.com/embed/Tweet.html?id=${tweetId}&theme=dark&dnt=true`;
}

function ensureTwitterWidgetsLoaded() {
  if (typeof window === "undefined") {
    return Promise.resolve(false);
  }

  const existingApi = (window as Window & { twttr?: TwitterWidgetsApi }).twttr;
  if (existingApi?.widgets?.createTweet) {
    return Promise.resolve(true);
  }

  if (twitterWidgetsPromise) {
    return twitterWidgetsPromise;
  }

  twitterWidgetsPromise = new Promise<boolean>((resolve) => {
    let settled = false;

    const finish = (ok: boolean) => {
      if (!settled) {
        settled = true;
        resolve(ok);
      }
    };

    let script = document.getElementById(TWITTER_WIDGETS_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = TWITTER_WIDGETS_SCRIPT_ID;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener("error", () => finish(false), { once: true });

    const stopAt = Date.now() + 12000;

    const tick = () => {
      const api = (window as Window & { twttr?: TwitterWidgetsApi }).twttr;
      if (api?.widgets?.createTweet) {
        finish(true);
        return;
      }

      if (Date.now() >= stopAt) {
        finish(false);
        return;
      }

      window.setTimeout(tick, 120);
    };

    tick();
  });

  return twitterWidgetsPromise;
}

function XPostEmbed({ sourceUrl }: { sourceUrl: string }) {
  const tweetId = getTweetId(sourceUrl);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [embedMode, setEmbedMode] = useState<"loading" | "widget" | "iframe">("loading");

  useEffect(() => {
    if (!tweetId || !containerRef.current) {
      return;
    }

    let cancelled = false;

    const render = async () => {
      const ready = await ensureTwitterWidgetsLoaded();
      if (!ready || cancelled || !containerRef.current) {
        if (!cancelled) {
          setEmbedMode("iframe");
        }
        return;
      }

      containerRef.current.replaceChildren();

      try {
        const api = (window as Window & { twttr?: TwitterWidgetsApi }).twttr;
        const rendered = await api?.widgets?.createTweet(tweetId, containerRef.current, {
          theme: "dark",
          dnt: true,
          align: "center",
        });
        if (!rendered || cancelled) {
          if (!cancelled) {
            setEmbedMode("iframe");
          }
          return;
        }
        setEmbedMode("widget");
      } catch {
        if (!cancelled) {
          setEmbedMode("iframe");
        }
      }
    };

    void render();

    return () => {
      cancelled = true;
    };
  }, [sourceUrl, tweetId]);

  if (!tweetId) {
    return (
      <div className="embed-placeholder">
        <p className="mb-3 text-sm text-cyan-50/85">Invalid X post URL.</p>
        <a href={sourceUrl} target="_blank" rel="noreferrer" className="action-btn">
          Open on X
        </a>
      </div>
    );
  }

  if (embedMode === "iframe") {
    return (
      <iframe
        src={getXEmbedUrl(tweetId)}
        title="X post fallback embed"
        loading="lazy"
        scrolling="no"
        className="x-embed-fallback"
      />
    );
  }

  return <div ref={containerRef} className="x-embed-live" />;
}

function LazyXPostEmbed({ sourceUrl }: { sourceUrl: string }) {
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || typeof window === "undefined" || !placeholderRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "260px 0px" },
    );

    observer.observe(placeholderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  if (isVisible) {
    return <XPostEmbed sourceUrl={sourceUrl} />;
  }

  return (
    <div ref={placeholderRef} className="embed-placeholder">
      <p className="text-sm text-cyan-50/85">Embed will load when this card is in view.</p>
    </div>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function PromptArchive() {
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [autoDurations, setAutoDurations] = useState<Record<string, string>>({});
  const [visiblePromptCount, setVisiblePromptCount] = useState(INITIAL_VISIBLE_PROMPTS);
  const [embedConsent, setEmbedConsent] = useState<EmbedConsent>(() => {
    if (typeof window === "undefined") {
      return "accepted";
    }
    const saved = window.localStorage.getItem(EMBED_CONSENT_KEY);
    return saved === "accepted" || saved === "rejected" ? saved : "accepted";
  });

  const saveEmbedConsent = (value: Exclude<EmbedConsent, null>) => {
    setEmbedConsent(value);
    window.localStorage.setItem(EMBED_CONSENT_KEY, value);
  };

  const canLoadXEmbeds = embedConsent === "accepted";

  const formatDuration = (seconds: number) => {
    const totalSeconds = Math.max(0, Math.floor(seconds));
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  const filteredPrompts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return seedancePrompts.filter((entry) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${entry.prompt ?? ""} ${entry.sourceUrl}`.toLowerCase().includes(normalizedQuery);

      const matchesSource = sourceFilter === "All" || entry.source === sourceFilter;

      return matchesQuery && matchesSource;
    });
  }, [query, sourceFilter]);

  const visiblePrompts = useMemo(
    () => filteredPrompts.slice(0, visiblePromptCount),
    [filteredPrompts, visiblePromptCount],
  );
  const hasMorePrompts = visiblePromptCount < filteredPrompts.length;

  const latestPromptDateLabel = useMemo(() => {
    let latestDate: string | null = null;

    for (const entry of seedancePrompts) {
      if (!latestDate || new Date(entry.createdAt).getTime() > new Date(latestDate).getTime()) {
        latestDate = entry.createdAt;
      }
    }

    return latestDate ? formatDate(latestDate) : "Unknown";
  }, []);

  const copyPrompt = async (id: string, prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden px-5 py-8 md:px-10 md:py-10">
      <div className="grain-overlay pointer-events-none" aria-hidden />
      <div className="mesh-bg pointer-events-none" aria-hidden />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="panel animate-rise rounded-3xl border border-white/20 p-6 md:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="inline-flex items-center rounded-2xl border border-white/20 bg-white/5 p-2">
                <Image
                  src="/icon.svg"
                  alt="Seedance Prompt Radar logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="display-title text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                  Seedance 2.0 Prompts
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs text-cyan-100/70">Last updated {latestPromptDateLabel}</p>
              <a href="#prompt-catalog" className="action-btn inline-flex border-transparent bg-cyan-200 text-slate-950">
                Browse prompts
              </a>
            </div>
          </div>
        </section>

        {embedConsent !== "accepted" ? (
          <section
            className="panel animate-rise rounded-3xl border border-white/20 p-4 md:p-5"
            style={{ animationDelay: "80ms" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-cyan-50/90">
                Privacy notice: loading X embeds may set third-party cookies and send usage data to X.
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="action-btn border-transparent bg-cyan-200 text-slate-950"
                  onClick={() => saveEmbedConsent("accepted")}
                >
                  Allow X embeds
                </button>
                <button type="button" className="action-btn" onClick={() => saveEmbedConsent("rejected")}>
                  Links only
                </button>
              </div>
            </div>
          </section>
        ) : null}

        <section
          id="prompt-catalog"
          className="panel animate-rise rounded-3xl border border-white/20 p-4 md:p-6"
          style={{ animationDelay: "100ms" }}
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <label className="relative block">
              <span className="sr-only">Search prompts</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisiblePromptCount(INITIAL_VISIBLE_PROMPTS);
                }}
                placeholder="Search by scene, style, or mood..."
                className="input-field w-full rounded-2xl border border-white/25 px-4 py-3 text-sm text-white outline-none"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2">
              {sourceFilters.map((filter) => {
                const isActive = sourceFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    className={`chip ${isActive ? "chip-active" : ""}`}
                    onClick={() => {
                      setSourceFilter(filter);
                      setVisiblePromptCount(INITIAL_VISIBLE_PROMPTS);
                    }}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-4 pb-8 md:grid-cols-2">
          {visiblePrompts.map((entry, index) => {
            const durationLabel = autoDurations[entry.id] ?? entry.duration ?? "Unknown";
            const promptText = entry.prompt?.trim() ?? "";
            const hasPrompt = promptText.length > 0;

            return (
              <article
                key={entry.id}
                className="panel animate-rise card-glow rounded-3xl border border-white/20 p-5"
                style={{ animationDelay: `${Math.min(index * 80, 500)}ms` }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="tracking-hud text-[11px] uppercase text-cyan-100/80">
                      {entry.source} source - {formatDate(entry.createdAt)}
                    </p>
                  </div>
                  <span className="chip px-3 py-1 text-xs">{durationLabel}</span>
                </div>

                {entry.videoUrl ? (
                  <div className="video-frame mb-4 overflow-hidden rounded-2xl border border-white/20 bg-black/60">
                    <video
                      src={entry.videoUrl}
                      controls
                      muted
                      loop
                      playsInline
                      onLoadedMetadata={(event) => {
                        const seconds = event.currentTarget.duration;
                        if (!Number.isFinite(seconds) || seconds <= 0) {
                          return;
                        }

                        setAutoDurations((prev) => {
                          if (prev[entry.id]) {
                            return prev;
                          }
                          return { ...prev, [entry.id]: formatDuration(seconds) };
                        });
                      }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : canLoadXEmbeds ? (
                  <div className="x-embed-frame mb-4">
                    <LazyXPostEmbed sourceUrl={entry.sourceUrl} />
                  </div>
                ) : (
                  <div className="x-embed-frame mb-4">
                    <div className="embed-placeholder">
                      <p className="mb-3 text-sm text-cyan-50/85">X embed is disabled. Open the source post directly.</p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          className="action-btn border-transparent bg-cyan-200 text-slate-950"
                          onClick={() => saveEmbedConsent("accepted")}
                        >
                          Allow X embeds
                        </button>
                        <a href={entry.sourceUrl} target="_blank" rel="noreferrer" className="action-btn">
                          Open on X
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {hasPrompt ? (
                  <p className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm leading-relaxed text-cyan-50/90">
                    {promptText}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {hasPrompt ? (
                    <button
                      type="button"
                      className="action-btn"
                      onClick={() => copyPrompt(entry.id, promptText)}
                    >
                      {copiedId === entry.id ? "Copied" : "Copy prompt"}
                    </button>
                  ) : null}
                  <a href={entry.sourceUrl} target="_blank" rel="noreferrer" className="action-btn">
                    Open source post
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        {filteredPrompts.length > 0 ? (
          <section className="pb-8 text-center">
            <p className="mb-3 text-sm text-cyan-100/85">
              Showing {visiblePrompts.length} of {filteredPrompts.length} prompts
            </p>
            {hasMorePrompts ? (
              <button
                type="button"
                className="action-btn"
                onClick={() =>
                  setVisiblePromptCount((previous) => Math.min(previous + PROMPTS_PER_PAGE, filteredPrompts.length))
                }
              >
                Load more prompts
              </button>
            ) : null}
          </section>
        ) : null}

        {filteredPrompts.length === 0 ? (
          <section
            className="panel animate-rise rounded-3xl border border-white/20 p-10 text-center"
            style={{ animationDelay: "150ms" }}
          >
            <p className="text-lg text-white">No matches yet. Try clearing filters or adding new prompts.</p>
          </section>
        ) : null}
      </main>
    </div>
  );
}
