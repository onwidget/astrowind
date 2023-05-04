import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      type: 'ghost',
      text: 'Download',
      href: 'https://github.com/OpenHako/hako-desktop/releases',
    },
    {
      type: 'primary',
      text: 'Sign In',
      href: 'https://app.openhako.com/login',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://reddit.com/r/OpenHako' },
    { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/OpenHako' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@OpenHako' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/OpenHako' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/OpenHako/openhako.com"> Source code</a>
  `,
};
