/**
 * The Codemyc network roster.
 *
 * Adding a member = adding an entry here. Each entry automatically gets a
 * top-level profile page at /<slug> (see src/pages/[member].astro) and a
 * card on /team. Keep the copy in brand voice: specific, human, no adjectives
 * without proof (docs/brand-identity.md §5, §7).
 */
import type { ImageMetadata } from 'astro';
import orlandoPhoto from '~/assets/images/orlando.webp';
import dianaPhoto from '~/assets/images/diana.webp';

export interface ShippedWork {
  title: string;
  context: string; // who it was for / why it was hard
  points: string[];
  stack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  /** One line: what do they own? */
  owns: string;
  location: string;
  core: boolean; // core team vs. extended network
  /** Short hero intro, second person to the visitor. */
  intro: string;
  focus: string[];
  stats: { value: string; label: string }[];
  shipped: ShippedWork[];
  certifications: Certification[];
  /** "What's it like to work with them?" — voice, not résumé. */
  workingWith: string;
  languages: string[];
  photo: {
    /**
     * Art direction for the portrait we still owe this member. Not rendered:
     * it's the note we shoot from later (see docs/photo-slots.md).
     */
    brief: string;
    /**
     * Imported asset. Present = the real portrait renders everywhere;
     * absent = MemberGlyph draws the member's mycelium monogram instead.
     */
    image?: ImageMetadata;
    /**
     * CSS object-position for the portrait crop (e.g. 'center 30%').
     * Defaults to 'center top' when omitted — set this when a wide crop
     * (like the landing-page card) cuts the subject off-center.
     */
    focalPosition?: string;
  };
  links?: { label: string; href: string }[];
}

