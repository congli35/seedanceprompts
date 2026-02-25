import type { Metadata } from "next";
import { PromptArchive } from "@/components/prompt-archive";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seedance 2.0 Prompts Library",
  description:
    "Browse Seedance 2.0 prompts, source videos, and copy-ready prompt text to create and remix cinematic AI clips.",
};

export default function Home() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Seedance 2.0 Prompts",
    description:
      "A curated library of Seedance 2.0 prompts with source references and remix-ready text.",
    url: siteUrl,
    inLanguage: "en-US",
    about: "Seedance 2.0 prompts",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PromptArchive />
    </>
  );
}
