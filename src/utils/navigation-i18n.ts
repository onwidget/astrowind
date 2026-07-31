import { getPermalink } from './permalinks';
import slugify from 'limax';
import { t, type Locale } from './translations';

const localePrefix = (locale: Locale) => (locale === 'en' ? '' : `/${locale}`);

// Routes that exist per locale. ES mirror pages with `false` are hidden from the nav
// to avoid 404s. `/es/services` and `/es/contact` are now available.
const existingPages = (locale: Locale) => {
  if (locale === 'es') {
    return {
      services: true,
      product: false,
      pricing: false,
      about: false,
      contact: true,
      blog: false
    };
  }
  return {
    services: true,
    product: true,
    pricing: true,
    about: true,
    contact: true,
    blog: true
  };
};

export const buildNavigation = (locale: Locale) => {
  const dict = t(locale);
  const lp = localePrefix(locale);
  const has = existingPages(locale);

  const headerLinks: Array<
    | { text: string; href: string }
    | {
        text: string;
        href?: string;
        mega?: boolean;
        megaIntro?: { title: string; description: string };
        megaFooter?: { linkText: string; href: string; ctaText: string; ctaHref: string };
        links: Array<{
          text: string;
          href: string;
          icon?: string;
          description?: string;
          children?: Array<{ text: string; href: string }>;
        }>;
      }
  > = [
    {
      text: dict.nav.home,
      href: lp ? `${lp}/` : '/'
    },
    {
      text: dict.nav.services,
      href: `${lp}/services`,
      mega: true,
      megaIntro: {
        title: dict.nav.services,
        description: dict.hero.quadrants.find((q) => q.key === 'services')?.description ?? ''
      },
      megaFooter: {
        linkText: dict.nav.methodology ?? 'Methodology',
        href: '#methodology',
        ctaText: dict.hero.primaryCta,
        ctaHref: `${lp}/contact`
      },
      links: dict.pillars.items.map((p) => ({
        text: p.title,
        href: `${lp}/services`,
        icon: p.icon,
        description: p.description,
        children: p.subServices.map((s) => ({
          text: s.title,
          href: `${lp}/services#${slugify(p.title)}`
        }))
      }))
    },
    {
      text: dict.nav.whyChooseUs,
      href: '#stats'
    },
    {
      text: dict.nav.ourWork,
      href: '#case-studies'
    }
  ];

  const pagesLinks: Array<{ text: string; href: string }> = [];
  if (has.services) pagesLinks.push({ text: dict.nav.services, href: `${lp}/services` });
  if (has.product) pagesLinks.push({ text: dict.nav.product, href: `${lp}/product` });
  if (has.pricing) pagesLinks.push({ text: dict.nav.engagement, href: `${lp}/pricing` });
  if (has.about) pagesLinks.push({ text: dict.nav.about, href: `${lp}/about` });

  if (pagesLinks.length > 0) {
    headerLinks.push({ text: 'Pages', links: pagesLinks });
  }
  if (has.blog) {
    headerLinks.push({ text: 'Blog', href: `${lp}/blog` });
  }
  if (has.contact) {
    headerLinks.push({ text: 'Contact', href: `${lp}/contact` });
  }

  const footerPracticeLinks: Array<{ text: string; href: string }> = [];
  if (has.services) footerPracticeLinks.push({ text: dict.nav.services, href: `${lp}/services` });
  if (has.product) footerPracticeLinks.push({ text: dict.nav.product, href: `${lp}/product` });
  if (has.pricing) footerPracticeLinks.push({ text: dict.nav.engagement, href: `${lp}/pricing` });
  if (has.services) footerPracticeLinks.push({ text: dict.nav.methodology, href: `${lp}/services#methodology` });

  const footerCompanyLinks: Array<{ text: string; href: string }> = [];
  if (has.about) footerCompanyLinks.push({ text: dict.nav.about, href: `${lp}/about` });
  if (has.contact) footerCompanyLinks.push({ text: 'Contact', href: `${lp}/contact` });

  return {
    header: {
      links: headerLinks,
      actions: []
    },
    footer: {
      links: [
        {
          title: 'Practice',
          links: footerPracticeLinks
        },
        {
          title: 'Company',
          links: footerCompanyLinks
        }
      ],
      secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') }
      ],
      socialLinks: [
        { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/hugo-ferney-rodriguez-muneton/' }
      ],
      footNote: `© ${new Date().getFullYear()} Cafetatek · ${dict.footer.rights}`
    }
  };
};
