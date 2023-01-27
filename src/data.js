import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { SITE } from '~/config.mjs';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Cas d\'usage',
      links: [
        {
          text: 'Packaging',
          href: '#',
        },
        {
          text: 'Packing',
          href: '#',
        },
        {
          text: 'Protection des palettes',
          href: '#',
        },
        {
          text: 'Etudes de fin de ligne',
          href: '#',
        },
      ],
    },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],
  actions: [
    { type: 'button', text: 'Contact', href: getPermalink('/contact'), icon: 'tabler:mail' },
  ],
  showRssFeed: false,
};
  
export const footerData = {
  links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
    {
      title: 'Entreprise',
      links: [
        { text: 'Accueil', href: getPermalink('/') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Mentions légales', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Mentions légales', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:'+SITE.email },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
