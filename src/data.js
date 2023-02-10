import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Landing',
      links: [
        {
          text: 'Sass',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/landing/mobile-app'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ],
};
  
export const footerData = {
  links: [
    {
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
