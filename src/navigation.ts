import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Our Team',
      href: getPermalink('/team'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ variant: 'primary' as const, text: 'Get Started', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Institutional Websites', href: getPermalink('/services#institutional') },
        { text: 'Mobile Apps', href: getPermalink('/services#mobile') },
        { text: 'Software Architecture', href: getPermalink('/services#architecture') },
        { text: 'Data Analytics', href: getPermalink('/services#analytics') },
        { text: 'System Integrations', href: getPermalink('/services#integrations') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Team', href: getPermalink('/team') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/codemyc' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'X / Twitter', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    <span class="text-sm text-muted">&copy; ${new Date().getFullYear()} Codemyc. All rights reserved.</span>
  `,
};
