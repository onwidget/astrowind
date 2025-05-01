import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Interpretación y Definiciones',
      href: '#',
    },
    {
      text: 'Eliminar Datos Personales',
      href: '#',
    },
  ],
  actions: [{ text: 'Descargar', href: 'https://play.google.com/store/apps/details?id=com.acontplus_facturacion', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'AcontPlus Web', href: 'https://app.acontplus.com/Index' },
        { text: 'AcontPlus Web Demo', href: 'https://demo.acontplus.com/register' },
        { text: 'POS AcontPlus', href: 'https://restaurant.acontplus.com/auth' },
      ],
    },
    {
      title: 'App Facturación',
      links: [{ text: 'Acerca de nosotros', href: '#about' }],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
      ],
    },
    {
      title: 'AcontPlus',
      links: [
        { text: 'Servicios', href: 'https://acontplus.com.ec/servicios/' },
        { text: 'Clientes', href: 'https://acontplus.com.ec/clientes/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/acontplus.ec' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/acontplus.ec' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/acontplus-sas' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"
        src="https://onwidget.com/favicon/favicon-32x32.png"
        alt="onWidget logo" loading="lazy">
    </img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com"> onWidget</a> & <a class="text-blue-600 underline dark:text-muted" href="https://acontplus.com.ec"> AcontPlus</a> · Todos los derechos reservados.
  `,
};
