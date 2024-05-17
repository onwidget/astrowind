import { getPermalink, getBlogPermalink, getProjectsPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        // {
        //   text: 'About me',
        //   href: getPermalink('/about'),
        // },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Projects',
          href: getProjectsPermalink(),
        },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData1 = {
  footNote: `
     © 2023 Made by Carol Hernandez. Nothing reserved, Take what u need, but never from greed
  `,
};
export const footerData2 = {
    secondaryLinks: [
      { text: 'Terms', href: getPermalink('/terms') },
      { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
  
  footNote: `
     © 2023 Made by Carol Hernandez. Nothing reserved, Take what u need, but never from greed
  `,
};
