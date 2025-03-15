import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about/')
    },
    {
      text: 'Projects',
      href: getPermalink('/projects/')
    },
    {
      text: 'Blog',
      href: getPermalink('/blog/')
    },
    {
      text: 'Say Hi!',
      href: getPermalink('/contact/')
    }
  ]
};

export const footerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about/'),
      ariaLabel: 'About'
    },
    {
      text: 'Projects',
      href: getPermalink('/projects/'),
      ariaLabel: 'Projects'
    },
    {
      text: 'Blog',
      href: getPermalink('/blog/'),
      ariaLabel: 'Blog'
    },
    {
      text: 'Say Hi!',
      href: getPermalink('/contact/'),
      ariaLabel: 'Say hi'
    }
  ],
  secondaryLinks: [],
};

export const socialLinks = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jonathan-ronn' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/JonathanRonn' },
    { ariaLabel: 'Lichess', icon: 'tabler:chess-king', href: 'https://lichess.org/@/cptcanuck' }
  ]
}
