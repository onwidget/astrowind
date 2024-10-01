// import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // links: [
  //   // deleted homes
  //   {
  //     text: 'Pages',
  //     links: [
  //       {
  //         text: 'Services',
  //         href: getPermalink('/services'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: getPermalink('/pricing'),
  //       },
  //       {
  //         text: 'About us',
  //         href: getPermalink('/about'),
  //       },
  //       {
  //         text: 'Contact',
  //         href: getPermalink('/contact'),
  //       },
  //       // {
  //       //   text: 'Terms',
  //       //   href: getPermalink('/terms'),
  //       // },
  //       // {
  //       //   text: 'Privacy policy',
  //       //   href: getPermalink('/privacy'),
  //       // },
  //     ],
  //   },
  //   {
  //     text: 'Blog',
  //     links: [
  //       {
  //         text: 'Blog List',
  //         href: getBlogPermalink(),
  //       },
  //       // {
  //       //   text: 'Article',
  //       //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
  //       // },
  //       // {
  //       //   text: 'Article (with MDX)',
  //       //   href: getPermalink('markdown-elements-demo-post', 'post'),
  //       // },
  //     ],
  //   },
  //   {
  //     text: 'Locations',
  //     href: '#',
  //   },
  //   {
  //     text: 'Support',
  //     href: '#',
  //   },
  // ],
  actions: [{ text: 'Pricing', href: '/pricing'}],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product - Example footer breadcrumbs',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       // { text: 'Security', href: '#' },
  //       // { text: 'Team', href: '#' },
  //       // { text: 'Enterprise', href: '#' },
  //       // { text: 'Customer stories', href: '#' },
  //       // { text: 'Pricing', href: '#' },
  //       // { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       // { text: 'Partners', href: '#' },
  //       // { text: 'Atom', href: '#' },
  //       // { text: 'Electron', href: '#' },
  //       // { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Example', href: '#' },
  //       // { text: 'Community Forum', href: '#' },
  //       // { text: 'Professional Services', href: '#' },
  //       // { text: 'Skills', href: '#' },
  //       // { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       // { text: 'Careers', href: '#' },
  //       // { text: 'Press', href: '#' },
  //       // { text: 'Inclusion', href: '#' },
  //       // { text: 'Social Impact', href: '#' },
  //       // { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Top Stream Media 2024<a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"></a> · All rights reserved.
  `,
};
