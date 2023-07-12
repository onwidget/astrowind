import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'CIMADent',

  origin: 'https://cimadent.cl',
  basePathname: '/',
  trailingSlash: false,

  title: 'CIMADent: El Software Dental Líder en Gestión para Odontólogos y Clínicas',
  description:
    'CIMADent es el Software Dental para odontólogos y clínicas dentales que facilita la gestión dental con una plataforma fácil de usar y económica.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'es',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: 'G-EPTDDS3QS3', // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
