---
name: Visbyr
colors:
  light:
    surface: '#f8fafb'
    surface-dim: '#d8dadb'
    surface-bright: '#f8fafb'
    surface-container-lowest: '#ffffff'
    surface-container-low: '#f2f4f5'
    surface-container: '#eceeef'
    surface-container-high: '#e6e8e9'
    surface-container-highest: '#e1e3e4'
    on-surface: '#191c1d'
    on-surface-variant: '#3f484a'
    inverse-surface: '#2e3132'
    inverse-on-surface: '#eff1f2'
    outline: '#6f797a'
    outline-variant: '#bec8c9'
    surface-tint: '#15686f'
    primary: '#00464b'
    on-primary: '#ffffff'
    primary-container: '#005f66'
    on-primary-container: '#8fd6de'
    inverse-primary: '#8bd2da'
    secondary: '#5f5c6d'
    on-secondary: '#ffffff'
    secondary-container: '#e5e0f4'
    on-secondary-container: '#656273'
    tertiary: '#00464c'
    on-tertiary: '#ffffff'
    tertiary-container: '#005f67'
    on-tertiary-container: '#72dae7'
    error: '#ba1a1a'
    on-error: '#ffffff'
    error-container: '#ffdad6'
    on-error-container: '#93000a'
    primary-fixed: '#a6eff6'
    primary-fixed-dim: '#8bd2da'
    on-primary-fixed: '#002022'
    on-primary-fixed-variant: '#004f55'
    secondary-fixed: '#e5e0f4'
    secondary-fixed-dim: '#c8c4d7'
    on-secondary-fixed: '#1c1a28'
    on-secondary-fixed-variant: '#474555'
    tertiary-fixed: '#8cf2ff'
    tertiary-fixed-dim: '#6ed6e2'
    on-tertiary-fixed: '#001f23'
    on-tertiary-fixed-variant: '#004f56'
    background: '#f8fafb'
    on-background: '#191c1d'
    surface-variant: '#e1e3e4'
    cyber-cyan: '#00f0ff'
    electric-purple: '#7000ff'
    obsidian-black: '#101415'
    crimson-error: '#b42318'
    slate-text: '#13191b'
  dark:
    surface: '#101415'
    surface-dim: '#101415'
    surface-bright: '#363a3b'
    surface-container-lowest: '#0b0f10'
    surface-container-low: '#181c1d'
    surface-container: '#1d2022'
    surface-container-high: '#272b2c'
    surface-container-highest: '#313536'
    on-surface: '#e0e3e4'
    on-surface-variant: '#b9cacb'
    inverse-surface: '#e0e3e4'
    inverse-on-surface: '#2d3132'
    outline: '#849495'
    outline-variant: '#3b494b'
    surface-tint: '#00dbe9'
    primary: '#dbfcff'
    on-primary: '#00363a'
    primary-container: '#00f0ff'
    on-primary-container: '#006970'
    inverse-primary: '#006970'
    secondary: '#d1bcff'
    on-secondary: '#3c0090'
    secondary-container: '#7000ff'
    on-secondary-container: '#ddcdff'
    tertiary: '#ddfcff'
    on-tertiary: '#00363b'
    tertiary-container: '#3ceffd'
    on-tertiary-container: '#006971'
    error: '#ffb4ab'
    on-error: '#690005'
    error-container: '#93000a'
    on-error-container: '#ffdad6'
    primary-fixed: '#7df4ff'
    primary-fixed-dim: '#00dbe9'
    on-primary-fixed: '#002022'
    on-primary-fixed-variant: '#004f54'
    secondary-fixed: '#e9ddff'
    secondary-fixed-dim: '#d1bcff'
    on-secondary-fixed: '#23005b'
    on-secondary-fixed-variant: '#5700c9'
    tertiary-fixed: '#7ef4ff'
    tertiary-fixed-dim: '#01dbe9'
    on-tertiary-fixed: '#002022'
    on-tertiary-fixed-variant: '#004f55'
    background: '#101415'
    on-background: '#e0e3e4'
    surface-variant: '#313536'
    surface-lowest: '#0b0f10'
    surface-highest: '#323537'
    mist-text: '#e0e3e5'
    seafoam-slate: '#b9cacb'
    error-coral: '#ffb4ab'
    glass-border: rgba(255, 255, 255, 0.08)
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  display-lg:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-base:
    fontFamily: Inter Tight
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter Tight
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-base:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
  container-max: 56rem
  sidebar-width: 260px
---

## Brand & style

We wanted something fast without feeling cold. Internal name is cyber-lounge, cyber-crystalline in dark mode, same system either way. It is for people who live in the tool, researchers and developers, and it should stay quiet enough to let them work.

Light mode is pale and airy at #f8fafb. Dark mode drops to obsidian #101415, a very dark cyan that gives glass something to sit against. In both, glass does the atmosphere. Frosted panels, translucent layers, and soft cyan and violet blurs behind the content give depth without clutter. A thin rim highlight and a faint halo mark elevation, and spring motion snaps then settles with `cubic-bezier(0.22, 1, 0.36, 1)`. In dark mode we add a 2% monochrome grain on the glass so it does not look plastic. The result feels a bit futuristic but still a workbench. I like that it does not try too hard to impress.

Markdown and structured data stay first. Decoration stays second.

## Colors

