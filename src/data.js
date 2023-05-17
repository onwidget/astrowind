import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [
    {
      type: 'primary',
      text: 'Join the waitlist',
      href: 'https://airtable.com/shrS5CDFSytFvbRoB',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/OpenHako' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@OpenHako' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/OpenHako' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/OpenHako/openhako.com"> Website source</a>
  `,
};
