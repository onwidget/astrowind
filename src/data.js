import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/landing/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/landing/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/landing/mobile-app'),
    //     },
    //   ],
    // },
    {
      text: 'Funcionalidades',
      links: [
        {
          text: 'Notificaciones y Alertas',
          desc: 'Mantén tus pacientes al tanto y comprometidos.',
          href: getPermalink('/notificaciones-y-alertas'),
          icon: 'cil:bell',
        },
        {
          text: 'Administración y Configuración',
          desc: 'Personaliza tu espacio de trabajo.',
          href: getPermalink('/administracion-y-configuracion'),
          icon: 'cil:settings',
        },
        {
          text: 'Ficha Clínica',
          desc: 'Accede y gestiona la información clínica de tus pacientes.',
          href: getPermalink('/ficha-clinica'),
          icon: 'cil:file',
        },
        {
          text: 'Calendario',
          desc: 'Organiza citas con facilidad.',
          href: getPermalink('/calendario'),
          icon: 'cil:calendar',
        },
        {
          text: 'Agenda Online',
          desc: 'Reservas en línea para pacientes.',
          href: getPermalink('/agenda-online'),
          icon: 'cil:calendar-check',
        },
        {
          text: 'Reportes y Análisis',
          desc: 'Evalúa el éxito de tu práctica dental.',
          href: getPermalink('/reportes-y-analisis'),
          icon: 'cil:graph',
        },
      ],
    },
    {
      text: 'Soluciones',
      links: [
        {
          text: 'Profesionales Independientes',
          desc: 'Potencia tu práctica dental con CIMADent.',
          href: getPermalink('/profesionales-independientes'),
          icon: 'ph:user',
        },
        {
          text: 'Clínicas',
          desc: 'Transforma la gestión de tu clínica dental.',
          href: getPermalink('/clinicas'),
          icon: 'ph:users-three',
        },
      ],
    },
    {
      text: 'Precios',
      href: getPermalink('/precios'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    // {
    //   text: 'Contacto',
    //   href: getPermalink('/contacto'),
    // },
  ],
  actions: [
    { type: 'button', text: 'Registrarse', href: 'https://app.cimadent.cl/register' },
    { type: 'link', text: 'Iniciar sesión', href: 'https://app.cimadent.cl' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Funcionalidades',
      links: [
        { text: 'Notificaciones y Alertas', href: getPermalink('/notificaciones-y-alertas') },
        { text: 'Administración y Configuración', href: getPermalink('/administracion-y-configuracion') },
        { text: 'Ficha Clínica', href: getPermalink('/ficha-clinica') },
        { text: 'Calendario', href: getPermalink('/calendario') },
        { text: 'Agenda Online', href: getPermalink('/agenda-online') },
        { text: 'Reportes y Análisis', href: getPermalink('/reportes-y-analisis') },
      ],
    },
    {
      title: 'Soluciones',
      links: [
        { text: 'Profesionales Independientes', href: getPermalink('/profesionales-independientes') },
        { text: 'Clínicas', href: getPermalink('/clinicas') },
      ],
    },
    {
      title: 'Soporte',
      // links: [{ text: 'Contacto', href: getPermalink('/contacto') }],
    },
    {
      title: 'Compañia',
      links: [
        { text: 'Precios', href: getPermalink('/precios') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacidad', href: getPermalink('/privacidad') }],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Creado por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://cimadent.cl/"> CIMA</a> · All rights reserved.
  `,
};
