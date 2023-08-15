import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { useTranslations } from '~/i18n/translator';

export const getHeaderData = (lang) => {
  const { t } = useTranslations(lang);
  return {
    links: [
      {
        text: t('header.homes.title'),
        links: [
          {
            text: t('header.homes.saas'),
            href: getPermalink('/homes/saas'),
          },
          {
            text: t('header.homes.startup'),
            href: getPermalink('/homes/startup'),
          },
          {
            text: t('header.homes.app'),
            href: getPermalink('/homes/mobile-app'),
          },
          {
            text: t('header.homes.personal'),
            href: getPermalink('/homes/personal'),
          },
        ],
      },
      {
        text: t('header.pages.title'),
        links: [
          {
            text: t('header.pages.features'),
            href: getPermalink('/#features'),
          },
          {
            text: t('header.pages.services'),
            href: getPermalink('/services'),
          },
          {
            text: t('header.pages.pricing'),
            href: getPermalink('/pricing'),
          },
          {
            text: t('header.pages.aboutUs'),
            href: getPermalink('/about'),
          },
          {
            text: t('header.pages.contactUs'),
            href: getPermalink('/contact'),
          },
          {
            text: t('header.pages.terms'),
            href: getPermalink('/terms'),
          },
          {
            text: t('header.pages.privacyPolicy'),
            href: getPermalink('/privacy'),
          },
        ],
      },
      {
        text: t('header.landing.title'),
        links: [
          {
            text: t('header.landing.leadGeneration'),
            href: getPermalink('/landing/lead-generation'),
          },
          {
            text: t('header.landing.sales'),
            href: getPermalink('/landing/sales'),
          },
          {
            text: t('header.landing.clickThrough'),
            href: getPermalink('/landing/click-through'),
          },
          {
            text: t('header.landing.squeeze'),
            href: getPermalink('/landing/squeeze'),
          },
          {
            text: t('header.landing.product'),
            href: getPermalink('/landing/product'),
          },
          {
            text: t('header.landing.comingSoon'),
            href: getPermalink('/landing/pre-launch'),
          },
        ],
      },
      {
        text: t('header.blog.title'),
        links: [
          {
            text: t('header.blog.blogList'),
            href: getBlogPermalink(),
          },
          {
            text: t('header.blog.article'),
            href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
          },
          {
            text: t('header.blog.articleMdx'),
            href: getPermalink('markdown-elements-demo-post', 'post'),
          },
          {
            text: t('header.blog.category'),
            href: getPermalink('tutorials', 'category'),
          },
          {
            text: t('header.blog.tag'),
            href: getPermalink('astro', 'tag'),
          },
        ],
      },
      {
        text: t('header.widgets'),
        href: '#',
      },
    ],
    actions: [{ type: 'button', text: t('header.download'), href: 'https://github.com/onwidget/astrowind' }],
  };
};

export const getFooterData = (lang) => {
  const { t } = useTranslations(lang);
  
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
      { text: t('footer.legal.terms'), href: getPermalink('/terms') },
      { text: t('footer.legal.privacy'), href: getPermalink('/privacy') },
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
