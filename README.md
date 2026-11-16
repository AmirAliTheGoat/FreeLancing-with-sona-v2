# Sona — International Freelancing Guide (`fa` / `en`)

Bilingual (`fa` RTL default + `en` LTR) React 19 + Vite 6 + Tailwind CSS editorial landing site.

## Commands

```bash
npm install
npm run dev                 # Dev server on http://0.0.0.0:3000
npm run lint                # TypeScript typecheck (tsc --noEmit)
npm run build               # Production bundle into dist/ (set NODE_ENV=production)
npm run check:launch        # Scans data/*.ts for remaining placeholder markers (exits 1 if any remain)
node scripts/optimize-images.mjs  # Manual asset script: hero (640/1024/1376), portrait (AVIF/WebP/JPG), OG & touch icon
```

## Where Copy & Placeholders Live

- **`data/content.ts`**: All bilingual UI chrome, `a11y` strings, section headings, playbook cards, Reality Register tabs, FAQ items, modal labels, footer text, and `<head>` meta strings (`meta.title`, `meta.description`). Keep `index.html` `<title>`, `description`, `og:*`, `twitter:*`, and JSON-LD in sync when `DOSSIER_CONTENT.fa.meta` changes.
- **`data/placeholders.ts`**: Launch-dependent slots and asset paths:
  - `EDITORIAL_ASSETS`: Paths for responsive hero images (`public/assets/hero/` at `640`, `1024`, `1376` in AVIF/WebP/JPEG) and Sona's portrait (`public/assets/aistudio/` in AVIF/WebP/JPEG).
  - `PLACEHOLDER_PROFILE`: Real years active, profile link, email, Telegram handle, and base city (`[`-prefixed contact values render as plain text; real values render as `mailto:` / `https://t.me/` links).
  - `PLACEHOLDER_INFRA_BENCHMARKS`: SIM/virtual-number upkeep note.
  - `PLACEHOLDER_PACKAGES`: Final track pricing, delivery windows, and scope lines.
  - `PLACEHOLDER_CASE_RECORDS` & `PLACEHOLDER_REFERENCES`: Verified case outcomes and client quotes.

## Draft Gating (`DRAFT_MODE`)

- **`constants.ts`** exports `export const DRAFT_MODE: boolean = true;`.
- While `true`, draft banners/badges stay visible (`hero.draftNotice`, `heroPillars[2]` placeholder item, `placeholderBadge`, `placeholderTag`/shimmer, and `footer.colophonNote`). Set `DRAFT_MODE = false` right before production publish.

## Pre-Launch Checklist

See **`docs/HANDOFF.md`** (Persian guide with exact English keys) and **`LAUNCH_CHECKLIST.md`**:
1. Replace all `[PLACEHOLDER...]`, `[جای‌گذاری: ...]`, `[قیمت نهایی: ...]`, `[زمان ...]`, and `[TBD ...]` entries in `data/placeholders.ts`.
2. Verify platform figures (Upwork `0%–15%` variable fee, Fiverr `20%` fee, payout hold windows, monthly costs, `2–4` month ramp) against official sources.
3. Remove `<meta name="robots" content="noindex" />` from `index.html`.
4. Set `DRAFT_MODE = false` in `constants.ts`.
5. Run `npm run check:launch`, `npm run lint`, and `NODE_ENV=production npm run build`.
