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
      fontSize: {
        xs: '.675rem', // 90% de 12px
        sm: '.7875rem', // 90% de 14px
        base: '.9rem', // 90% de 16px
        lg: '1.0125rem', // 90% de 18px
        xl: '1.125rem', // 90% de 20px
        '2xl': '1.35rem', // 90% de 24px
        '3xl': '1.6875rem', // 90% de 30px
        '4xl': '2.025rem', // 90% de 36px
        '5xl': '2.7rem', // 90% de 48px
        '6xl': '3.6rem', // 90% de 64px
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
