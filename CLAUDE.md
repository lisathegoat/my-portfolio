# Lisa's Portfolio

## Stack
React 18 + TypeScript + Vite 5 + React Router v6 + Tailwind CSS v3

## Routes

V2 is the live site. V1, the template and the design system are dev-only —
`App.tsx` mounts them behind `import.meta.env.DEV`, so production never exposes
internal scaffolding. Unknown paths redirect to `/`.

**Public (production):**

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `HomeV2.tsx` | White bg, masonry grid, Tiempos headings |
| `/about` | `About.tsx` | |
| `/resume` | `Resume.tsx` | Print-styled, `window.print()` → PDF |
| `/projekte/fyta-sensor-onboarding` | `v2/CaseStudyFyta.tsx` | |
| `/projekte/soil-probe-diagnostic` | `v1/CaseStudyProbe.tsx` | No V2 yet, V1 serves the slug |
| `/projekte/inklusive-lern-app` | `v2/CaseStudyThesis.tsx` | |
| `/projekte/fyta-datenvisualisierung` | `v2/CaseStudyDataViz.tsx` | |

**Dev-only:** `/v1`, `/projekte/*/v1`, `/template`, `/design-system`, `/lab`

**Redirects:** `/v2` → `/`, `/projekte/*/v2` → clean slug, `*` → `/`

External link (no route): `https://infovis.fh-potsdam.de/femscroll/daten/` — Scrollytelling/data vis project

## Design Versions
- **V1** (`versions/HomeV1.tsx`): Dark (#1D1D1D), Neue Montreal body, Times italic headings, card-based grid. **Archived** — dev-only at `/v1`.
- **V2** (`versions/HomeV2.tsx`): **Live.** White bg, TiemposText headings, Geist body, Geist Mono nav, 2-col masonry, CV table in hero.

Both share `content.ts` as data source. Registries: `versions.ts` (home) and
`caseStudyVersions.ts` (case studies). Set `devOnly: true` to archive a version.

The home grid balances its two columns by cover aspect ratio, so adding or
removing a project needs no layout edit.

## Font System

| Tailwind class | Font | Weight | Use |
|---------------|------|--------|-----|
| `font-title` | Times New Roman | italic 400 | V1 headings |
| `font-title-italic` | Times New Roman | italic 400 | CSS component class (same font, used in case studies for h3) |
| `font-body` | Neue Montreal | 400/500 | V1 body copy |
| `font-mono` | Geist Mono | 400 | Labels, nav (uppercase), metadata |
| `font-v2` | GT America | 400/500 | V2 alternate body (not actively used) |
| `font-geist` | Geist | 400 | V2 body copy |
| `font-tiempos` | Tiempos Text | 400/italic | V2 headings, case study card titles |

Font files in `public/fonts/`. @font-face declarations in `src/index.css`.

## Typography Hierarchy (Case Studies)
- **h1**: Title only (page title)
- **h2**: HMW questions only
- **h3**: Section headings → `font-title-italic`
- **h4**: Section labels → `font-mono uppercase`

## Content
- `src/content.ts` — Single source of truth for all text, case study data, navigation labels
- Case study images referenced via `meta.imageFolder` + filename

## Asset Sources
> Moved 2026-08-25: these used to live in the vault (`Obsidian Vault/Portfolio/`). The vault now holds
> only knowledge (briefing, voice/tone, master prompt) — build assets live here in the project itself.
- **Images**: Copy from `_source-assets/portfolio-content/images/` to `public/images/`
- **Fonts**: Source at `_source-assets/fonts-and-material/` (Tiempos, Geist families)
- **Videos**: Same portfolio-content folder, copy to `public/images/[subfolder]/`. Original raw exports
  (pre-rename) are in `_source-assets/original-videos/`.

## Figma
File key: `6KEXu2WGTURGjBKTBMIjNa`
URL pattern: `https://www.figma.com/design/6KEXu2WGTURGjBKTBMIjNa/P_lovable?node-id=XXX`

## Colors
- `dark`: #1D1D1D
- `light`: #FFFFFF
- `grey`: #BBBBBB
- `accent`: #F3FFAB
- `blue`: #78ADC4

## Copy / Writing Rules
- **No dashes, ever.** No em dash (—), no en dash (–), in any copy on this site (headings, body text, alt text, quotes). Use a period, comma, colon, or parentheses instead, restructuring the sentence if needed. This applies to all current and future copy — case studies, home pages, about, resume, everything.

## Known Issues
- **Job hunt blockers** — see `JOBHUNT.md` for the full checklist. Open: private
  e-mail (`CONTACT_EMAIL` in `content.ts`), LinkedIn URL, own domain, languages
  on the CV, impact bullets per role.
- Probe Diagnostic still renders the V1 (dark) treatment while home and the
  other case studies are V2 (white). Visual break for anyone clicking through.
- No wide cover video for Probe Diagnostic — home falls back to `cover.png`.
- ~48 em dashes in `content.ts` copy violate the no-dashes rule below. Cheapest
  fix is during the English translation pass, not as a separate sweep.
- Date ranges on `/resume` use en dashes (`10/2022 – heute`). Decide whether the
  no-dashes rule applies to date ranges or whether they are an exception.

## Contact Data
`CONTACT_EMAIL` and `LINKEDIN_URL` in `src/content.ts` are the single source for
every mailto and profile link. `personal` at the top of `Resume.tsx` holds phone,
portfolio URL and languages. Empty fields simply do not render, so the CV page is
always presentable, even half filled.

## Deployment
Vercel (connect via `vercel` CLI, framework preset: Vite, production branch: `main`).

## Git Workflow
- `main` = production
- Feature branches: `feature/[name]`, `fix/[name]`
- Each branch gets a Vercel preview URL

# Project Rules

Apply the claude-roast skill to every response and show the prompt score.
