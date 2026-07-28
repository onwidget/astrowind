export type Locale = 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'en';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es'];

export type Translations = {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    whyChooseUs: string;
    ourWork: string;
    pillars: string;
    product: string;
    engagement: string;
    methodology: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustEyebrow: string;
    trustItems: string[];
    quadrantsTitle: string;
    quadrants: Array<{
      key: 'pillars' | 'services' | 'experience' | 'projects';
      step: string;
      label: string;
      title: string;
      description: string;
      icon: string;
      href: string;
    }>;
  };
  intro: {
    title: string;
    description: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      bullets: string[];
      icon: string;
      subServices: Array<{ letter: string; title: string; description: string }>;
      duration: string;
      priceBand: string;
      boringTask: string;
      deliverables: string[];
    }>;
  };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    anchorBadge: string;
    moreBadge: string;
    boringTasksTitle: string;
    boringTasksSubtitle: string;
  };
  elixa: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    whyBuiltTitle: string;
    whyBuiltBody: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    featuresTitle: string;
    features: string[];
  };
  engagement: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      duration: string;
    }>;
  };
  methodology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  stats: {
    items: Array<{ amount: string; title: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  homepage: {
    stats: {
      eyebrow: string;
      title: string;
    };
    problem: {
      eyebrow: string;
      title: string;
      cto: { role: string; text: string };
      ciso: { role: string; text: string };
    };
    caseStudies: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Array<{
        client: string;
        period: string;
        industry: string;
        service: string;
        title: string;
        outcome: string;
      }>;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const en: Translations = {
  site: {
    name: 'Cafetatek',
    tagline: 'Engineering boutique for B2B teams in EMEA',
    description:
      'Cafetatek is a senior-only engineering boutique helping B2B teams in EMEA ship modern software, modern data, and governed AI — with cloud-agnostic platform engineering and FinOps unit economics baked in.'
  },
  nav: {
    home: 'Home',
    services: 'What we do',
    whyChooseUs: 'Why choose us',
    ourWork: 'Our work',
    pillars: 'Practice areas',
    product: 'Product',
    engagement: 'Engagement',
    methodology: 'Methodology',
    about: 'About',
    contact: 'Contact'
  },
  hero: {
    eyebrow: 'Automation Process · APIs · Governance · CI/CD · Data · Digital · Agentic',
    title: 'Make your cloud stack autonomous. We engineer it with you — and hand it back.',
    subtitle:
      'Senior-led delivery for cloud, data, and AI engineering teams. We wire AI-driven autonomy into your stack — pipelines, agents, governance — and hand the keys back, the same way the platform engineering movement was supposed to.',
    primaryCta: 'Talk to a senior engineer',
    secondaryCta: 'See how we work',
    trustEyebrow: 'What you walk away with',
    trustItems: [
      '5 service pillars anchored on cloud + automation, with an automation-first delivery process from migration to platform to data',
      'Co-build sessions with your engineers — runbooks, governance, and working code on the same day',
      'Training programs and cybersecurity assessments for engineering teams and executives',
      'AWS, GCP, Azure, sovereign EU clouds, or hybrid — senior-only delivery, fixed scope'
    ],
    quadrantsTitle: 'Skip to what matters',
    quadrants: [
      {
        key: 'pillars',
        step: '01',
        label: 'Home',
        title: 'Five practice pillars',
        description: 'Intelligent automation, AI-driven delivery, cloud transformation, training, and data engineering — one click away.',
        icon: 'tabler:layout-grid',
        href: '#pillars'
      },
      {
        key: 'services',
        step: '02',
        label: 'What we do',
        title: 'Our services',
        description: 'Browse the senior-led services we ship to production — automation, agile delivery, cloud, data, and security.',
        icon: 'tabler:briefcase',
        href: '#pillars'
      },
      {
        key: 'experience',
        step: '03',
        label: 'Why choose us',
        title: 'AI-driven solutions, 12+ years experience',
        description: 'Three hyperscalers, sovereign EU clouds, and 100% senior-only delivery. The numbers, not the adjectives.',
        icon: 'tabler:building-arch',
        href: '#stats'
      },
      {
        key: 'projects',
        step: '04',
        label: 'Our work',
        title: 'Successful projects',
        description: 'Three recent engagements — Globant, Scotiabank, Asylum Marketing — mapped to the seven packages.',
        icon: 'tabler:rocket',
        href: '#case-studies'
      }
    ]
  },
  intro: {
    title: 'Seven packages anchored on cloud + automation.',
    description:
      'Cafetatek was built to give EMEA engineering leaders direct access to senior platform, data, and AI engineers — without the overhead of a large consultancy. Three of our seven packages are anchored on cloud + automation: cross-platform + migration consulting, cloud + platform engineering, and AI-driven FinOps powered by Elixa. The other four — DevSecOps hardening, AI ChatOps + Agentic RPA migration, training programs, and cybersecurity assessments — extend the same practice into security, operations, and team enablement. You talk to the people who build. You ship in weeks, not quarters. You walk away with code, runbooks, and an engineering culture that keeps compounding.'
  },
  pillars: {
    eyebrow: 'Five service pillars',
    title: 'The Cafetatek practice, in five pillars',
    subtitle:
      'Each pillar is a senior-led delivery capability with two to four sub-services underneath. Most engagements combine pillars — and every engagement ships to production. No slideware, no advisory-only handoffs.',
    items: [
      {
        title: 'Intelligent Automation',
        description:
          'Replace brittle RPA bots and console-driven workflows with autonomous agents that take decisions in context, handle exceptions themselves, and operate across data, documents, and operational tooling — without round-the-clock supervision.',
        bullets: [
          'ChatOps and AI-driven workflows wired to Slack and Microsoft Teams',
          'End-to-end intelligent automation across IT operations',
          'AI-augmented automation for service desk, runbooks, and incident triage'
        ],
        icon: 'tabler:robot',
        subServices: [
          {
            letter: 'A',
            title: 'ChatOps & AI-driven workflows',
            description:
              'Slack and Teams bots that take deploys, rollbacks, and infra-health lookups in natural language — and escalate the rest.'
          },
          {
            letter: 'B',
            title: 'End-to-end intelligent automation',
            description:
              'Cross-tool orchestration that connects CI/CD, ITSM, identity, and observability — one trigger, the platform handles the rest.'
          },
          {
            letter: 'C',
            title: 'AI-augmented automation',
            description:
              'LLM-driven agents that handle ambiguous cases the old RPA bots could not — reading logs, documents, and screenshots in context.'
          }
        ],
        duration: '4-8 weeks per engagement',
        priceBand: '18-32k EUR per engagement',
        boringTask:
          'Manual triage of UiPath exception queues at 2 a.m. → autonomous LLM triage agent + Slack-native deploy bot',
        deliverables: [
          'ChatOps bot integration for Slack and Microsoft Teams',
          'Hook into CI/CD: deploy, rollback, and status from chat',
          'L1 incident-triage playbooks with auto-escalation',
          'Migration of legacy UiPath / BluePrism estates to LLM-driven agents',
          'CrewAI / LangGraph proof-of-concept plus production rollout'
        ]
      },
      {
        title: 'AI-driven Agile Software Development',
        description:
          'Ship new product ideas in weeks, not quarters — with senior engineers, modern delivery practices, and AI assistants embedded in the toolchain. Quality is non-negotiable; the work lands in production.',
        bullets: [
          'Quality assurance built into delivery, not bolted on at the end',
          'Software development as a service — outcome-priced, fixed scope'
        ],
        icon: 'tabler:rocket',
        subServices: [
          {
            letter: 'A',
            title: 'Quality assurance',
            description:
              'Trunk-based delivery, contract tests, and peer review on every change. You see the diff the same day the engineer writes it.'
          },
          {
            letter: 'B',
            title: 'Software development as a service',
            description:
              'Outcome-priced squads that validate ideas, ship to production, and hand over — no retainers, no advisory-only hand-offs.'
          }
        ],
        duration: '4-12 weeks per product slice',
        priceBand: '20-55k EUR per product slice',
        boringTask:
          'Two-week sprint reviews that produce a 50-slide deck nobody reads → trunk-based delivery with diffs visible the same day',
        deliverables: [
          'Discovery sprint + product validation in weeks',
          'Modern delivery: trunk-based, contract tests, IaC by default',
          'AI-assisted engineering embedded in the DevOps toolchain',
          'Ship to production with quality gates and a 30-day warranty',
          'Co-build sessions with your engineers so the codebase stays yours'
        ]
      },
      {
        title: 'Cloud Transformation',
        description:
          'Take the manual console work out of your cloud estate. We build landing zones, GitOps-driven platforms, and golden paths your developers actually use — across AWS, GCP, Azure, and sovereign EU providers.',
        bullets: [
          'Cloud adoption strategy that fits your team and your regulators',
          'Cloud application architecture reviewed and hardened for production',
          'ClickOps to Platform Engineering — replace console work with self-service',
          'FinOps unit-economics guardrails across all three hyperscalers'
        ],
        icon: 'tabler:cloud',
        subServices: [
          {
            letter: 'A',
            title: 'Cloud Adoption',
            description:
              'A workload-by-workload migration strategy — lift-and-shift, refactor, re-platform, or hybrid. The right answer depends on your regulators, your runway, and your team.'
          },
          {
            letter: 'B',
            title: 'Cloud application architecture',
            description:
              'Reference architectures reviewed, hardened, and turned into Terraform modules your other teams can consume.'
          },
          {
            letter: 'C',
            title: 'From ClickOps to Platform Engineering',
            description:
              'Landing zones, GitOps by default, ephemeral environments per PR. Your developers self-serve; the audit trail is automatic.'
          },
          {
            letter: 'D',
            title: 'FinOps',
            description:
              'Continuous cloud-cost optimisation with unit-economics guardrails across AWS, GCP, and Azure. No vendor lock-in, no referral fees.'
          }
        ],
        duration: '4-12 weeks per stream',
        priceBand: '18-50k EUR per stream',
        boringTask:
          'Manual quarterly cloud-spend review (two days each quarter) → continuous FinOps tuning with monthly ROI report',
        deliverables: [
          'Multi-cloud landing zones with policy-as-code',
          'GitOps pipeline (Argo CD) with quality gates on every PR',
          'Internal Developer Platform built on Backstage, Crossplane, or Argo',
          'Ephemeral environments per pull request',
          'Reusable Terraform modules consumed by your other engineering teams'
        ]
      },
      {
        title: 'Enterprise Training & Upskilling Programs',
        description:
          'Hands-on, practical training tracks in AI and security — designed and delivered by senior engineers who have actually shipped the things they teach. Your teams leave owning the platform, not relying on the vendor.',
        bullets: [
          'AI learning programs that turn experimentation into production usage',
          'Security training tracks that produce secure-by-design engineers'
        ],
        icon: 'tabler:school',
        subServices: [
          {
            letter: 'A',
            title: 'AI learning',
            description:
              'Hands-on programs that move teams from experimenting with assistants to embedding them in production delivery — with governance built in.'
          },
          {
            letter: 'B',
            title: 'Security training',
            description:
              'Practical secure-by-design tracks that map to OWASP Top 10, OWASP AI, and your compliance obligations — not slideware, lab work on your own repos.'
          }
        ],
        duration: '1-5 days per workshop · 4-12 weeks per program',
        priceBand: '4-12k EUR per workshop · 18-45k EUR per program',
        boringTask:
          'Reading 200 pages of new platform documentation alone → 3-day hands-on bootcamp with a senior engineer who built the platform',
        deliverables: [
          'AI, cloud, and Kubernetes hands-on workshops (3-5 day bootcamps)',
          'Security and AI governance training tracks for engineering teams',
          'Executive briefings for CTOs and CISOs (half-day format)',
          'Train-the-trainer so your team runs the next cohort internally',
          'Hands-on labs on your own repositories, pipelines, and incidents'
        ]
      },
      {
        title: 'Data Engineering',
        description:
          'Unlock the data trapped in legacy systems. We build real-time and batch pipelines, modernise ERP and SAP data extraction, and hand off governed datasets your BI and product teams can trust.',
        bullets: [
          'SAP data modernisation that keeps the live service running',
          'Data-driven pipelines that turn legacy extracts into governed products'
        ],
        icon: 'tabler:database',
        subServices: [
          {
            letter: 'A',
            title: 'SAP modernisation',
            description:
              'Data extraction and integration that does not break the live ERP. Operational continuity checks baked into every wave.'
          },
          {
            letter: 'B',
            title: 'Data-driven pipelines',
            description:
              'Streaming and batch pipelines, governed datasets, and the BI hand-off — built by senior engineers, owned by your data team.'
          }
        ],
        duration: '6-12 weeks per stream',
        priceBand: '22-48k EUR per stream',
        boringTask:
          'Weekly batch extracts that miss the spike → streaming pipeline with governance and BI hand-off in one quarter',
        deliverables: [
          'Real-time streaming + batch pipelines',
          'Legacy ERP and SAP data extraction at scale',
          'Data products and governed datasets, ready for BI',
          'Modernisation waves with rollback plans baked in',
          'Hand-off documentation and train-the-trainer for your data team'
        ]
      }
    ]
  },
  packages: {
    eyebrow: 'Service portfolio',
    title: 'Seven packages, one cloud + automation practice',
    subtitle:
      'Pick one package or combine two. Three are anchored on cloud + automation. All of them ship to production — no slideware, no advisory-only handoffs.',
    anchorBadge: 'Anchor',
    moreBadge: 'Also available',
    boringTasksTitle: 'Boring tasks we automate',
    boringTasksSubtitle:
      'Each package kills one specific manual process we have seen slow engineering teams down. Pulled from 12+ years of platform and delivery work.'
  },
  elixa: {
    eyebrow: 'Product · Elixa Multi-Migration Platform',
    title: 'Run multiple SAP and cloud migrations in parallel — without losing operational continuity.',
    subtitle:
      'Elixa is our in-house migration orchestration platform. It started as a way to make SAP modernisation less painful — fewer outages, cleaner data, faster migration waves. Today it coordinates multiple ERP and cloud migrations in parallel while keeping the live service running.',
    primaryCta: 'Request Elixa demo',
    secondaryCta: 'Read the docs',
    whyBuiltTitle: 'Why we built it',
    whyBuiltBody:
      'Elixa was born out of operational pain: SAP and ERP modernisation projects fail because they are run as a single big-bang effort, with no orchestration across waves, no continuity checks, and no clear handoff between phases. Elixa turns that into a workload-by-workload decision tree — pick the right migration strategy per workload, run the waves in parallel, keep the live service running, and report on operational continuity in real time.',
    steps: [
      {
        title: 'Capture the use case',
        description:
          'Sales engineers run the Elixa questionnaire. The platform maps every answer to a vendor-priced SKU, a migration strategy, and an operational continuity score — across the cloud and ERP of your choice.'
      },
      {
        title: 'Orchestrate the migration waves',
        description:
          'Elixa schedules the SAP + cloud + data migration waves in parallel, with rollback plans and pre-flight data integrity checks baked in for each wave.'
      },
      {
        title: 'Keep the live service running',
        description:
          'Operational continuity checks monitor the live service through every wave. Outage risk is surfaced before the wave, not after.'
      },
      {
        title: 'Govern the delivery',
        description:
          'Once the platform is live, Elixa unit-economics guardrails keep FinOps, security, and AI governance aligned with the original migration plan — no drift, no surprises.'
      }
    ],
    featuresTitle: 'What ships with Elixa',
    features: [
      'Multi-migration wave orchestration (run SAP + cloud + data migrations in parallel)',
      'Cortex Framework decision layer (picks the right migration strategy per workload)',
      'Operational continuity checks (keep the live service running through migration waves)',
      'SAP modernisation playbook (the original operational inspiration)',
      'Oracle / Microsoft / custom legacy ERP support',
      'Pre-flight data integrity + post-migration validation',
      'Vendor-priced SKUs across AWS, GCP, Azure, sovereign EU providers',
      'PDF and CSV outputs styled for buyer-side procurement'
    ]
  },
  engagement: {
    eyebrow: 'Engagement models',
    title: 'Four ways to work with us',
    subtitle:
      'Pick the model that matches your stage and risk profile. Every engagement ships with a published scope, a fixed price, and a 30-day warranty.',
    items: [
      {
        title: 'Discovery Sprint',
        description:
          'Two-week diagnostic that delivers an audit-ready findings brief: current-state architecture, top three risks, and a prioritised remediation plan with effort, impact, and timeline.',
        duration: '2 weeks · fixed fee'
      },
      {
        title: 'Foundation Build',
        description:
          'A 4–8 week engagement to land the first production-grade slice of your platform, data, or AI workflow — the wedge that proves the model and unlocks the next investment.',
        duration: '4–8 weeks · fixed scope'
      },
      {
        title: 'Embedded Pod',
        description:
          'A senior two-to-four-engineer pod embedded with your team for one or two quarters. We own a measurable KPI (DORA metrics, run-rate cost, time-to-first-AI-agent) and we exit with a handover plan.',
        duration: '1–2 quarters · monthly retainer'
      },
      {
        title: 'Retainer Care',
        description:
          'Ongoing fractional senior engineering: FinOps care, SRE on-call coverage, AI governance reviews, quarterly platform health audits. Cancel with 30 days notice.',
        duration: 'Ongoing · monthly retainer'
      }
    ]
  },
  methodology: {
    eyebrow: 'How we deliver',
    title: 'A repeatable, audit-friendly delivery model',
    subtitle:
      'Every engagement runs the same four steps — adapted to the size of the slice, not the playbook.',
    steps: [
      {
        title: 'Step 1: Discover',
        description:
          'Two weeks of structured interviews, code and infra review, and risk mapping. Output: a published findings brief and a fixed-scope statement of work.'
      },
      {
        title: 'Step 2: Design',
        description:
          'Architecture, IaC plan, and a written runbook. We do not start coding until the runbook is signed and the security checklist is green.'
      },
      {
        title: 'Step 3: Build',
        description:
          'Trunk-based delivery, contract tests, canary and blue-green deploys, peer review on every change. You see the diff in the same day the engineer writes it.'
      },
      {
        title: 'Step 4: Operate',
        description:
          'Runbooks, dashboards, on-call rotation, a 30-day warranty, and a knowledge-transfer plan. We hand over — we do not lock you in.'
      }
    ]
  },
  stats: {
    items: [
      { amount: '12+', title: 'Years of practice' },
      { amount: '40+', title: 'B2B deliveries shipped' },
      { amount: '3', title: 'Hyperscalers + sovereign' },
      { amount: '100%', title: 'Senior-only delivery' }
    ]
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'Questions B2B buyers ask before we sign',
    subtitle:
      'The most common questions from engineering leaders, CTOs, and procurement teams evaluating a Cafetatek engagement.',
    items: [
      {
        question: 'Are you really cloud-agnostic?',
        answer:
          'Yes. We have shipped production workloads on AWS, GCP, Azure, OpenShift, Scaleway, OVHcloud, and on-prem Kubernetes. We do not earn a referral fee from any cloud provider. We recommend the platform that matches your team, your data residency constraints, and your cost envelope — not the one we are incentivised to push.'
      },
      {
        question: 'How does Elixa fit into a sales motion?',
        answer:
          'Elixa is our internal cost-engineering tool. When you brief us on a use case, we use Elixa to generate a 3-year cost projection across your preferred providers, in your region, with the discount tier you actually have. The output is a buyer-ready PDF / CSV that procurement and finance can sign off on. After delivery, Elixa unit-economics guardrails keep cost aligned with the original quote.'
      },
      {
        question: 'Do you work on regulated workloads?',
        answer:
          'Yes. We have shipped on PCI, GDPR, DORA, and EU AI Act-adjacent environments. We produce audit-ready runbooks, data-flow maps, and risk registers; we work with your DPO and CISO from day one; we do not cut corners on access control, encryption, or logging.'
      },
      {
        question: 'What size of company do you work with?',
        answer:
          'EMEA scale-ups, growth-stage SaaS, and mid-market companies between 50 and 2,000 employees. We are at our best when there is one engineering leader who owns the decision and a real product problem to solve.'
      },
      {
        question: 'How is pricing structured?',
        answer:
          'Discovery Sprints are a fixed fee. Foundation Builds and Embedded Pods are fixed-scope or monthly retainers, with a published SOW and a 30-day warranty. Cloud costs are shown separately via Elixa, so you always see the service fee and the cloud spend as two distinct line items.'
      },
      {
        question: 'What happens after the first engagement?',
        answer:
          'Most clients move to a Retainer Care model for ongoing FinOps, SRE, and AI governance coverage. We do quarterly reviews against the original KPI. If you outgrow us, we hand over the runbooks, the dashboards, and the on-call rotation — no lock-in.'
      }
    ]
  },
  cta: {
    eyebrow: 'Pre-sales',
    title: 'From a brief to a priced, governed delivery plan.',
    subtitle:
      'Share the situation — a cloud migration, a Kubernetes adoption, a runaway cloud bill, an AI governance deadline — and we will reply with a clear next step within one business day.',
    primaryCta: 'Book a 30-min discovery call',
    secondaryCta: 'Send a brief',
    note: 'Replies within 1 business day · No sales pressure · Senior engineer on every call'
  },
  homepage: {
    stats: {
      eyebrow: 'By the numbers',
      title: 'Twelve years of practice, three clouds, one boutique.'
    },
    problem: {
      eyebrow: 'The current state',
      title: 'Cloud, Kubernetes, and AI are now table stakes — but the delivery metrics have not moved.',
      cto: {
        role: 'For CTOs',
        text: 'Your engineers are faster on AI tools. Your sprints are not. The pipeline still queues at the cloud, security, and FinOps layer.'
      },
      ciso: {
        role: 'For CISOs',
        text: 'AI governance, EU AI Act, GDPR, ISO 42001 — your buyers now require audit-ready evidence at every commit. Most teams do not have it.'
      }
    },
    caseStudies: {
      eyebrow: 'Verified delivery',
      title: 'What the practice has shipped in regulated environments.',
      subtitle: 'Three recent engagements that map to the 7 packages. Numbers are pulled from the CV — not marketing copy.',
      items: [
        {
          client: 'Globant',
          period: 'Feb 2024 – Jul 2025',
          industry: 'Enterprise SaaS',
          service: 'Package 04 · DevSecOps Hardening',
          title: 'Self-service Terraform framework cut deploy time 12%',
          outcome: 'Reduced support SLA by 80%, increased team capacity 25%, deployed Terraform modules adopted across multiple teams for security compliance.'
        },
        {
          client: 'Scotiabank Technology',
          period: 'Mar 2022 – Jan 2023',
          industry: 'Banking (regulated)',
          service: 'Package 02 · Cloud + Platform Engineering',
          title: 'Cloud and DevOps automation for a global bank',
          outcome: 'Delivered shared CI/CD pipelines, automated framework, Java test template adopted globally by QA teams in a regulated banking environment.'
        },
        {
          client: 'Asylum Marketing',
          period: 'Jan 2023 – Jan 2024',
          industry: 'Marketing',
          service: 'Package 01 · Cross-Platform + Migration',
          title: 'Lead engineer for cloud migration + WCAG AA compliance',
          outcome: 'Migrated on-prem automation environment to cloud. Implemented accessibility improvements compliant with WCAG AA standards. Optimised Jira workflow for real-time stakeholder visibility.'
        }
      ]
    }
  },
  footer: {
    tagline: 'Engineering boutique for B2B teams in EMEA.',
    rights: 'All rights reserved.'
  }
};

const es: Translations = {
  site: {
    name: 'Cafetatek',
    tagline: 'Boutique de ingeniería para equipos B2B en EMEA',
    description:
      'Cafetatek es una boutique de ingeniería senior que ayuda a equipos B2B en EMEA a entregar software moderno, datos modernos e IA gobernada — con ingeniería de plataformas agnóstica a la nube y unit economics FinOps incluidos.'
  },
  nav: {
    home: 'Inicio',
    services: 'Qué hacemos',
    whyChooseUs: 'Por qué elegirnos',
    ourWork: 'Nuestro trabajo',
    pillars: 'Áreas de práctica',
    product: 'Producto',
    engagement: 'Engagement',
    methodology: 'Metodología',
    about: 'Nosotros',
    contact: 'Contacto'
  },
  hero: {
    eyebrow: 'Proceso de Automation · APIs · Governance · CI/CD · Data · Digital · Agentic',
    title: 'Convierte tu stack cloud en autónomo. Lo construimos contigo — y te lo entregamos.',
    subtitle:
      'Delivery senior para equipos de cloud, datos e IA. Cableamos autonomía AI-driven en tu stack — pipelines, agentes, gobernanza — y te devolvemos las llaves, como se suponía que debía ser el movimiento de platform engineering.',
    primaryCta: 'Habla con un ingeniero senior',
    secondaryCta: 'Conoce cómo trabajamos',
    trustEyebrow: 'Lo que te llevas',
    trustItems: [
      '5 pilares de servicio anclados en cloud + automation, con un proceso de delivery automation-first de migración a plataforma a dato',
      'Sesiones de co-build con tu equipo — runbooks, governance y código funcionando el mismo día',
      'Programas de formación y assessments de ciberseguridad para equipos de ingeniería y ejecutivos',
      'AWS, GCP, Azure, nubes soberanas UE o híbrido — entrega senior-only, alcance fijo'
    ],
    quadrantsTitle: 'Salta a lo que importa',
    quadrants: [
      {
        key: 'pillars',
        step: '01',
        label: 'Inicio',
        title: 'Cinco pilares de práctica',
        description: 'Automatización inteligente, delivery AI-driven, cloud transformation, formación y data engineering — a un clic.',
        icon: 'tabler:layout-grid',
        href: '#pillars'
      },
      {
        key: 'services',
        step: '02',
        label: 'Qué hacemos',
        title: 'Nuestros servicios',
        description: 'Recorre los servicios senior-led que entregamos a producción — automation, agile delivery, cloud, data y security.',
        icon: 'tabler:briefcase',
        href: '#pillars'
      },
      {
        key: 'experience',
        step: '03',
        label: 'Por qué elegirnos',
        title: 'Soluciones AI-driven, 12+ años de experiencia',
        description: 'Tres hyperscalers, nubes soberanas UE y 100% entrega senior-only. Los números, no los adjetivos.',
        icon: 'tabler:building-arch',
        href: '#stats'
      },
      {
        key: 'projects',
        step: '04',
        label: 'Nuestro trabajo',
        title: 'Proyectos exitosos',
        description: 'Tres engagements recientes — Globant, Scotiabank, Asylum Marketing — mapeados a los siete paquetes.',
        icon: 'tabler:rocket',
        href: '#case-studies'
      }
    ]
  },
  intro: {
    title: 'Siete paquetes anclados en cloud + automation.',
    description:
      'Cafetatek nació para dar a los líderes de ingeniería en EMEA acceso directo a ingenieros senior de plataforma, datos e IA — sin la sobrecarga de una consultora grande. Tres de nuestros siete paquetes están anclados en cloud + automation: cross-platform + migración, cloud + platform engineering, y FinOps con IA powered by Elixa. Los otros cuatro — hardening DevSecOps, migración ChatOps + Agentic RPA, programas de formación y assessments de ciberseguridad — extienden la misma práctica a seguridad, operaciones y team enablement. Hablas con la gente que construye. Entregas en semanas, no trimestres. Te quedas con código, runbooks y una cultura de ingeniería que sigue compounding.'
  },
  pillars: {
    eyebrow: 'Cinco pilares de servicio',
    title: 'La práctica Cafetatek, en cinco pilares',
    subtitle:
      'Cada pilar es una capacidad de entrega liderada por senior y respaldada por dos a cuatro sub-servicios. La mayoría de los engagements combinan pilares — y todos llegan a producción. Sin slideware, sin hand-offs puramente advisory.',
    items: [
      {
        title: 'Automatización Inteligente',
        description:
          'Sustituimos los bots rígidos de RPA y los workflows por consola por agentes autónomos que deciden en contexto, gestionan sus excepciones y operan sobre datos, documentos y herramientas operacionales — sin necesidad de supervisión 24/7.',
        bullets: [
          'ChatOps y workflows AI-driven cableados a Slack y Microsoft Teams',
          'Automatización inteligente end-to-end para operaciones de TI',
          'Automatización aumentada por IA para service desk, runbooks y triaje de incidentes'
        ],
        icon: 'tabler:robot',
        subServices: [
          {
            letter: 'A',
            title: 'ChatOps y workflows AI-driven',
            description:
              'Bots de Slack y Teams que ejecutan deploys, rollbacks y consultas de salud de infra en lenguaje natural — y escalan el resto.'
          },
          {
            letter: 'B',
            title: 'Automatización inteligente end-to-end',
            description:
              'Orquestación cross-tool que conecta CI/CD, ITSM, identidad y observabilidad — un disparador, la plataforma hace el resto.'
          },
          {
            letter: 'C',
            title: 'Automatización aumentada por IA',
            description:
              'Agentes LLM-driven que manejan los casos ambiguos que los viejos bots de RPA no podían — leyendo logs, documentos y capturas en contexto.'
          }
        ],
        duration: '4-8 semanas por engagement',
        priceBand: '18-32k EUR por engagement',
        boringTask:
          'Triaje manual de colas de excepción de UiPath a las 2 a.m. → agente autónomo de triaje con LLM + bot de deploys nativo en Slack',
        deliverables: [
          'Integración del bot de ChatOps para Slack y Microsoft Teams',
          'Hook al CI/CD: deploy, rollback y estado desde el chat',
          'Playbooks de triaje L1 con auto-escalado',
          'Migración del estate UiPath / BluePrism legacy a agentes LLM-driven',
          'PoC con CrewAI / LangGraph + rollout a producción'
        ]
      },
      {
        title: 'Desarrollo Ágil de Software AI-driven',
        description:
          'Lleva nuevas ideas de producto a producción en semanas, no en trimestres — con ingenieros senior, prácticas modernas de delivery y asistentes de IA embebidos en la toolchain. La calidad es no negociable: el trabajo llega a producción.',
        bullets: [
          'Quality assurance integrado en el delivery, no añadido al final',
          'Software development as a service — precio por outcome, alcance fijo'
        ],
        icon: 'tabler:rocket',
        subServices: [
          {
            letter: 'A',
            title: 'Quality assurance',
            description:
              'Delivery trunk-based, contract tests y peer review en cada cambio. Ves el diff el mismo día que el ingeniero lo escribe.'
          },
          {
            letter: 'B',
            title: 'Software development as a service',
            description:
              'Squads con precio por outcome que validan ideas, entregan a producción y hacen hand-off — sin retainers, sin hand-offs puramente advisory.'
          }
        ],
        duration: '4-12 semanas por producto',
        priceBand: '20-55k EUR por producto',
        boringTask:
          'Sprint reviews de dos semanas que producen un deck de 50 slides que nadie lee → delivery trunk-based con diffs visibles el mismo día',
        deliverables: [
          'Sprint de descubrimiento + validación de producto en semanas',
          'Delivery moderno: trunk-based, contract tests, IaC por defecto',
          'Delivery AI-assisted embebido en la toolchain DevOps',
          'A producción con quality gates y garantía de 30 días',
          'Sesiones de co-build con tu equipo para que el código se quede contigo'
        ]
      },
      {
        title: 'Cloud Transformation',
        description:
          'Sacamos el trabajo manual por consola de tu estate cloud. Construimos landing zones, plataformas GitOps-driven y golden paths que tu equipo realmente usa — en AWS, GCP, Azure y nubes soberanas UE.',
        bullets: [
          'Estrategia de cloud adoption adaptada a tu equipo y a tus reguladores',
          'Cloud application architecture revisada y endurecida para producción',
          'De ClickOps a Platform Engineering — sustituimos consola por self-service',
          'Guardrails de unit-economics FinOps en los tres hyperscalers'
        ],
        icon: 'tabler:cloud',
        subServices: [
          {
            letter: 'A',
            title: 'Cloud Adoption',
            description:
              'Estrategia de migración carga por carga — lift-and-shift, refactor, re-platform o híbrida. La respuesta correcta depende de tus reguladores, tu runway y tu equipo.'
          },
          {
            letter: 'B',
            title: 'Cloud application architecture',
            description:
              'Arquitecturas de referencia revisadas, endurecidas y convertidas en módulos Terraform que tus otros equipos pueden consumir.'
          },
          {
            letter: 'C',
            title: 'De ClickOps a Platform Engineering',
            description:
              'Landing zones, GitOps por defecto, entornos efímeros por PR. Tu equipo se self-service; el audit trail es automático.'
          },
          {
            letter: 'D',
            title: 'FinOps',
            description:
              'Optimización continua del coste cloud con guardrails de unit-economics en AWS, GCP y Azure. Sin lock-in de vendor, sin referral fees.'
          }
        ],
        duration: '4-12 semanas por stream',
        priceBand: '18-50k EUR por stream',
        boringTask:
          'Review trimestral manual del gasto cloud (dos días cada trimestre) → continuous FinOps tuning con reporte mensual de ROI',
        deliverables: [
          'Multi-cloud landing zones con policy-as-code',
          'Pipeline GitOps (Argo CD) con quality gates en cada PR',
          'Internal Developer Platform sobre Backstage, Crossplane o Argo',
          'Entornos efímeros por pull request',
          'Módulos de Terraform reutilizables consumidos por tus otros equipos'
        ]
      },
      {
        title: 'Programas de Formación Enterprise y Upskilling',
        description:
          'Tracks de formación prácticos en IA y seguridad — diseñados e impartidos por ingenieros senior que realmente han entregado las cosas que enseñan. Tu equipo se va dueño de la plataforma, no dependiente del vendor.',
        bullets: [
          'Programas de AI learning que convierten la experimentación en uso en producción',
          'Tracks de security training que producen ingenieros secure-by-design'
        ],
        icon: 'tabler:school',
        subServices: [
          {
            letter: 'A',
            title: 'AI learning',
            description:
              'Programas hands-on que llevan a tu equipo de experimentar con asistentes a embeberlos en delivery de producción — con gobierno incluido.'
          },
          {
            letter: 'B',
            title: 'Security training',
            description:
              'Tracks prácticos de secure-by-design que mapean a OWASP Top 10, OWASP AI y tus obligaciones de compliance — labs sobre tus propios repos.'
          }
        ],
        duration: '1-5 días por workshop · 4-12 semanas por programa',
        priceBand: '4-12k EUR por workshop · 18-45k EUR por programa',
        boringTask:
          'Leer 200 páginas de documentación de la nueva plataforma en solitario → bootcamp hands-on de 3 días con un senior que construyó la plataforma',
        deliverables: [
          'Workshops hands-on de AI, cloud y Kubernetes (bootcamps de 3-5 días)',
          'Tracks de formación en seguridad y gobierno de IA para equipos de ingeniería',
          'Briefings ejecutivos para CTOs y CISOs (formato half-day)',
          'Train-the-trainer para que tu equipo corra la siguiente cohorte internamente',
          'Labs hands-on sobre tus propios repos, pipelines e incidentes'
        ]
      },
      {
        title: 'Data Engineering',
        description:
          'Desbloquea los datos atrapados en sistemas legacy. Construimos pipelines real-time y batch, modernizamos la extracción de datos de ERP y SAP, y entregamos datasets gobernados que tu BI y tu equipo de producto pueden confiar.',
        bullets: [
          'Modernización SAP que mantiene el servicio vivo',
          'Pipelines data-driven que convierten extracts legacy en productos gobernados'
        ],
        icon: 'tabler:database',
        subServices: [
          {
            letter: 'A',
            title: 'SAP modernisation',
            description:
              'Extracción e integración de datos que no rompe el ERP en producción. Checks de continuidad operacional integrados en cada ola.'
          },
          {
            letter: 'B',
            title: 'Data-driven pipelines',
            description:
              'Pipelines streaming y batch, datasets gobernados y hand-off a BI — construidos por senior, propiedad de tu equipo de datos.'
          }
        ],
        duration: '6-12 semanas por stream',
        priceBand: '22-48k EUR por stream',
        boringTask:
          'Extracts batch semanales que se pierden el pico → pipeline streaming con gobernanza y hand-off a BI en un trimestre',
        deliverables: [
          'Pipelines streaming + batch en tiempo real',
          'Extracción de datos de ERP y SAP legacy a escala',
          'Data products y datasets gobernados, listos para BI',
          'Olas de modernización con rollback plans integrados',
          'Documentación de hand-off y train-the-trainer para tu equipo de datos'
        ]
      }
    ]
  },
  elixa: {
    eyebrow: 'Producto · Elixa Multi-Migration Platform',
    title: 'Cubre múltiples migraciones de SAP y cloud en paralelo — sin perder continuidad operacional.',
    subtitle:
      'Elixa es nuestra plataforma interna de orquestación de migraciones. Nació como una forma de hacer la modernización de SAP menos dolorosa — menos outages, datos más limpios, olas de migración más rápidas. Hoy coordina múltiples migraciones de ERP y cloud en paralelo mientras mantiene el servicio vivo.',
    primaryCta: 'Solicitar demo de Elixa',
    secondaryCta: 'Leer la documentación',
    whyBuiltTitle: 'Por qué lo construimos',
    whyBuiltBody:
      'Elixa nació de un dolor operacional: los proyectos de modernización de SAP y ERP fallan porque se corren como un único esfuerzo big-bang, sin orquestación entre olas, sin checks de continuidad y sin handoff claro entre fases. Elixa convierte eso en un decision tree carga por carga — elige la estrategia de migración correcta por carga, corre las olas en paralelo, mantiene el servicio vivo y reporta continuidad operacional en tiempo real.',
    steps: [
      {
        title: 'Capturar el caso de uso',
        description:
          'Los preventas ejecutan el cuestionario de Elixa. La plataforma mapea cada respuesta a un SKU con precio real, una estrategia de migración y un score de continuidad operacional — sobre el cloud y ERP que elijas.'
      },
      {
        title: 'Orquestar las olas de migración',
        description:
          'Elixa agenda las olas de SAP + cloud + datos en paralelo, con planes de rollback y checks de integridad de datos pre-vuelo para cada ola.'
      },
      {
        title: 'Mantener el servicio vivo',
        description:
          'Los checks de continuidad operacional monitorizan el servicio vivo durante cada ola. El riesgo de outage se surface antes de la ola, no después.'
      },
      {
        title: 'Gobernar la entrega',
        description:
          'Cuando la plataforma está en producción, los guardrails de unit-economics de Elixa mantienen FinOps, seguridad y gobierno de IA alineados con el plan de migración original — sin drift, sin sorpresas.'
      }
    ],
    featuresTitle: 'Qué incluye Elixa',
    features: [
      'Orquestación de múltiples olas de migración (SAP + cloud + datos en paralelo)',
      'Capa de decisión con Cortex Framework (elige la estrategia de migración correcta por carga)',
      'Checks de continuidad operacional (mantén el servicio vivo durante las olas)',
      'Playbook de modernización de SAP (la inspiración operacional original)',
      'Soporte para Oracle / Microsoft / ERP legacy custom',
      'Integridad de datos pre-vuelo + validación post-migración',
      'SKUs con precio real en AWS, GCP, Azure y nubes soberanas UE',
      'Salidas PDF y CSV listas para procurement del comprador'
    ]
  },
  packages: {
    eyebrow: 'Portafolio de servicios',
    title: 'Siete paquetes, una práctica de cloud + automation',
    subtitle:
      'Elige un paquete o combina dos. Tres están anclados en cloud + automation. Todos llegan a producción — sin slideware, sin hand-offs puramente advisory.',
    anchorBadge: 'Anchor',
    moreBadge: 'También disponible',
    boringTasksTitle: 'Tareas aburridas que automatizamos',
    boringTasksSubtitle:
      'Cada paquete elimina un proceso manual específico que hemos visto frenar a equipos de ingeniería. Sacado de más de 12 años de trabajo de plataforma y entrega.'
  },
  engagement: {
    eyebrow: 'Modelos de engagement',
    title: 'Cuatro formas de trabajar con nosotros',
    subtitle:
      'Elige el modelo que encaje con tu etapa y tu perfil de riesgo. Cada engagement entrega alcance publicado, precio fijo y garantía de 30 días.',
    items: [
      {
        title: 'Discovery Sprint',
        description:
          'Diagnóstico de dos semanas que entrega un findings brief audit-ready: arquitectura actual, top tres riesgos, y un plan de remediación priorizado con effort, impact y timeline.',
        duration: '2 semanas · fee fijo'
      },
      {
        title: 'Foundation Build',
        description:
          'Engagement de 4–8 semanas para aterrizar el primer slice production-grade de tu plataforma, datos o workflow de IA — la cuña que prueba el modelo y desbloquea la siguiente inversión.',
        duration: '4–8 semanas · alcance fijo'
      },
      {
        title: 'Embedded Pod',
        description:
          'Un pod senior de dos a cuatro ingenieros embebido con tu equipo durante uno o dos trimestres. Somos owners de un KPI medible (DORA metrics, run-rate cost, time-to-first-AI-agent) y salimos con un handover plan.',
        duration: '1–2 trimestres · retainer mensual'
      },
      {
        title: 'Retainer Care',
        description:
          'Ingeniería senior fraccional continua: FinOps care, SRE on-call, AI governance reviews, auditorías trimestrales de salud de plataforma. Cancela con 30 días de aviso.',
        duration: 'Continuo · retainer mensual'
      }
    ]
  },
  methodology: {
    eyebrow: 'Cómo entregamos',
    title: 'Un modelo de entrega repetible y audit-friendly',
    subtitle:
      'Cada engagement corre los mismos cuatro pasos — adaptados al tamaño del slice, no al playbook.',
    steps: [
      {
        title: 'Paso 1: Discover',
        description:
          'Dos semanas de entrevistas estructuradas, revisión de código e infra, y mapeo de riesgos. Output: findings brief publicado y statement of work de alcance fijo.'
      },
      {
        title: 'Paso 2: Design',
        description:
          'Arquitectura, plan de IaC, y un runbook escrito. No empezamos a programar hasta que el runbook está firmado y el security checklist está en verde.'
      },
      {
        title: 'Paso 3: Build',
        description:
          'Trunk-based delivery, contract tests, canary y blue-green, peer review en cada cambio. Ves el diff el mismo día que el ingeniero lo escribe.'
      },
      {
        title: 'Paso 4: Operate',
        description:
          'Runbooks, dashboards, on-call rotation, garantía de 30 días y un plan de knowledge-transfer. Hacemos hand-over — no te lockeamos.'
      }
    ]
  },
  stats: {
    items: [
      { amount: '12+', title: 'Años de práctica' },
      { amount: '40+', title: 'Entregas B2B shipped' },
      { amount: '3', title: 'Hyperscalers + soberano' },
      { amount: '100%', title: 'Entrega senior-only' }
    ]
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que los compradores B2B preguntan antes de firmar',
    subtitle:
      'Las preguntas más habituales de engineering leaders, CTOs y equipos de procurement que evalúan un engagement con Cafetatek.',
    items: [
      {
        question: '¿De verdad son agnósticos a la nube?',
        answer:
          'Sí. Hemos entregado cargas en producción sobre AWS, GCP, Azure, OpenShift, Scaleway, OVHcloud y Kubernetes on-prem. No cobramos referral fee de ningún cloud provider. Recomendamos la plataforma que encaje con tu equipo, tus restricciones de data residency y tu envelope de coste — no la que nos incentivan a empujar.'
      },
      {
        question: '¿Cómo encaja Elixa en el motion de preventa?',
        answer:
          'Elixa es nuestra herramienta interna de cost-engineering. Cuando nos pasas un brief, usamos Elixa para generar una proyección de costes a 3 años sobre tu proveedor preferido, en tu región, con tu tier de descuento real. El output es un PDF / CSV listo para que procurement y finance firmen. Después de la entrega, los guardrails de unit-economics de Elixa mantienen el coste alineado con la cotización original.'
      },
      {
        question: '¿Trabajan en cargas reguladas?',
        answer:
          'Sí. Hemos entregado en entornos PCI, GDPR, DORA y adyacentes a EU AI Act. Producimos runbooks audit-ready, data-flow maps y risk registers; trabajamos con tu DPO y CISO desde el día uno; no recortamos en access control, encryption o logging.'
      },
      {
        question: '¿Con qué tamaño de empresa trabajan?',
        answer:
          'Scale-ups en EMEA, SaaS growth-stage y mid-market entre 50 y 2,000 empleados. Estamos en mejor forma cuando hay un engineering leader que owns la decisión y un problema de producto real que resolver.'
      },
      {
        question: '¿Cómo se estructura el pricing?',
        answer:
          'Los Discovery Sprints son fee fijo. Los Foundation Builds y Embedded Pods son alcance fijo o retainer mensual, con un SOW publicado y garantía de 30 días. Los costes cloud se muestran por separado vía Elixa, así siempre ves el service fee y el cloud spend como dos line items distintos.'
      },
      {
        question: '¿Qué pasa después del primer engagement?',
        answer:
          'La mayoría de los clientes pasan a un Retainer Care para cobertura continua de FinOps, SRE y AI governance. Hacemos reviews trimestrales contra el KPI original. Si te nos quedas grande, te entregamos los runbooks, los dashboards y la on-call rotation — sin lock-in.'
      }
    ]
  },
  cta: {
    eyebrow: 'Pre-venta',
    title: 'De un brief a un plan de entrega precio y gobernado.',
    subtitle:
      'Comparte la situación — una migración cloud, una adopción de Kubernetes, un descontrol de costes cloud, un deadline de gobierno de IA — y respondemos con un siguiente paso claro en un día hábil.',
    primaryCta: 'Reservar discovery call de 30 min',
    secondaryCta: 'Enviar un brief',
    note: 'Respuesta en 1 día hábil · Sin presión de ventas · Ingeniero senior en cada call'
  },
  homepage: {
    stats: {
      eyebrow: 'En números',
      title: 'Doce años de práctica, tres clouds, una boutique.'
    },
    problem: {
      eyebrow: 'El estado actual',
      title: 'Cloud, Kubernetes e IA ya son mesa de juego — pero las métricas de entrega no se han movido.',
      cto: {
        role: 'Para CTOs',
        text: 'Tus ingenieros son más rápidos con herramientas de IA. Tus sprints, no. El pipeline sigue haciendo cola en cloud, seguridad y FinOps.'
      },
      ciso: {
        role: 'Para CISOs',
        text: 'Gobierno de IA, EU AI Act, GDPR, ISO 42001 — tus compradores ya piden evidencia audit-ready en cada commit. La mayoría de los equipos no la tienen.'
      }
    },
    caseStudies: {
      eyebrow: 'Entrega verificada',
      title: 'Lo que la práctica ha entregado en entornos regulados.',
      subtitle: 'Tres engagements recientes que mapean a los 7 paquetes. Los números vienen del CV — no son copy de marketing.',
      items: [
        {
          client: 'Globant',
          period: 'Feb 2024 – Jul 2025',
          industry: 'Enterprise SaaS',
          service: 'Package 04 · DevSecOps Hardening',
          title: 'Framework Terraform self-service redujo el tiempo de deploy un 12%',
          outcome: 'Redujo el SLA de soporte en 80%, aumentó la capacidad del equipo en 25%, desplegó módulos Terraform adoptados por múltiples equipos para compliance de seguridad.'
        },
        {
          client: 'Scotiabank Technology',
          period: 'Mar 2022 – Ene 2023',
          industry: 'Banca (regulada)',
          service: 'Package 02 · Cloud + Platform Engineering',
          title: 'Cloud y DevOps automation para un banco global',
          outcome: 'Pipelines compartidos de CI/CD, framework automatizado, template de tests Java adoptado globalmente por equipos de QA en un entorno bancario regulado.'
        },
        {
          client: 'Asylum Marketing',
          period: 'Ene 2023 – Ene 2024',
          industry: 'Marketing',
          service: 'Package 01 · Cross-Platform + Migration',
          title: 'Lead engineer para migración cloud + compliance WCAG AA',
          outcome: 'Migración del entorno de automatización on-prem a cloud. Implementación de mejoras de accesibilidad conformes con WCAG AA. Optimización del workflow de Jira para visibilidad en tiempo real de stakeholders.'
        }
      ]
    }
  },
  footer: {
    tagline: 'Boutique de ingeniería para equipos B2B en EMEA.',
    rights: 'Todos los derechos reservados.'
  }
};

const dictionaries: Record<Locale, Translations> = { en, es };

export const getTranslations = (locale: Locale): Translations => dictionaries[locale] ?? en;

export const t = (locale: Locale) => {
  const dict = getTranslations(locale);
  return new Proxy(dict, {
    get(target, prop: string) {
      const value = (target as Record<string, unknown>)[prop];
      if (value !== undefined) return value;
      return (dictionaries.en as Record<string, unknown>)[prop];
    }
  }) as Translations;
};
