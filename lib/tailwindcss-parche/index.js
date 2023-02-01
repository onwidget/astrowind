const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

// const withOpacity = require('./utils').withOpacity;

const parche = plugin.withOptions(
  function (options = {}) {
    const { tokens: initialTokens = {} } = options;

    const tokens = initialTokens;

    return function ({ addBase, addUtilities, addComponents }) {
      addBase({
        html: {
          '--ph-font-sans': tokens?.fontFamily?.sans ? tokens?.fontFamily?.sans : 'ui-sans-serif',
          '--ph-font-serif': 'var(--ph-font-sans)',
          '--ph-font-heading': 'var(--ph-font-sans)',

          '--ph-color-default': 'rgb(16 16 16)',
          '--ph-color-muted': 'rgb(60 60 60)',
          '--ph-color-heading': 'rgb(0 0 0)',
          '--ph-color-bg-page': 'rgb(255 255 255)',
          '--ph-color-primary': 'rgb(33 150 243)',
          '--ph-color-secondary': 'rgb(239 99 19)',
          '--ph-color-accent': 'rgb(103 58 183)',
          '--ph-color-info': 'rgb(119 182 234)',
          '--ph-color-success': 'rgb(76 175 80)',
          '--ph-color-warning': 'rgb(251 189 35)',
          '--ph-color-error': 'rgb(248 114 114)',

          '--ph-color-link': 'var(--ph-color-primary)',
          '--ph-color-link-active': 'var(--ph-color-link)',

          '--ph-radii-image': '6px',
          '--ph-radii-btn': '9999px',

          '--ph-bg-btn': 'linear-gradient(99deg, var(--ph-color-primary) 0%, var(--ph-color-accent) 100%)',
          '--ph-bg-btn-hover': 'linear-gradient(99deg, var(--ph-color-accent) 0%, var(--ph-color-primary) 100%)',
        },

        '.dark': {
          // '--ph-font-sans': darkTokens?.fontFamily?.sans ? darkTokens?.fontFamily?.sans : 'var(--ph-font-sans)',

          '--ph-color-default': 'rgb(247, 248, 248)',
          '--ph-color-muted': 'rgb(182 201 217)',
          '--ph-color-heading': 'var(--ph-color-default)',
          '--ph-color-bg-page': 'rgb(3 6 32)',
          '--ph-color-primary': 'rgb(29 78 216)',
          '--ph-color-secondary': 'rgb(30 58 138)',
          '--ph-color-accent': 'rgb(135 77 2267)',
          '--ph-color-info': 'rgb(56 151 60)',
          '--ph-color-success': 'rgb(76 175 80)',
          '--ph-color-warning': 'rgb(251 189 35)',
          '--ph-color-error': 'rgb(248 114 114)',
          '--ph-color-link': 'var(--ph-color-primary)',
          '--ph-color-link-active': 'var(--ph-color-link)',
        },
      });

      addUtilities({
        '.bg-page': {
          'background-color': 'var(--ph-color-bg-page)',
        },

        '.bg-dark': {
          'background-color': 'rgb(3 6 32)',
        },
      });

      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center border-gray-400 border bg-transparent font-medium text-center text-base text-default leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 hover:border-gray-600':
            {},
          'border-radius': 'var(--ph-radii-btn)',
        },

        '.btn-ghost': {
          '@apply border-none shadow-none text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white': {},
        },

        '.btn-primary': {
          '@apply text-white border-primary hover:bg-blue-900 hover:border-blue-900 hover:text-white dark:text-white':
            {},
          background: 'var(--ph-bg-btn)',
        },

        '.btn-primary:hover': {
          background: 'var(--ph-bg-btn-hover)',
        },

        '.btn-sm': {
          '@apply ml-2 py-2.5 px-5 md:px-6 text-base md:text-[0.9375rem]': {},
        },

        '.btn-link': {
          '@apply border-none shadow-none p-0 md:p-0 text-muted hover:text-primary dark:hover:text-white dark:hover:text-white hover:underline rounded-none':
            {},
        },
      });
    };
  },
  function () {
    return {
      theme: {
        extend: {
          colors: {
            default: 'var(--ph-color-default)',
            heading: 'var(--ph-color-heading)',
            muted: 'var(--ph-color-muted)',
            primary: 'var(--ph-color-primary)',
            secondary: 'var(--ph-color-secondary)',
            accent: 'var(--ph-color-accent)',
            info: 'var(--ph-color-info)',
            success: 'var(--ph-color-success)',
            warning: 'var(--ph-color-warning)',
            error: 'var(--ph-color-error)',
            link: 'var(--ph-color-link)',
            linkActive: 'var(--ph-color-link-active)',
            background: 'var(--ph-color-bg-page)',
          },
          fontFamily: {
            sans: ['var(--ph-font-sans)', ...defaultTheme.fontFamily.sans],
            serif: ['var(--ph-font-serif)', ...defaultTheme.fontFamily.serif],
            heading: ['var(--ph-font-heading)', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    };
  }
);

module.exports = parche;
// require('tailwindcss-themer')({
//   defaultTheme: {
//     // put the default values of any config you want themed
//     // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
//     extend: {
//       // colors is used here for demonstration purposes
//       colors: {
//         primary: 'red',
//       },
//     },
//   },
//   themes: [
//     {
//       // name your theme anything that could be a valid css selector
//       // remember what you named your theme because you will use it as a class to enable the theme
//       name: 'dark',
//       // put any overrides your theme has here
//       // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
//       extend: {
//         colors: {
//           primary: 'blue',
//         },
//       },
//     },
//   ],
// }),
// ];
