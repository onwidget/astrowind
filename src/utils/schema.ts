/**
 * schema.org JSON-LD for the site.
 *
 * Everything here is built from src/data/site.ts and src/data/team.ts, so the
 * markup search engines read can never drift from what the pages say.
 */
import { site } from '~/data/site';
import type { TeamMember } from '~/data/team';

const ORGANIZATION_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

const address = {
  '@type': 'PostalAddress',
  addressLocality: site.location.city,
  addressCountry: site.location.countryCode,
};

export const personId = (slug: string) => `${site.url}/${slug}#person`;

/** Absolute URL for a build-time asset path (`/_astro/…`). */
export const absolute = (path: string) => new URL(path, site.url).toString();

export function organizationSchema(members: TeamMember[]) {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    slogan: site.tagline,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/icon-512.png`,
    address,
    sameAs: site.profiles,
    knowsLanguage: site.languages,
    areaServed: ['Americas', 'Europe'],
    founder: members
      .filter((m) => m.core)
      .map((m) => ({ '@type': 'Person', '@id': personId(m.slug), name: m.name, url: `${site.url}/${m.slug}` })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software engineering services',
      itemListElement: site.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: site.name,
    url: site.url,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function personSchema(member: TeamMember, imageUrl?: string) {
  return {
    '@type': 'Person',
    '@id': personId(member.slug),
    name: member.name,
    url: `${site.url}/${member.slug}`,
    jobTitle: member.role.replaceAll(' · ', ', '),
    description: member.owns,
    ...(imageUrl ? { image: imageUrl } : {}),
    worksFor: { '@id': ORGANIZATION_ID },
    homeLocation: address,
    knowsAbout: member.focus,
    knowsLanguage: site.languages,
    hasCredential: member.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      dateCreated: c.year,
    })),
    ...(member.links?.length ? { sameAs: member.links.map((l) => l.href) } : {}),
  };
}
