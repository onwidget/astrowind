/*
 * English copy, transcribed verbatim from "EFKA_Website_Content_EN .docx".
 *
 * Typed as `typeof tr`, so this object must carry every key the Turkish
 * dictionary carries. A missing or misspelled key is a build error rather than
 * a section that silently renders blank.
 */

import { localePath } from '~/i18n/routes';
import { tr } from '~/data/tr';

const p = (key: Parameters<typeof localePath>[0]) => localePath(key, 'en');

export const en: typeof tr = {
  company: `Workforce consultancy coordinating the identification and assessment of suitable
    candidates from the Philippines and their lawful employment in Türkiye for families and
    businesses.`,

  nav: {
    links: [
      {
        text: 'Our Services',
        href: p('services'),
        links: [
          { text: 'For Your Family', href: `${p('services')}#for-your-family` },
          { text: 'Corporate Solutions', href: `${p('services')}#corporate-solutions` },
        ],
      },
      { text: 'Our Process', href: p('process') },
      { text: 'About Us', href: p('about') },
      { text: 'FAQ', href: p('faq') },
    ],
    actions: [{ variant: 'primary' as const, text: 'Request a Consultation', href: p('contact') }],
  },

  footer: {
    description: `EFKA Consulting provides consultancy services for identifying suitable
      candidates from the Philippines for domestic, care and corporate workforce needs and
      coordinating their lawful employment procedures in Türkiye.`,
    columns: [
      {
        title: 'Our Services',
        links: [
          { text: 'International Workforce', href: p('services') },
          { text: 'For Your Family', href: `${p('services')}#for-your-family` },
          { text: 'Corporate Solutions', href: `${p('services')}#corporate-solutions` },
          { text: 'Why a Filipino Caregiver?', href: p('whyFilipino') },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About Us', href: p('about') },
          { text: 'Our Process', href: p('process') },
          { text: 'Frequently Asked Questions', href: p('faq') },
          { text: 'Contact', href: p('contact') },
        ],
      },
    ],
    // The KVKK notice exists only in Turkish, so both locales link to the
    // one page at /kvkk.
    secondaryLinks: [{ text: 'KVKK Notice (Turkish)', href: '/kvkk' }] as Array<{ text: string; href: string }>,
    socialLabels: { instagram: 'Instagram', linkedin: 'LinkedIn', email: 'Email' },
    footNote: 'consulting · All rights reserved.',
  },

  home: {
    meta: {
      title: 'efka consulting — Philippines-Focused Workforce Consultancy',
      description: `Workforce consultancy coordinating the identification and assessment of
        suitable candidates from the Philippines and their lawful employment in Türkiye for
        families and businesses.`,
    },
    hero: {
      tagline: 'Philippines-Focused Workforce Consultancy',
      title: 'The right people.<br />A process managed with confidence.',
      subtitle: `We serve families and businesses throughout Türkiye, coordinating the end-to-end
        process of identifying and assessing suitable Filipino candidates and supporting their
        lawful employment.`,
      // No contact button here: the header's own button already leads there.
      actions: [
        { variant: 'primary' as const, text: 'Explore the Process', href: p('process') },
        { text: 'Why a Filipino Caregiver?', href: p('whyFilipino') },
      ],
    },
    pillars: [
      {
        title: 'Matching based on your needs',
        description: `We assess candidates not only on their CVs, but also on their experience,
          expectations and suitability for the proposed working arrangements.`,
        icon: 'tabler:users-group',
      },
      {
        title: 'Structured process management',
        description: `We follow each stage, from candidate selection and the required formal
          procedures to travel planning and arrival in Türkiye.`,
        icon: 'tabler:list-check',
      },
      {
        title: 'One point of contact',
        description: `Throughout the process in Türkiye, you communicate with EFKA while we
          coordinate the relevant parties on your behalf.`,
        icon: 'tabler:messages',
      },
    ],
    solutions: {
      title: 'Workforce solutions tailored to your needs',
      subtitle: `From in-home care and support to staffing needs in tourism, hospitality and
        manufacturing, we assist with identifying suitable candidates and planning the process
        for a range of roles.`,
      readMore: 'Explore our services',
    },
    whyEfka: {
      title: 'Why EFKA?',
      items: [
        {
          title: 'Assessment tailored to each need',
          description: `We assess every family’s and business’s needs individually and define the
            candidate profile according to the role and expectations.`,
        },
        {
          title: 'End-to-end coordination',
          description: `We coordinate the various stages of the process, from identifying
            candidates and arranging interviews to document preparation and travel planning for
            Türkiye.`,
        },
        {
          title: 'Professional working discipline',
          description: `Our founder’s six years of experience as legal counsel shape our
            structured approach to documents, contracts and process management.`,
        },
        {
          title: 'Long-term compatibility',
          description: `Our aim is not simply to make a quick match, but to establish a
            sustainable working relationship in which the employer’s and worker’s expectations
            are discussed clearly.`,
        },
      ],
    },
  },

  services: {
    meta: {
      title: 'Our Services',
      description: `Philippines-focused international workforce solutions: care staff for
        families, and candidates for tourism, hospitality, manufacturing and industrial
        businesses.`,
    },
    hero: {
      tagline: 'Our Services',
      title: 'International Workforce',
      paragraphs: [
        `EFKA Consulting provides Philippines-focused international workforce solutions
          throughout Türkiye, managing the identification and assessment of suitable workers for
          families and businesses and coordinating their lawful employment through an integrated
          approach.`,
        `Clear communication, appropriate matching and legal compliance guide every stage, from
          candidate selection to work permit procedures and the follow-up of related formalities.
          Through our authorised partners in the Philippines, we focus on connecting qualified
          Filipino workers with families and businesses in Türkiye.`,
      ],
    },
    family: {
      id: 'for-your-family',
      title: 'For Your Family',
      paragraphs: [
        `We believe that the person joining your household should be assessed not only on
          professional experience, but also on their suitability for your family’s routine,
          expectations and care requirements.`,
        `We identify suitable Filipino candidates for baby and childcare, elderly companionship,
          and daily in-home support for sick or disabled family members, and arrange video
          interviews with the candidates you choose.`,
        `Candidates’ experience, training, references and criminal record documents are reviewed,
          while the required medical checks and official procedures are completed as part of the
          process. Travel to Türkiye, work permit procedures and employment are coordinated in
          accordance with applicable legislation and the relevant regulations of both countries.`,
        `Our aim is not simply to find a worker, but to help establish a working relationship in
          which your family can feel secure, expectations are discussed openly and long-term
          compatibility is considered.`,
      ],
      items: [
        {
          title: 'Baby and Childcare',
          description: `Experienced nanny and childcare candidates who can support your child’s
            daily care, age-appropriate routine and development.`,
          icon: 'tabler:baby-carriage',
        },
        {
          title: 'Elderly Care and Companionship',
          description: `Suitable candidates who can support older family members in daily life,
            assist with their needs and provide safe companionship.`,
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Care for Sick and Disabled Individuals',
          description: `Workers whose experience and qualifications are assessed according to the
            nature of the requirement and who can support daily in-home care and companionship.`,
          icon: 'tabler:stethoscope',
        },
      ],
      imageAlt: 'A Filipino caregiver holding a baby in a family living room',
    },
    corporate: {
      id: 'corporate-solutions',
      title: 'Corporate Solutions',
      paragraphs: [
        `We provide selection, assessment and process-management services for the international
          workforce needs of tourism, hospitality, manufacturing and industrial businesses.`,
        `We analyse the business’s field of activity, role requirements and working conditions to
          define the appropriate candidate profile. Together with our authorised partners in the
          Philippines, we manage candidate sourcing and preliminary assessment, and coordinate the
          work permit and related formal procedures required for lawful employment in Türkiye
          through a structured and traceable process.`,
      ],
      items: [
        {
          title: 'Tourism and Hospitality',
          description: `Candidates for housekeeping, kitchen, food service, guest relations and
            other operational roles in hotels, boutique hotels, restaurants and tourism
            businesses.`,
          icon: 'tabler:bell-ringing',
        },
        {
          title: 'Manufacturing and Industry',
          description: `Skilled, semi-skilled or trainable candidates for production, packaging,
            warehousing, dispatch and similar roles in factories and manufacturing facilities.`,
          icon: 'tabler:building-factory-2',
        },
        {
          title: 'Volume Recruitment Solutions',
          description: `For businesses requiring multiple employees, we support role definition,
            candidate pre-screening, interview coordination and planning the legal procedures for
            selected workers.`,
          icon: 'tabler:users-plus',
        },
      ],
      hospitalityAlt: 'Hospitality staff welcoming a guest at a boutique hotel reception desk',
      manufacturingAlt: 'A production team gathered around a tablet in a manufacturing facility',
    },
  },

  whyFilipino: {
    meta: {
      title: 'Why a Filipino Caregiver?',
      description: `Filipino caregivers are chosen by families around the world for their
        international care experience, English communication skills and attentive approach to
        their work.`,
    },
    hero: {
      tagline: 'Why a Filipino Caregiver?',
      title: 'Why a Filipino Caregiver?',
      paragraphs: [
        `Choosing a caregiver means choosing someone who will become part of your family’s daily
          life and assist in caring for the people who matter most to you. The right candidate
          should therefore offer more than experience: they should be responsible, reassuring and
          able to adapt to your household routine.`,
        `Filipino caregivers are chosen by families around the world for their international care
          experience, English communication skills and attentive approach to their work.`,
      ],
      imageAlt: 'A Filipino caregiver reading a picture book with a child',
    },
    blocks: [
      {
        title: 'An English-Speaking Environment',
        paragraphs: [
          `An English-speaking caregiver can help young children hear and become familiar with
            the language naturally as part of everyday life.`,
        ],
        icon: 'tabler:message-language',
      },
      {
        title: 'Experience and Responsibility',
        paragraphs: [
          `Candidates are assessed with regard to their care experience, training, references and
            understanding of the role. Profiles suited to your family’s needs are shared with
            you, and video interviews are arranged with the candidates you select.`,
        ],
        icon: 'tabler:certificate',
      },
      {
        title: 'Compatibility with Family Life',
        paragraphs: [
          `Every family has its own lifestyle, priorities and expectations. Candidate selection
            therefore considers not only professional background, but also communication style,
            approach to responsibilities and the potential for long-term compatibility.`,
        ],
        icon: 'tabler:home-heart',
      },
      {
        title: 'A Safe and Lawful Process',
        paragraphs: [
          `The overseas employment of Filipino domestic workers is subject to the regulations of
            both Türkiye and the Philippines. The process is coordinated with the relevant
            authorities and authorised partners in the Philippines, with the required contracts,
            work permit application, document checks and official approvals completed before
            employment begins.`,
          `Throughout the process, EFKA Consulting acts as your point of contact in Türkiye and
            helps ensure that each stage is managed in a structured, transparent and traceable
            manner.`,
        ],
        icon: 'tabler:shield-check',
      },
    ],
  },

  about: {
    meta: {
      title: 'About Us',
      description: `EFKA Consulting was established to provide families and businesses with
        professional support from a single point of contact when seeking reliable workers.`,
    },
    hero: {
      tagline: 'About Us',
      title: 'About Us',
      paragraphs: [
        `EFKA Consulting was established to provide families and businesses with professional
          support from a single point of contact when seeking reliable workers.`,
        `Our founder’s six years of experience as legal counsel form the foundation of our
          disciplined approach to documents, contracts and process management.`,
        `With a focus on the Philippines, EFKA supports the identification of suitable candidates
          and the coordination of lawful employment procedures for domestic and care roles, as
          well as the workforce needs of tourism, hospitality, manufacturing and industrial
          businesses.`,
      ],
    },
    mission: {
      title: 'Our Mission',
      description: `To help employers access suitable workers through a reliable, transparent and
        structured process, while helping workers enter employment relationships in which their
        duties and working conditions are clearly defined from the outset.`,
      icon: 'tabler:target-arrow',
    },
    vision: {
      title: 'Our Vision',
      description: `To become a trusted, long-term consultancy brand in international employment,
        providing solutions from domestic services to corporate workforce needs.`,
      icon: 'tabler:telescope',
    },
  },

  process: {
    meta: {
      title: 'Our Process',
      description: `A six-stage, traceable process from understanding the requirement to the
        worker’s arrival in Türkiye.`,
    },
    hero: {
      tagline: 'Our Process',
      title: 'Our Process',
      subtitle: `Every requirement is different. Rather than beginning with a standard list of
        candidates, we start by understanding the employer’s expectations and the proposed working
        conditions.`,
    },
    steps: [
      {
        title: 'Understanding the requirement',
        description: `We discuss the role, care or workforce requirement and the employer’s key
          expectations.`,
        icon: 'tabler:message-circle-search',
      },
      {
        title: 'Preliminary assessment',
        description: `We assess the suitability of the employer and the position for the relevant
          process and explain the proposed route.`,
        icon: 'tabler:clipboard-check',
      },
      {
        title: 'Identifying candidates',
        description: `Candidates considered suitable for the requirement are selected and
          presented to the employer.`,
        icon: 'tabler:user-search',
      },
      {
        title: 'Interviews and selection',
        description: `The employer interviews candidates online; additional interviews can be
          arranged where required.`,
        icon: 'tabler:video',
      },
      {
        title: 'Documents and approvals',
        description: `The required documents relating to the selected candidate and employer are
          prepared, and the process between the relevant authorities and parties is coordinated.`,
        icon: 'tabler:file-check',
      },
      {
        title: 'Arrival and commencement',
        description: `Travel arrangements are completed, and the employer is informed about the
          worker’s arrival in Türkiye and the principal post-arrival procedures.`,
        icon: 'tabler:plane-arrival',
      },
    ],
    cta: { variant: 'primary' as const, text: 'Discuss the Process', href: p('contact') },
  },

  faq: {
    meta: {
      title: 'Frequently Asked Questions',
      description: `Common questions about the roles we cover, how long the process takes,
        candidate selection and whether an intermediary agency is required.`,
    },
    hero: {
      tagline: 'Frequently Asked Questions',
      title: 'Frequently Asked Questions',
    },
    items: [
      {
        title: 'For which roles do you provide candidates?',
        description: `We provide consultancy services for Filipino candidates in baby and
          childcare, elderly care and companionship, in-home care for sick or disabled
          individuals, tourism, hospitality, manufacturing and industry.`,
      },
      {
        title: 'How long does the process usually take?',
        description: `The period from candidate selection to arrival in Türkiye usually takes
          around two months. The timeframe may vary depending on document preparation, official
          approvals and flight planning.`,
      },
      {
        title: 'How does the candidate selection process work?',
        description: `We make a tailored preliminary selection from our pool of experienced,
          trained and referenced candidates. We share the selected profiles with you and arrange
          online video interviews with the candidates you wish to meet.`,
      },
      {
        title: 'Can I hire a Filipino worker without an intermediary agency?',
        description: `Under the Philippines’ overseas employment rules, direct hiring of domestic
          workers is permitted only in very limited circumstances. The standard process is
          conducted through two authorised partner organisations, one in the Philippines and one
          in Türkiye.`,
      },
    ],
  },

  contact: {
    meta: {
      title: 'Contact',
      description: `Tell us about the candidate profile your family or business requires. During
        the initial consultation we will listen to your needs and provide a clear roadmap.`,
    },
    hero: {
      tagline: 'Contact',
      title: 'Let us assess your needs together.',
      subtitle: `Tell us about the candidate profile your family or business requires. During the
        initial consultation, we will listen to your needs and provide a clear roadmap regarding
        suitability and the process that may be followed.`,
    },
    cta: { variant: 'primary' as const, text: 'Request a Consultation', href: 'mailto:info@efka-consulting.com' },
    details: [
      { title: 'Email', description: 'info@efka-consulting.com', icon: 'tabler:mail' },
      {
        title: 'Address',
        description: 'Organize Sanayi Bölgesi 20.Cadde No:45 31. Caddesi No:2,<br />38070 Kayseri, Türkiye',
        icon: 'tabler:map-pin',
      },
    ],
  },

  bannerAlt: 'A panorama blending the Istanbul skyline with the Cappadocia landscape',
};
