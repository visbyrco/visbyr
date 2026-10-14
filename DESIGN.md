---
name: Visbyr
colors:
  light:
    background: '#f6f7f7'
    ink: '#171b1c'
    muted: '#576162'
    faint: '#8a9596'
    hairline: '#dde2e2'
    wash: '#eff1f1'
    card: '#ffffff'
    accent: '#0d4a50'
    accent-strong: '#0a3c41'
    on-accent: '#f2f7f7'
  dark:
    background: '#121515'
    ink: '#e4e8e8'
    muted: '#9aa5a5'
    faint: '#6b7677'
    hairline: '#262b2b'
    wash: '#181c1c'
    card: '#171b1b'
    accent: '#8fd2d6'
    accent-strong: '#b8e2e5'
    on-accent: '#0d282a'
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: '600'
    fontSize: clamp(2.25rem, 6vw, 4.25rem)
    lineHeight: '1.0'
    letterSpacing: '-0.03em'
  section-title:
    fontFamily: Inter Tight
    fontWeight: '600'
    fontSize: clamp(1.75rem, 3.5vw, 2.5rem)
    lineHeight: '1.05'
    letterSpacing: '-0.03em'
  body:
    fontFamily: Inter Tight
    fontWeight: '400'
    fontSize: 16px
    lineHeight: '1.65'
    letterSpacing: '0'
  eyebrow:
    fontFamily: Geist Mono
    fontWeight: '400'
    fontSize: 11px
    letterSpacing: '0.08em'
    textTransform: uppercase
  data:
    fontFamily: Geist Mono
    fontWeight: '400'
    fontSize: 12px
    lineHeight: '1.6'
---

## Brand & style

The house style is quiet Nordic editorial. One accent, hairline rules, generous whitespace, and typography that does the pointing. The site should read like a well-set document, not a dashboard.

What this replaces: the earlier "cyber-lounge" direction (frosted glass panels, cyan bloom shadows, grain overlays, electric-purple accents) made the site feel templated. Those are gone. The chat product at chat.visbyr.com keeps its own UI; this spec covers the marketing site in this repo.

## Colors

Light mode is a cool paper `#f6f7f7` with near-black ink `#171b1c`. Dark mode is a soft graphite `#121515` with pale text `#e4e8e8`. In both, `muted` carries secondary text and `faint` the smallest labels.

Accent is deep teal `#0d4a50` in light (white text on top) and pale teal `#8fd2d6` in dark (dark text on top). It appears in exactly three places: primary buttons, text links that deserve attention, and the italic phrase in a page heading. If the accent shows up anywhere else, the page is getting loud.

`hairline` is the section and row divider, 1px everywhere. `wash` is the single tinted background used for alternating strips. `card` is white in light and barely lifted in dark; cards exist only where a form or case study needs a bordered container.

## Typography

Two typefaces, clear jobs.

Inter Tight does everything textual: headings at 600 with -0.03em tracking, body at 400/16px/1.65. Headlines are sentence case. No font ever exceeds weight 600; big and medium beats big and fat.

Geist Mono is for eyebrows, coordinates, durations, stats, code, and file names. 11–12px, 0.08em tracking, uppercase for eyebrows only.

Sentence case everywhere. Headlines do not end in periods.

## Layout

Content column is 64rem (`max-w-page`) with 5/8-cell gutters. Sections are separated by full-width 1px rules, not background changes. Inside a section, structure comes from a 12-column grid and hairline dividers, not cards.

Lists of things (roles, notes, cases, phases) are rows divided by hairlines. A row shares one baseline grid: mono label column left, content middle, action link right.

## Imagery

Real photography only, mostly grayscale, always with a 1px hairline border and a mono caption underneath. No drop shadows, no rounded corners on images. Photos appear where they earn attention: one hero image per page at most.

## Components

Header: floating, detached from the viewport edge. A rounded-full glass bar (85% background blur, hairline border, soft shadow) centered over the page with the logo, sentence-case links, and one teal CTA. Content scrolls beneath it.

Buttons: two kinds. Primary is solid accent, 3px radius, 13px medium. Secondary is a plain text link with a small arrow SVG that nudges right on hover. No pills, no glow.

Arrows are inline SVGs (`ArrowRight`, `ArrowUpRight`), never an icon font. There are no other icons in the site chrome.

Forms: white fields on hairline borders, 3px radius, mono uppercase labels, accent focus ring. The form is the only justified use of a card.

Cards: white or `card` surface, 1px hairline, square corners, optional mono header strip separated by a rule. Used for case study summaries and code mockups. Nothing nests a card inside a card.
