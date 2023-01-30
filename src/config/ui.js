export default {
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  tokens: {
    default: {
      colors: {
        default: 'rgb(16 16 16)',
        heading: 'rgb(0 0 0)',
        muted: 'rgb(40 40 40)',

        bgPage: 'rgb(255 255 255)',

        primary: 'rgb(0 124 220)',
        secondary: 'rgb(30 58 138)',
        accent: 'rgb(109 40 217)',
        info: 'rgb(119 182 234)',
        success: 'rgb(54 211 153)',
        warning: 'rgb(251 189 35)',
        error: 'rgb(248 114 114)',

        link: 'var(--ph-color-primary)',
        linkActive: 'var(--ph-color-link)',
      },
      fonts: {
        sans: 'InterVariable',
        serif: 'var(--ph-font-sans)',

        heading: 'var(--ph-font-sans)',
      },
    },
    dark: {
      colors: {
        default: 'rgb(247, 248, 248)',
        heading: 'rgb(247, 248, 248)',
        muted: 'rgb(200, 188, 208)',

        bgPage: 'rgb(3 6 32)',

        primary: 'rgb(29 78 216)',
        secondary: 'rgb(30 58 138)',
        accent: 'rgb(135 77 2267)',
        info: 'rgb(58 191 248)',
        success: 'rgb(54 211 153)',
        warning: 'rgb(251 189 35)',
        error: 'rgb(248 114 114)',

        link: 'var(--ph-color-primary)',
        linkActive: 'var(--ph-color-link)',
      },
      fonts: {},
    },
  },
};
