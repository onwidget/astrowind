const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        third: 'var(--aw-color-third)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-slide-in': 'fade-in 1s forwards, slide-in 1s ease-out',
        'fade-slide-in-left': 'fade-in 1s forwards, slide-in-from-left 1s ease-out',
        'fade-slide-in-right': 'fade-in 1s forwards, slide-in-from-right 1s ease-out',
        bounce: 'bounce 1s infinite',
      },
      animationDelay: {
        0: '0ms',
        200: '200ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1000: '1000ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-30%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animationDelay: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
