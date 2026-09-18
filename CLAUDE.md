# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page portfolio site (Performance Marketing & Account Management, bilingual VI/EN) built with React 19, Next.js-style app router conventions via `vinext`, and Vite. It is statically exported and deployed to GitHub Pages — there is no server runtime in production.

## Commands

```bash
npm run dev           # vinext dev server
npm run build         # vinext build (dist/client, dist/server)
npm run build:pages   # build + export static artifact to dist/pages via scripts/export-github-pages.mjs
npm test              # build:pages, then run node --test tests/rendered-html.test.mjs
npm run lint          # eslint .
```

There is no unit test runner beyond `node --test` against the exported HTML/assets (`tests/rendered-html.test.mjs`) — it asserts on rendered markup, DOM ordering, and asset existence rather than component logic in isolation. Run `npm test` after any content or component change that affects the landing page's structure or copy.

To preview a case study that hasn't been approved yet, set `NEXT_PUBLIC_CASE_PREVIEW=1` before `npm run dev` / build. Never set this in the production workflow.

## Architecture

**Data-driven single page.** `app/page.tsx` is the only route. It calls `getCaseStudiesForRender` (in `app/lib/cases.ts`) to filter `app/data/cases.ts` down to what's safe to publish, then hands the result to `PortfolioClient`, a client component that composes all landing-page sections in a fixed order (Hero → Numbers → About → Expertise → Work → Experience → Contact → Footer).

**Publish gating (`app/lib/cases.ts`) is the core invariant to respect.** `validateCaseStudies()` runs at module load (import time) and throws if case data is malformed — this means simply importing `app/data/cases.ts` anywhere validates it. Rules enforced there:
- Exactly 19 cases, IDs 1–19, unique IDs and slugs.
- Every case needs localized (`vi`+`en`) industry/title/summary text with no internal draft markers (`🟨`, `[___]`, `⇔`, "để chỗ") — these mark unfinished internal briefs and must never leak into public copy.
- A case with `dataStatus === "approved"` and `presentationTier === "flagship"` must have a local (non-URL) cover image, full `detail`, and only `verified` metrics.
- `presentationTier === "hidden"` cases are excluded from preview mode too.
- `expertise.ts` entries must only reference case IDs that exist.

`getCaseStudiesForRender` (not `validateCaseStudies`) additionally enforces: at most 6 flagship cases may be published at once.

`getCaseStudiesForRender({ preview })` — preview mode (dev, or `NEXT_PUBLIC_CASE_PREVIEW=1`) shows everything except `hidden`; production mode additionally requires `dataStatus === "approved"` and, for flagships, cover+detail present.

When adding or editing a case study in `app/data/cases.ts`, keep it consistent with these rules or the build will fail fast (by design).

**Bilingual content lives in two places:**
- `app/data/content.ts` — static UI copy (`copy.vi` / `copy.en`), keyed by `Language` (`"vi" | "en"`).
- `app/data/cases.ts` / `app/data/expertise.ts` — case study and capability content, each field a `LocalizedText { vi, en }`.

`useLanguage` (a hook) selects which `copy[language]` to use at render time; there's no i18n routing — both languages render from the same page based on client-side state.

**Static export & GitHub Pages path handling.** `next.config.ts` sets `output: "export"`, `trailingSlash: true`, and a `basePath`/`assetPrefix` from `PAGES_BASE_PATH` (empty locally, `/<repo-name>` in CI). Any asset URL (images, etc.) must go through `getPublicAssetUrl` in `app/lib/assets.ts` rather than being hardcoded, since it prefixes with `NEXT_PUBLIC_BASE_PATH` — hardcoded absolute paths will 404 under the GitHub Pages subpath.

`scripts/export-github-pages.mjs` runs after `vinext build`: it copies `dist/client` to `dist/pages`, unnests the `basePath` directory if present, invokes the built server entry directly to render the index HTML, verifies every referenced `/_next/` asset actually exists on disk, and writes `index.html`, `404.html` (SPA-style fallback), and `.nojekyll`. Test/CI failures here usually mean an asset reference and the actual exported file tree disagree.

**CI (`​.github/workflows/deploy-pages.yml`)** on push to `main`: `npm ci` → `npm run lint` → `npm test` (which builds + exports + runs the HTML tests) → upload `dist/pages` → deploy. There's no separate lint/test-only workflow — `npm test` is the gate.

## Repository conventions

- npm is the only package manager; only commit `package-lock.json`.
- Never commit `node_modules/`, `.next/`, `.vinext/`, `dist/`, `work/`, `tmp/`, `outputs1/`, `*.tsbuildinfo`.
