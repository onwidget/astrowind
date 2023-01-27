// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('./lib/tailwindcss-parche')({
      tokens: {
        fontFamily: {
          sans: 'InterVariable',
        },
      },
      dark: {
        tokens: {
          fontFamily: {},
        },
      },
    }),
  ],
  darkMode: 'class',
};
