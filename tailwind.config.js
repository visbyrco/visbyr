/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        hairline: 'var(--hairline)',
        wash: 'var(--wash)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        'on-accent': 'var(--on-accent)',
      },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
        display: ['Inter Tight', 'sans-serif'],
        body: ['Inter Tight', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      maxWidth: {
        page: '64rem',
        prose: '42rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
