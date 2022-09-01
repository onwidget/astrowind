export const SITE = {
  name: "AstroWind",

  origin: "https://astrowind.vercel.app",
  basePathname: "/",

  title: "AstroWind — Your website with Astro + Tailwind CSS",
  description: "🚀 AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",
};

export const BLOG = {
  disabled: false,
  slug: "blog",

  postsWithoutBlogSlug: true,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
};
