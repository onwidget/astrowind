import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        'on-primary': 'var(--aw-color-on-primary)',
        accent: 'var(--aw-color-accent)',
        'on-accent': 'var(--aw-color-on-accent)',
        background: 'var(--aw-color-background)',
        'on-background': 'var(--aw-color-on-background)',
        'on-background-muted': 'var(--aw-color-on-background-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