This is the only place light and dark differ. Everything else in this file is shared. Pick the palette that matches the mode.

Light centers on off-white #f8fafb and dark on obsidian #101415. Both use the same hue logic, just inverted. Tokens are under `colors.light` and `colors.dark` in the frontmatter.

Primary handles actions and focus. In light it is deep teal #00464b with white text. In dark swap to cyber-cyan #00f0ff with #00363a text and add a soft bloom at `rgba(0, 219, 233, 0.25)`. You should not need both at once.

Secondary is lavender-slate #e5e0f4 in light and electric-purple #7000ff in dark. Use it for secondary containers, tool icons, and model badges. If you reach for it for primary actions, you are using it too much.

Surfaces step up in small increments. In light, `surface-lowest` #ffffff to `surface-highest` #e1e3e4. In dark, #0b0f10 to #323537. Same idea, recessed wells at the low end, hover at the high end.

Text in light is #191c1d. In dark it is #e0e3e5, not pure white, because pure white on obsidian vibrates. Borders follow the same rule, light uses #bec8c9, dark uses a hairline `rgba(255, 255, 255, 0.08)`.

## Typography

Each typeface has a clear job. Do not mix them.

Sora holds headings and greetings. Geometric, a little futuristic, tight tracking at -0.015em. It holds a title together.

Inter Tight carries all body copy. Prompts, answers, long prose, everything you read. Base is 15px on 24px, small is 14px on 22px. Both at 400 with no extra tracking. That size stays readable in a narrow chat column and still feels tight enough for dense responses. I picked Inter Tight over Montserrat because it stays narrower at the same size, so you get more characters per line without shrinking the type.

Manrope does the small UI. Labels, tags, buttons, usually at 12px with 0.02em tracking and weight 600.

Geist Mono is only for code and data. If it is not code, do not use it.

On mobile, pull `display-xl` 32px down to 24px, and `display-lg` 32px down to 28px. They still read as displays without wrapping badly.

## Layout & spacing

The chat wants a narrow column. The shell wants to be fluid. We do both.

Keep the chat canvas centered at max 56rem, about 896px. That gives a good line length for Inter Tight. The shell is a 12-column grid with a fixed left sidebar at 260px and an optional right inspector at 50vw for artifacts. On phones, both sidebars turn into sheets that slide up with a drag handle.

Scale is 4px. Use 8px for tight gaps, 16px for standard gaps, 24px to 32px between message pairs so you can see who is speaking without extra dividers. Page margins are 16px on mobile and 24px on desktop. Simple rhythm, stick to it.

## Elevation & depth

We do not stack shadows. We stack glass and blur.

Background is the lowest level, flat pale or obsidian. Mid level is cards and chat bubbles. In dark they sit at `rgba(29, 32, 34, 0.72)` with 12px backdrop blur and a faint top-to-bottom gradient from `rgba(255,255,255,0.06)` to `0.02`. In light they are solid surface tokens with no blur.

Top level is anything that floats, modals, popovers, the composer bar. In dark those go to `rgba(29, 32, 34, 0.88)` with 16px blur. In light they get a deep ambient shadow at `0 16px 48px -6px rgba(0,0,0,0.35)`. Everywhere, every elevated piece should have that hairline border where light catches the edge of glass, `rgba(255, 255, 255, 0.08)` in dark, `outline-variant` in light. Without it the layers go flat.

Active primary elements get the bloom instead of a shadow. That is your elevation signal.

## Shapes

Base radius is 8px. Friendly but still professional.

Buttons and chips stay at 8px to 12px. User messages are softer at 16px to 20px so they read as bubbles. The composer is the softest thing on the page, full pill or 24px, so it feels like a separate tool you can grab.

For user messages we cut the top-right corner back to a small radius. The bubble points back to the sender. Small detail, you read it instantly.

## Components

Primary buttons are solid, deep teal in light and #00f0ff in dark, with a faint glow on hover, not at rest. Ghost buttons are for low priority only, background on hover and nothing else. Secondary buttons are tolerant, #7000ff at 15% with a lavender border in dark, muted lavender fill in light.

The composer is a floating bar with backdrop blur. In dark it is glass with the 16px blur, in light it is solid with shadow. It holds an auto-expanding textarea and small tool pills for model selection and search. Keep it anchored to the bottom, not embedded in the feed.

Cards use the same surface treatment as elevation mid. Faint gradient and standard 1px border in dark, flat surface in light. No extra shadow in dark.

Inputs look inset. In dark the fill is `rgba(255, 255, 255, 0.06)` on obsidian, focus gets the cyan outline and bloom. In light they are white with an outline-variant border, focus gets the deep teal outline.

Chips and badges are Manrope, small, 8px radius. Use tertiary tint for info, not for actions.

Message feed has two rules. User messages go right as compact chips with a tint, `bg-primary/10` in light, translucent glass in dark. Assistant messages stay left, full bleed, Sora for headings and Inter Tight for body. No bubble around the assistant. Let the text breathe.

Reasoning blocks are collapsible and sit on a muted background at 60% opacity. When thinking is active, add a shimmer. When it is done, the shimmer stops.

Code blocks use Shiki for highlighting, with a header bar for the filename and a copy button that is easy to hit.

Artifacts live in a split view. The canvas slides in from the right and pushes the chat aside, so you can read code or charts next to the conversation instead of inside it.
