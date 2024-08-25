import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'AboutUS',
      links: [
        {
          text: 'Dr. Ketan Ginoya',
          href: getPermalink('/dr-Ketan'),
        },
        {
          text: 'Our Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Why us?',
          href: getPermalink('/whyus'),
        },
        {
          text: 'Tour our office',
          href: getPermalink('/office'),
        },
        {
          text: 'Our technologies',
          href: getPermalink('/technologies'),
        },
      ],
    },
    { text: 'Emergency', href: getPermalink('/emergency'), },

    {
      text: 'Services',
      links: [
        {
          text: 'Dental Cleaning',
          href: getPermalink('/cleaning'),
        },
        {
          text: 'Deep Cleaning',
          href: getPermalink('/deepcleaning'),
        },
        {
          text: 'Root Canal Treatment',
          href: getPermalink('/rct'),
        },
        {
          text: 'Dental Crown',
          href: getPermalink('/crown'),
        },
        {
          text: 'Contact',
          href: getPermalink('/implant'),
        },
        {
          text: 'Terms',
          href: getPermalink('/allonx'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/bridge'),
        },
      ],
    },
    {
      text: 'Patient info & Insurance',
      links: [
        {
          text: 'New Patient Forms',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Payment Informations',
          href: getPermalink('/landing/sales'),
        }
      ],
    },
    {
      text: 'Before/After',
          href: './before-after',
      
    },
    {
      text: 'ContactUs',
      href: './contact',
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" ></img>
    Made by Life.Dental . All rights reserved.
  `,
};
