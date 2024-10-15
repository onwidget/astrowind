import { getBlogPermalink } from './utils/permalinks';
import { getAsset } from '~/utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Documentation',
      href: 'https://docs.trieve.ai',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'DocSearch',
      href: '/docsearch',
    },
    {
      text: 'HN Search',
      href: 'https://hn.trieve.ai',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { text: 'Login', href: 'https://dashboard.trieve.ai', target: '_blank', variant: 'link' },
    { text: 'Get a demo', href: 'https://cal.com/nick.k', target: '_blank', variant: 'secondary' },
    { text: 'Sign up', href: 'https://dashboard.trieve.ai', target: '_blank', variant: 'primary' },
  ],
  showRssFeed: false,
  showToggleTheme: false,
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.trieve.ai' },
        { text: 'Matrix', href: 'https://matrix.to/#/#trieve-general:trieve.ai' },
        { text: 'Discord', href: 'https://discord.gg/E9sPRZqpDT' },
        {
          text: '+1 628-222-4090',
          href: 'tel:+16282224090',
        },
        {
          text: 'humans@trieve.ai',
          href: 'mailto:humans@trieve.ai',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Admin Dashboard', href: 'https://dashboard.trieve.ai' },
        { text: 'Privacy Policy', href: '/legal/privacy-policy' },
        { text: 'GitHub', href: 'https://github.com/devflowinc/trieve' },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Pricing', href: '/pricing' },
        { text: 'Developer Documentation', href: 'https://docs.trieve.ai' },
        { text: 'Typescript SDK', href: 'https://ts-sdk.trieve.ai' },
        { text: 'HN Search Engine', href: 'https://hn.trieve.ai' },
      ],
    },
    {
      title: 'Comparisons',
      links: [{ text: 'vs Algolia', href: '/trieve-vs-algolia' }],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/trieveai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/devflowinc/trieve' },
    { ariaLabel: 'Matrix', icon: 'tabler:brand-matrix', href: 'https://matrix.to/#/#trieve-general:trieve.ai' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/E9sPRZqpDT' },
    { ariaLabel: 'RSS Feed', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  secondaryLinks: [],
};