export const team: TeamMember[] = [
  {
    slug: 'orlando',
    name: 'Orlando Pantoja',
    role: 'Founder · Head of Engineering',
    owns: 'Architecture, full-stack delivery, mobile, and the engineering bar on every Codemyc engagement.',
    location: 'Montevideo, Uruguay',
    core: true,
    intro:
      'Orlando has spent his career on the parts of software where failure is visible: government portals serving entire cities, biometric boarding systems at airports, and observability platforms that production teams depend on at 3 a.m. He leads every Codemyc engagement personally — architecture first, then code, then proof that it works.',
    focus: [
      'Software architecture',
      'Full-stack web (Node.js · TypeScript · React)',
      'Mobile (Flutter · Firebase)',
      'Cloud & DevOps (GCP · AWS · Docker · CI/CD)',
      'Observability (OpenTelemetry · Grafana stack)',
      'AI-native engineering (agentic coding · RAG · MCP · multi-agent orchestration)',
    ],
    stats: [
      { value: '9+', label: 'years shipping production software' },
      { value: '15+', label: 'products delivered across web, mobile & infra' },
      { value: 'C2', label: 'certified English proficiency (EF SET)' },
    ],
    shipped: [
      {
        title: 'State institutional websites',
        context:
          'Critical government web platforms where uptime, accessibility, and search quality are legally non-negotiable.',
        points: [
          'Backend development and search optimization (Apache Solr, Elasticsearch) on high-traffic Drupal 10 portals.',
          'Designed a CI/CD pipeline running continuous SEO, performance, and accessibility audits on every release.',
          'Automated regression suites with Python, Pytest, Playwright, and Selenium.',
        ],
        stack: ['Drupal 10', 'PHP 8', 'Solr', 'Docker', 'GitLab CI', 'Python'],
      },
      {
        title: 'ECPASS — biometric airport boarding',
        context: 'Technical lead for a mobile app automating airport check-in and boarding with biometric data.',
        points: [
          'Architected the app with clean architecture and led the Flutter team end to end.',
          'Integrated a machine-learning SDK for biometrics and ran the release pipeline (Codemagic, Crashlytics).',
        ],
        stack: ['Flutter', 'Firebase', 'ML SDK (Java)', 'Codemagic'],
      },
      {
        title: 'Production observability platform',
        context:
          'Took full ownership of telemetry for an IBM i integration company; the tooling now runs in production across multiple client environments and is cited by sales in closed deals.',
        points: [
          'Rebuilt instrumentation on the OpenTelemetry SDK as an installable, versioned package.',
          'Delivered log–trace correlation and per-client Grafana dashboards with alerting (Tempo, Loki, Prometheus).',
        ],
        stack: ['Node.js', 'TypeScript', 'OpenTelemetry', 'Grafana', 'Docker Swarm'],
      },
      {
        title: 'GeneXus web low-code IDE',
        context: 'Frontend lead on the web IDE of one of Latin America’s best-known software platforms.',
        points: [
          'Led web-component development and testing (StencilJS, Jest, Puppeteer) with the GeneXus R&D team.',
          'Mentored and onboarded new developers into the codebase.',
        ],
        stack: ['TypeScript', 'StencilJS', 'Node.js', 'Jest'],
      },
    ],
    certifications: [
      { name: 'Associate Cloud Engineer', issuer: 'Google Cloud', year: '2024' },
      { name: 'Certified Drupal 10 Site Builder', issuer: 'Acquia', year: '2025' },
      { name: 'Expert in Drupal 10 — Backend', issuer: 'Forcontu', year: '2024' },
      { name: 'EF SET English Certificate — C2 Proficient', issuer: 'EF SET', year: '2023' },
      { name: 'Google AI Leader', issuer: 'Google', year: '2026' },
    ],
    workingWith:
      'Orlando answers fast and says the uncomfortable thing early — if a deadline is at risk or a spec doesn’t hold up, you hear it in the first conversation, not the retro. He tests across environments before anything ships, writes code the whole team can read, and has a habit of quietly absorbing the unglamorous work (weekend deploys, legacy systems, mid-project spec changes) that keeps projects on track.',
    languages: ['English — C2 Proficient', 'Spanish — Native'],
    photo: {
      brief:
        'Half-body portrait of Orlando, candid and relaxed — dark or neutral background, soft natural side light, looking at camera with a slight smile. No suit; a plain dark shirt. Minimum 1200×1500px, vertical.',
      image: orlandoPhoto,
      focalPosition: 'center 40%',
    },
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/orlando-pantoja/' }],
  },
  {
    slug: 'diana',
    name: 'Diana Alfonso',
    role: 'Partner · Institutional & Government Software',
    owns: 'GovTech delivery: compliance, accessibility, migrations, and the platforms public institutions run on.',
    location: 'Montevideo, Uruguay',
    core: true,
    intro:
      'Diana builds the software governments actually run. For over seven years she has architected and maintained high-traffic public platforms — including Uruguay’s national portal network and the official website of Montevideo — where accessibility, security, and uptime aren’t features, they’re obligations. If your project has to satisfy an auditor, a regulator, or a procurement office, this is whose calendar you want it on.',
    focus: [
      'GovTech & institutional platforms',
      'Drupal 9/10/11 architecture & custom modules',
      'Large-scale CMS migrations (D7→D10/11)',
      'WCAG 2.1 accessibility compliance',
      'Enterprise search (Apache Solr)',
      'PHP 8 · Symfony · API integrations',
      'AI-assisted delivery (agentic coding · prompt engineering · automated audits)',
    ],
    stats: [
      { value: '7+', label: 'years architecting GovTech platforms' },
      { value: '67+', label: 'government portals maintained & enhanced' },
      { value: 'C2', label: 'professional English proficiency' },
    ],
    shipped: [
      {
        title: 'Uruguay’s national government platform',
        context:
          'Three years inside AGESIC (Uruguay’s digital government agency) on one of the country’s highest-traffic public systems.',
        points: [
          'Maintained and enhanced 67+ institutional portals and 13 intranets serving multiple government agencies.',
          'Contributed backend development to gub.uy, the official website of Uruguay.',
          'Built reusable custom modules adopted across the entire portal network; enforced WCAG 2.1 throughout.',
        ],
        stack: ['Drupal', 'PHP 8', 'Symfony', 'Solr', 'MySQL'],
      },
      {
        title: 'Montevideo government portal & intranets',
        context: 'Architect and maintainer of the official website of Uruguay’s capital city.',
        points: [
          'Engineers custom modules supporting complex government workflows and third-party integrations.',
          'Runs systematic accessibility auditing and remediation; built the enterprise search on Apache Solr.',
        ],
        stack: ['Drupal 10', 'PHP 8', 'Solr', 'Docker', 'DDEV'],
      },
      {
        title: 'Full-scale government migrations',
        context:
          'Led the CMS migrations for two of Uruguay’s departmental governments — the kind of project where data loss makes the news.',
        points: [
          'Maldonado: Drupal 9 → 10. Canelones: Drupal 7 → 10, with full content-integrity validation.',
          'Resolved schema conflicts and broken references across legacy codebases; optimized batches for rollback safety.',
          'Mentored junior developers through the process.',
        ],
        stack: ['Drupal Migrate API', 'PHP', 'Composer', 'MySQL'],
      },
      {
        title: 'Real-time data visualization — national power company',
        context: 'Platform for live operational data at UTE, Uruguay’s national electricity utility.',
        points: [
          'Built secure REST API consumption with authenticated access and high-freshness backend logic.',
          'Designed dynamic interfaces for efficient operational data presentation.',
        ],
        stack: ['Drupal', 'REST APIs', 'OAuth2', 'JavaScript'],
      },
    ],
    certifications: [
      { name: 'Certified Developer — Drupal 11', issuer: 'Acquia', year: '2025' },
      { name: 'Certified Site Builder — Drupal 10', issuer: 'Acquia', year: '2024' },
      { name: 'Drupal Backend Specialist', issuer: 'Forcontu', year: '2022' },
      { name: 'AI Development Fundamentals', issuer: 'BIG School', year: '2026' },
      { name: 'Google AI Leader', issuer: 'Google', year: '2026' },
    ],
    workingWith:
      'Diana is the person who reads the compliance annex nobody else reads — and then quietly redesigns the data model so it passes. She translates technical trade-offs into language stakeholders and procurement officers actually understand, documents as she goes, and mentors the people around her. Teams that work with her ship calmer.',
    languages: ['English — C2 Professional', 'Spanish — Native'],
    photo: {
      brief:
        'Half-body portrait of Diana, confident and approachable — dark or neutral background, soft natural side light, looking at camera. Plain professional top, no corporate stiffness. Minimum 1200×1500px, vertical.',
      image: dianaPhoto,
      focalPosition: 'center 30%',
    },
    links: [],
  },
];

export const coreTeam = team.filter((m) => m.core);

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
