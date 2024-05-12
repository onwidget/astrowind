import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Book Now', href: 'https://my-business-restorativebodyworkatx.square.site/', target: '_blank' },
    // { text: 'Home', href: getPermalink('/#') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'FAQ', href: getPermalink('/#faq') },
    // { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    // {
    //   text: 'Book now!',
    //   href: 'https://my-business-restorativebodyworkatx.square.site/',
    //   target: '_blank',
    //   icon: 'tabler:calendar-plus',
    // },
  ],
};

export const footerData = {
  // links: [
  //   // { text: 'Contact', href: getPermalink('/contact') },
  // ]
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  // socialLinks: [
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  // ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://rugh.dev/favicon.ico)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://rugh.dev/"> rugh.dev</a> · All rights reserved.
  `,
};

export const faqData = [
  {
    title: 'Before Your Appointment',
    description:
      "For your first appointment, please arrive 15 minutes prior to your scheduled appointment time to allow time to complete the Client Intake Form. For all other appointments, please arrive 5 to 10 minutes before your scheduled appointment time to allow time to discuss our session.",
  },
  {
    title: 'Late Arrival Policy',
    description:
      "All scheduled appointments will end at the scheduled ending time for us to stay on schedule. Clients who arrive late to their scheduled appointment will be charged for the full session and will not receive a time extension.",
  },
  {
    title: "Cancellation & No-Show Policy",
    description:
      "We require at least 24 hours notice to cancel an appointment. Clients who cancel an appointment with less than 24 hours notice will be billed 50% of the price of the scheduled service. Clients who do not show up for a scheduled appointment or notify us in advance will be billed for the full price of the scheduled service. We understand that emergencies and illnesses can arise, therefore last-minute cancellations due to things such as verifiable emergencies, illnesses or inclement weather will generally not result in any missed session charges, however this is to be determined at the practitioner&#39;s discretion.",
  },
  {
    title: 'Massage Termination',
    description:
      "Only professional massage and bodywork services for relaxation or therapeutic purposes are offered at Restorative Bodywork. Massage services will be terminated immediately in the event of inappropriate conduct of any kind. This includes harassment, threatening speech or behavior, sexual advances or requests, or disrespectful actions or language. A session will not be conducted if the client is under the influence of drugs or alcohol. If the massage is terminated for any of these reasons, full payment for the scheduled session is still required.",
  },
  {
    title: 'Payment',
    description:
      'Credit cards or cash only. We do not accept personal checks.',
  },
  {
    title: 'Insurance',
    description:
      "We do not accept insurance as a form of payment, but most Flex Cards include massages. We can provide receipts upon request.",
  },

  {
    title: 'Draping Policy',
    description:
      "Clients will be appropriately draped with a sheet and/or towel at all times during their massage. Only areas of the body that are currently being treated will be exposed. The breast and genital areas will always remain draped and are never massaged.",
  },

  {
    title: "In-Home Massage",
    description: "We offer In-Home massage on a limited basis. For rates and other info, please email us at info@restorativebodyworkatx.com"
  }
]
