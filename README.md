# Seedance Prompt Radar

A Next.js 16 + TypeScript site for collecting Seedance prompts and their related videos. The initial list lives in a local data file so you can manually curate entries (most from X).

## Stack

- Next.js 16 (App Router)
- TypeScript
- pnpm
- Tailwind CSS v4 + custom CSS art direction

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Where to add your prompt collection

Edit `data/seedance-prompts.ts` and add new objects to `seedancePrompts`:

- `sourceUrl`: usually the X post URL
- `videoUrl` (optional): direct video file link (`.mp4`, etc.). If omitted, the card embeds the X post preview.
- `prompt`: full text prompt for quick copy and remix

## Quality checks

```bash
pnpm lint
pnpm build
```
