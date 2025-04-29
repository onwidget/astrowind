import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },

    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Resume',
      href: getPermalink('/resume'),
    },
    {
      text: 'Pages',
      links: [
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
  ],
  actions: [{ text: 'Hire Me', href: 'https://wa.me/917988815263', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/neerajlovecyber' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neerajsinghpanghal/' },
    { ariaLabel: 'linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/neerajlovecyber/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/neerajlovecyber' },
  ],
  footNote: `
    💖
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://neerajlovecyber.com/"> Neerajlovecyber</a> · All rights reserved.
  `,
};
