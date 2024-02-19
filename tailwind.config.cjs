const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: '1.25rem',
        '2xl': 'clamp(1rem, 1.5vw, 1.75rem)',
        '3xl': 'clamp(1.25rem, 2vw, 2rem)',
        '4xl': 'clamp(1.75rem, 2.5vw, 2.5rem)',
        '5xl': 'clamp(2rem, 3vw, 3.25rem)',
        '6xl': 'clamp(2.5rem, 3.5vw, 3.5rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
