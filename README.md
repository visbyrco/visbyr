# Visbyr

Nordic tech enterprise landing page built with Astro, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Astro 5.15.5
- **UI:** React 19.1.0
- **Styling:** Tailwind CSS 3.4.19 with custom design tokens
- **Typography:** Inter + JetBrains Mono (Google Fonts)
- **Icons:** Material Symbols Outlined

## Design System

Material Design 3-inspired tokens with Nordic aesthetic:

- **Primary:** `#0052ff` (Nordic Tech Blue)
- **Surface:** `#f7f9fb` (cool-tinted off-white)
- **Typography:** Inter (300-800), JetBrains Mono (400-500)
- **Border radius:** 0px (sharp, angular aesthetic)
- **Spacing:** xs (4px) → xxl (80px)

## Pages

- **Landing** (`/`) - Editorial hero, solutions grid, testimonial, method phases
- **Solutions** (`/solutions`) - Cloud infrastructure, AI analytics, secure networking
- **Contact** (`/contact`) - Engagement form, Stockholm HQ, vision section

## Components

| Component | Type | Purpose |
|---|---|---|
| `HeaderReact.tsx` | React | Scroll-aware frosted glass navigation |
| `Footer.astro` | Astro | 3-column link grid with logo |
| `ContactForm.tsx` | React | Focus-animated contact form |
| `SecurityGraphic.tsx` | React | Animated concentric circles + lock |
| `VisionSection.tsx` | React | Full-width image with hover scale |
| `SurgicalAccent.astro` | Astro | Decorative blue accent bar |

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
│   ├── components/     # React + Astro components
│   ├── layouts/        # BaseLayout.astro
│   ├── pages/          # index, solutions, contact
│   ├── styles/         # global.css (orphaned)
│   └── assets/         # (empty)
├── public/             # Static assets (logos)
├── astro.config.mjs
├── tailwind.config.js  # Custom design tokens
└── package.json
```

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build
