import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'AstroWind',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'AstroWind — Free template for create a website with Astro + Tailwind CSS',
  description:
    '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    list: {
      pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    post: {
      pathname: '', // empty for /some-post, value for /pathname/some-post
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // set empty to change from /category/some-category to /some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
