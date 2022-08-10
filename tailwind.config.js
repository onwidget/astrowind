/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
