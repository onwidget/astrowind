import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Tes Kepribadian',
      links: [
        {
          text: 'MBTI',
          href: getPermalink('/#features'),
        },
        {
          text: 'DISC',
          href: getPermalink('/services'),
        },
        {
          text: 'Simulasi Papi Kostick',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Simulasi EPPS',
          href: getPermalink('/about'),
        },
        {
          text: 'Simulasi Keswa',
          href: getPermalink('/contact'),
        }
      ],
    },
    {
      text: 'Tes Kompetensi',
      links: [
        {
          text: 'Tes Angka Hilang',
          href: getPermalink('/#features'),
        },
        {
          text: 'Tes Huruf Hilang',
          href: getPermalink('/services'),
        },
        {
          text: 'Tes Simbol Hilang',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Tes Koran Online / Pauli',
          href: getPermalink('/about'),
        },
        {
          text: 'Tes Kraeplin Online',
          href: getPermalink('/contact'),
        },
        {
          text: 'Tes Gaya Belajar',
          href: getPermalink('/terms'),
        },
        {
          text: '',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Artikel Terbaru',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Kategori',
          href: getPermalink('category'),
        },
        {
          text: 'Tags',
          href: getPermalink('tag'),
        },
      ],
    },
    {
      text: 'Kamus Psikologi',
      href: '#',
    },
  ],
  
};

export const footerData = {
  links: [
    {
      title: '',
      links: [],
    },
    {
      title: 'Tes Kepribadian',
      links: [
        {
          text: 'MBTI',
          href: getPermalink('/#features'),
        },
        {
          text: 'DISC',
          href: getPermalink('/services'),
        },
        {
          text: 'Simulasi Papi Kostick',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Simulasi EPPS',
          href: getPermalink('/about'),
        },
        {
          text: 'Simulasi Keswa',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      title: 'Tes Kompetensi',
      links: [
        {
          text: 'Tes Angka Hilang',
          href: getPermalink('/#features'),
        },
        {
          text: 'Tes Huruf Hilang',
          href: getPermalink('/services'),
        },
        {
          text: 'Tes Simbol Hilang',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Tes Koran Online / Pauli',
          href: getPermalink('/about'),
        },
        {
          text: 'Tes Kraeplin Online',
          href: getPermalink('/contact'),
        },
        {
          text: 'Tes Gaya Belajar',
          href: getPermalink('/terms'),
        },
        {
          text: '',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      title: 'About Us',
      links: [
        { text: 'FAQ', href: getPermalink ('/faq') },
        { text: 'Privacy Policy', href: getPermalink ('/privacy-policy') },
        { text: 'Terms', href: getPermalink ('/kebijakan') },
        { text: 'Tentang Kami', href: getPermalink ('/tentang-kami') },
        { text: 'Status', href: getPermalink ('/') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '' },
    { text: '' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/psikopop'},
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/hellopsikopop' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made with ❤️ by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Team Psikopop </a> · All rights reserved.
  `,
};
