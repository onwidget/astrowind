import { getLocalizedPermalink, getLocalizedBlogPermalink, getAsset } from './utils/permalinks';
import { useTranslations } from '~/i18n/translator';

export const getHeaderData = (locale) => {
  const { t } = useTranslations(locale);
  return {
    links: [
      {
        text: 'Homes',
        links: [
          {
            text: 'Sass',
            href: getLocalizedPermalink(locale, '/homes/saas'),
          },
          {
            text: 'Startup',
            href: getLocalizedPermalink(locale, '/homes/startup'),
          },
          {
            text: 'Mobile App',
            href: getLocalizedPermalink(locale, '/homes/mobile-app'),
          },
          {
            text: 'Personal',
            href: getLocalizedPermalink(locale, '/homes/personal'),
          },
        ],
      },
      {
        text: 'Pages',
        links: [
          {
            text: 'Features (Anchor Link)',
            href: getLocalizedPermalink(locale, '/#features'),
          },
          {
            text: 'Services',
            href: getLocalizedPermalink(locale, '/services'),
          },
          {
            text: 'Pricing',
            href: getLocalizedPermalink(locale, '/pricing'),
          },
          {
            text: 'About us',
            href: getLocalizedPermalink(locale, '/about'),
          },
          {
            text: 'Contact',
            href: getLocalizedPermalink(locale, '/contact'),
          },
          {
            text: 'Terms',
            href: getLocalizedPermalink(locale, '/terms'),
          },
          {
            text: 'Privacy policy',
            href: getLocalizedPermalink(locale, '/privacy'),
          },
        ],
      },
      {
        text: 'Landing',
        links: [
          {
            text: 'Lead Generation',
            href: getLocalizedPermalink(locale, '/landing/lead-generation'),
          },
          {
            text: 'Long-form Sales',
            href: getLocalizedPermalink(locale, '/landing/sales'),
          },
          {
            text: 'Click-Through',
            href: getLocalizedPermalink(locale, '/landing/click-through'),
          },
          {
            text: 'Product Details (or Services)',
            href: getLocalizedPermalink(locale, '/landing/product'),
          },
          {
            text: 'Coming Soon or Pre-Launch',
            href: getLocalizedPermalink(locale, '/landing/pre-launch'),
          },
          {
            text: 'Subscription',
            href: getLocalizedPermalink(locale, '/landing/subscription'),
          },
          {
            text: 'I18N Support',
            href: getLocalizedPermalink(locale, '/landing/i18n'),
          },
        ],
      },
      {
        text: 'Blog',
        links: [
          {
            text: 'Blog List',
            href: getLocalizedBlogPermalink(locale),
          },
          {
            text: 'Article',
            href: getLocalizedPermalink(locale, 'get-started-website-with-astro-tailwind-css', 'post'),
          },
          {
            text: 'Article (with MDX)',
            href: getLocalizedPermalink(locale, 'markdown-elements-demo-post', 'post'),
          },
          {
            text: 'Category Page',
            href: getLocalizedPermalink(locale, 'tutorials', 'category'),
          },
          {
            text: 'Tag Page',
            href: getLocalizedPermalink(locale, 'astro', 'tag'),
          },
        ],
      },
      {
        text: 'Widgets',
        href: '#',
      },
    ],
    actions: [{ type: 'button', text: t('header.download'), href: 'https://github.com/onwidget/astrowind' }],
  };
};

export const getFooterData = (locale) => {
  const { t } = useTranslations(locale);
  
  return {
    links: [
      {
        title: t('footer.product.title'),
        links: [
          { text: t('footer.product.features'), href: '#' },
          { text: t('footer.product.security'), href: '#' },
          { text: t('footer.product.team'), href: '#' },
          { text: t('footer.product.enterprise'), href: '#' },
          { text: t('footer.product.customerStories'), href: '#' },
          { text: t('footer.product.pricing'), href: '#' },
          { text: t('footer.product.resources'), href: '#' },
        ],
      },
      {
        title: t('footer.platform.title'),
        links: [
          { text: t('footer.platform.developerAPIs'), href: '#' },
          { text: t('footer.platform.partners'), href: '#' },
          { text: t('footer.platform.atom'), href: '#' },
          { text: t('footer.platform.electron'), href: '#' },
          { text: t('footer.platform.astrowindDesktop'), href: '#' },
        ],
      },
      {
        title: t('footer.support.title'),
        links: [
          { text: t('footer.support.docs'), href: '#' },
          { text: t('footer.support.communityForum'), href: '#' },
          { text: t('footer.support.professionalServices'), href: '#' },
          { text: t('footer.support.skills'), href: '#' },
          { text: t('footer.support.status'), href: '#' },
        ],
      },
      {
        title: t('footer.company.title'),
        links: [
          { text: t('footer.company.about'), href: '#' },
          { text: t('footer.company.blog'), href: '#' },
          { text: t('footer.company.careers'), href: '#' },
          { text: t('footer.company.press'), href: '#' },
          { text: t('footer.company.inclusion'), href: '#' },
          { text: t('footer.company.socialImpact'), href: '#' },
          { text: t('footer.company.shop'), href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.legal.terms'), href: getLocalizedPermalink(locale, '/terms') },
      { text: t('footer.legal.privacy'), href: getLocalizedPermalink(locale, '/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.`,
  };
};
