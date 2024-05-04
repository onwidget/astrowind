import { getPermalink, getHomePermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
      {
        text: 'Beranda',
        href: getHomePermalink(),
      },
      {
        text: 'Tentang Kami',
        href: getPermalink('/about'),
      },
      {
        text: 'Artikel',
        href: getPermalink('/blog'),
      },
      {
        text: 'Hubungi Kami',
        href: getPermalink('/contact'),
      },
    
  ],
  actions: [{ text: 'Telpon', href: 'tel:+62215580197' }],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Beranda', href: 'https://msfoam.id' },
        { text: 'Tentang Kami', href: '/about' },
        { text: 'Artikel', href: '/blog' },
        { text: 'Hubungi Kami', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
