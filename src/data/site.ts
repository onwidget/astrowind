/**
 * The facts about Codemyc as an organization.
 *
 * One source of truth for anything that appears in more than one place:
 * the footer, the contact page, the legal pages, and the JSON-LD we hand
 * to search engines (src/components/common/StructuredData.astro).
 */

export const site = {
  name: 'Codemyc',
  /** Used where a sentence needs the company as a subject. */
  tagline: 'Senior software, direct.',
  url: 'https://codemyc.com',
  email: 'hello@codemyc.com',
  linkedin: 'https://www.linkedin.com/company/codemyc/',

  location: {
    city: 'Montevideo',
    country: 'Uruguay',
    countryCode: 'UY',
    /** Written as it reads on the site — not an IANA id. */
    timezone: 'GMT−3',
  },

  /** Short description reused for meta tags and structured data. */
  description:
    'Codemyc is a boutique nearshore software consultancy based in Latin America. Senior, certified, English-fluent engineers who assemble into the exact team your problem needs — in your time zone, at nearshore rates.',

  languages: ['English', 'Spanish'],

  /** Profiles search engines should treat as the same entity (schema.org sameAs). */
  profiles: ['https://www.linkedin.com/company/codemyc/'],

  /** What we build, in the words search engines index. */
  services: [
    'Institutional & government platforms',
    'Web application development',
    'Mobile application development',
    'AI integration',
    'Cloud & DevOps',
    'System integration',
  ],
} as const;

/** `Montevideo, Uruguay · GMT−3` — the line the footer and profiles print. */
export const locationLine = `${site.location.city}, ${site.location.country} · ${site.location.timezone}`;
