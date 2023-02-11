import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
        {
      text: 'Blog',
      href: getBlogPermalink(),
        },
        {
          text: 'About us',
          href: '/',
        },
        {
          text: 'Contact',
          href: '/',
        },
  ],
};
  
export const footerData = {
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://chat.whatsapp.com/F5zf3ZFSMUUFY328aQxd7W' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://status-area.vercel.app/favicon.svg)]"></span>
    © 2023 <a class="text-blue-600 hover:underline dark:text-gray-200" href="/"> StatusArea</a> · All rights reserved.
  `,
};
