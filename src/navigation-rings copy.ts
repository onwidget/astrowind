// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink } from './utils/permalinks';

export const headerDataRings = {
  links: [
    {
      text: 'Show Rings',
      href: getPermalink('/rings'),
      links: [
        {
          text: 'Ring A1: Cattle',
          href: getPermalink('/rings/ringa1'),
        },
        {
          text: 'Ring A2: Sheep',
          href: getPermalink('/rings/ringa2'),
        },
        {
          text: 'Ring D1: Canine Any Variety',
          href: getPermalink('/rings/ringd1'),
        },
        {
          text: 'Ring D2: Canine Best of',
          href: getPermalink('/rings/ringd2'),
        },
        {
          text: 'Ring 1: Working Hunter',
          href: getPermalink('/rings/ring1'),
        },
        {
          text: 'Ring 2: Equine Show Ring',
          href: getPermalink('/rings/ring2'),
        },
        {
          text: 'Ring 3: Hazards & Obedience',
          href: getPermalink('/rings/ring3'),
        }, {
          text: 'Ring 4: Show Jumping',
          href: getPermalink('/rings/ring4'),
        },
        {
          text: 'Ring 5: Clydesdale Horses',
          href: getPermalink('/rings/ring5'),
        },
      ],
    },
    // {
    //   text: 'Sponsors',
    //   href: getPermalink('/sponsors'),
    //   links: [
    //     {
    //       text: 'Platinum Sponsors',
    //       href: getPermalink('/sponsors/platinum'),
    //     },
    //     {
    //       text: 'Gold Sponsors',
    //       href: getPermalink('/sponsors/gold'),
    //     },
    //     {
    //       text: 'Silver Sponsors',
    //       href: getPermalink('/sponsors/silver'),
    //     },
    //   ],
    // },
    {
      text: 'Info',
      href: getPermalink('/info'),
      links: [
        {
          text: 'Show Programmes',
          href: getPermalink('/info/programmes'),
        },
        {
          text: 'Showground Maps',
          href: getPermalink('/info/showground'),
        },
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Rules & Regulations',
          href: getPermalink('/rules'),
        },
      ],
    },
    {
      text: 'Ring Details',
      href: '#ring',
    },
    {
      text: 'Classes',
      href: '#classes',
    },
    {
      text: 'Book Online',
      href: '#calltoaction',
    },
  ],
  actions: [{ text: 'Download Programme', href: '/pdfs/Dundonald-Show_equine.pdf', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Show Rings',
      links: [
        { text: 'Ring A1: Cattle', href: '/rings/ringa1' },
        { text: 'Ring A2: Sheep', href: '/rings/ringa2' },
        { text: 'Ring A3: Horses', href: '/rings/ringa3' },
        { text: 'Ring 1: Working Hunter', href: '/rings/ring1' },
        { text: 'Ring 2: Equine Show Ring', href: '/rings/ring2' },
        { text: 'Ring 3: Hazards', href: '/rings/ring3' },
        { text: 'Ring 4: Show Jumping', href: '/rings/ring4' },
        { text: 'Ring D1: Canine Any Variety', href: '/rings/ringd1' },
        { text: 'Ring D2: Canine Best of', href: '/rings/ringd2' },
      ],
    },
    {
      title: 'The Stars',
      links: [
        { text: 'Bovine', href: '/stars/bovine' },
        { text: 'Canine', href: '/stars/canine' },
        { text: 'Equine', href: '/stars/equine' },
        { text: 'Ovine', href: '/stars/ovine' },
      ],
    },
    {
      title: 'Sponsors',
      links: [
        { text: 'Platinum', href: '/sponsors/platinum' },
        { text: 'Gold', href: '/sponsors/gold' },
        { text: 'Silver', href: '/sponsors/silver' },
      ],
    },
    {
      title: 'Information',
      links: [
        { text: 'Show Programmes', href: '/info/programmes' },
        { text: 'Contact', href: '/info/contact' },
        { text: 'About', href: '/info/about' },
        { text: 'Rules & Regulations', href: getPermalink('/rules') },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Rules', href: getPermalink('/rules') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=100032848585944',
    },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Ian-T-Price/astrowind-fork' },
  ],
  footNote: `
    <a href="https://centreline.biz" target="_blank"><img class="w-12 h-9 md:w-12 md:h-9 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://assets.zyrosite.com/mxBr5r33JqHoERQ1/cs_2col_logo_rgb_10_0-AwvDR2bzazfkgJV4.gif" alt="Centreline logo" loading="lazy"></img></a>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://centreline.biz" target="_blank"> Ian T Price</a> · All rights reserved.
  `,
};
