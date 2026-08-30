# Lisa's Portfolio

## Stack
React 18 + TypeScript + Vite 5 + React Router v6 + Tailwind CSS v3

## Routes

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `Home.tsx` | V1: dark bg, editorial layout |
| `/v2` | `HomeV2.tsx` | V2: white bg, masonry grid, Tiempos headings |
| `/about` | `About.tsx` | |
| `/resume` | `Resume.tsx` | |
| `/projekte/fyta-sensor-onboarding` | `CaseStudyFyta.tsx` | FYTA case study |
| `/projekte/soil-probe-diagnostic` | `CaseStudyProbe.tsx` | Probe case study |
| `/projekte/inklusive-lern-app` | `CaseStudyThesis.tsx` | Thesis/learning app |
| `/template` | `CaseStudyTemplate.tsx` | Reusable case study template |
| `/design-system` | `DesignSystem.tsx` | Internal design tokens reference |

External link (no route): `https://infovis.fh-potsdam.de/femscroll/daten/` — Scrollytelling/data vis project

## Design Versions
- **V1** (`Home.tsx`): Dark (#1D1D1D), Neue Montreal body, Times italic headings, card-based grid
- **V2** (`HomeV2.tsx`): White bg, TiemposText headings, Geist body, Geist Mono nav, 2-col masonry, CV table in hero

Both share `content.ts` as data source. Route-based switching, not branches.

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
- `public/images/fyta-onboarding/01_erweiterung.png` — broken export (~1.4KB), needs re-export from Figma
- `public/images/fyta-onboarding/casestudy-01.png` — broken export (~1.4KB), needs re-export from Figma
- No wide cover video for Probe Diagnostic case study

## Deployment
Vercel (connect via `vercel` CLI, framework preset: Vite, production branch: `main`).

## Git Workflow
- `main` = production
- Feature branches: `feature/[name]`, `fix/[name]`
- Each branch gets a Vercel preview URL
