# Visbyr

Small two-person software studio site built with Astro, React, and Tailwind CSS. Vilhelm Gain (founder) and Timothy Wong. Visbyr Chat is the only product right now.

## Tech Stack

- **Framework:** Astro 5
- **UI:** React 19 (only the contact form hydrates)
- **Styling:** Tailwind CSS 3 with a small token set
- **Typography:** Inter Tight + Geist Mono (Google Fonts)

## Design System

See `DESIGN.md` for the full spec. Short version: quiet Nordic editorial.

- **Canvas:** `#f6f7f7` light / `#121515` dark
- **Accent:** deep teal `#0d4a50` light / pale teal `#8fd2d6` dark
- **Structure:** 1px hairline rules between sections and rows, 64rem content column
- **Type:** Inter Tight (600 headings, 400 body) + Geist Mono for labels, stats, and code
- **Icons:** inline SVG arrows only, no icon font
- **Radii:** 3px on buttons and inputs, square everywhere else

Dark mode follows `prefers-color-scheme` (class on `<html>`, set in `BaseLayout.astro`).

## Pages

- **Landing** (`/`) - hero, product, people (Vilhelm Gain, Timothy Wong)
- **Chat** (`/chat`) - product page with composer mock
- **Contact** (`/contact`) - form, people, direct email
- **Legal** (`/legal`), **Privacy** (`/privacy`)

## Components

| Component | Type | Purpose |
|---|---|---|
| `SiteHeader.astro` | Astro | Fixed nav, static markup (no hydration) |
| `SiteFooter.astro` | Astro | 3-column link grid |
| `PageHeader.astro` | Astro | Shared page opener (index, title, lede) |
| `Eyebrow.astro` | Astro | Section label with index and rule |
| `CtaSection.astro` | Astro | Shared end-of-page CTA |
| `ArrowRight.astro` / `ArrowUpRight.astro` | Astro | Link arrows |
| `ContactForm.tsx` | React | Contact form with sent state |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
visbyr/
├── src/
│   ├── components/     # Shared components (see table above)
│   ├── layouts/        # BaseLayout.astro (fonts, dark mode)
│   ├── pages/          # One file per route
│   └── styles/         # global.css (tokens + eyebrow/rule helpers)
├── public/             # Favicon
├── astro.config.mjs
├── tailwind.config.js  # Token bindings
└── package.json
```
