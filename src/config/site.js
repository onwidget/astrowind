export default {
  name: 'Astrowind',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  // Default SEO metadata
  metadata: {
    title: {
      default: 'Astrowind',
      template: '%s — Astrowind',
    },
    robots: {
      index: true,
      follow: true,
    },
    description:
      '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',
    openGraph: {
      siteName: 'Astrowind',
      images: [
        {
          url: '~/assets/images/default.jpg',
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en',
      type: 'website',
    },
    twitter: {
      handle: '@onwidget',
      site: '@onwidget',
      cardType: 'summary_large_image',
    },
  },

  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};
