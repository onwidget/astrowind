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
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
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
    tagline: 'Senior platform engineering for EMEA scale-ups in regulated industries',
    description:
      'Cafetatek is a senior-only engineering boutique that gives EMEA scale-ups in regulated industries — banking, fintech, healthcare, aviation, global marketing — direct access to senior platform, data, and AI engineers. We ship modern software, governed AI, and FinOps unit economics — without the overhead of a 10-engineer team.'
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
    title: 'Move at enterprise speed, with a boutique budget.',
    subtitle:
      'For EMEA scale-ups in banking, fintech, healthcare, aviation, and global marketing that need to ship regulated, AI-enabled products without slowing down — and without building a 10-engineer platform team to do it. Senior-led delivery for cloud, data, and AI: we wire the autonomy, governance, and unit economics into your stack, then hand the keys back to your team.',
    primaryCta: 'Talk to a senior engineer',
    secondaryCta: 'See how we work',
    quadrantsTitle: 'Skip to what matters',
    quadrants: [
      {
        key: 'pillars',
        step: '01',
        label: 'Home',
        title: 'Six practice pillars',
        description: 'Intelligent automation, AI-driven delivery, cloud transformation, training, data engineering, and security — one click away.',
        icon: 'tabler:layout-grid',
        href: '#pillars'
      },
      {
        key: 'services',
        step: '02',
        label: 'What we do',
        title: 'Our services',
        description: 'Browse the senior-led services we ship to production — automation, agile delivery, cloud, data, security, and AI governance.',
        icon: 'tabler:briefcase',
        href: '#pillars'
      },
      {
        key: 'experience',
        step: '03',
        label: 'Why choose us',
        title: 'AI-driven solutions, 12+ years experience',
        description: 'Three hyperscalers, sovereign EU clouds, and 100% senior-only delivery. Verified metrics, not adjectives.',
        icon: 'tabler:building-arch',
        href: '#stats'
      },
      {
        key: 'projects',
        step: '04',
        label: 'Our work',
        title: 'Successful projects in regulated industries',
        description: 'Banking, fintech, healthcare, aviation, global marketing — Globant, Scotiabank, British Airways, Asylum Marketing.',
        icon: 'tabler:rocket',
        href: '#case-studies'
      }
    ]
  },
  intro: {
    title: 'Six pillars, one cloud + automation practice for regulated industries.',
    description:
      'At Cafetatek, we help companies accelerate AI-driven adoption through a proprietary, automation-first delivery framework. From migrating infrastructure from ClickOps to developer self-service, to DevSecOps hardening, AI ChatOps, and intelligent process automation, we support your engineering journey at every stage. Our structured training programs enable your teams to master next-generation IT workflows without losing time on market research or unproven trends.'
  },
  pillars: {
    eyebrow: 'Six service pillars',
    title: 'The Cafetatek practice, in six pillars',
    subtitle:
      'Each pillar is a senior-led delivery capability with two to four sub-services underneath. Most engagements combine pillars — and every engagement ships to production. No slideware, no advisory-only handoffs. Built for EMEA scale-ups in regulated industries that need to move fast without breaking compliance.',
    items: [
      {
        title: 'Intelligent Automation',
        description:
          'Replace brittle bots and console-driven workflows with autonomous agents that take decisions in context, handle exceptions themselves, and operate across data, documents, and operational tooling — without round-the-clock supervision.',
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
          'Ship new product ideas in weeks, not quarters — with senior engineers, modern delivery practices, and AI assistants embedded in the toolchain. Quality is non-negotiable; the work lands in production. For regulated products, we layer AI Governance and MCP Gateway integration on top so every AI workflow ships audit-ready.',
        bullets: [
          'Quality assurance built into delivery, not bolted on at the end',
          'Software development as a service — outcome-priced, fixed scope',
          'AI Governance + MCP Gateway baked in for regulated industries'
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
          },
          {
            letter: 'C',
            title: 'AI Governance + MCP Gateway',
            description:
              'For products that consume AI inside regulated workflows (banking, fintech, healthcare): policy-enforced AI workloads, MCP servers on Kong + IBM Context Forge, audit-ready observability on agent tool-calls. EU AI Act (enforcement 2 Aug 2026), NIST AI RMF, ISO/IEC 42001 readiness baked into delivery — not bolted on at the end.'
          }
        ],
        duration: '4-12 weeks per product slice · 6-10 weeks for AI Governance workstreams',
        priceBand: '20-55k EUR per product slice · 28-60k EUR per AI Governance workstream',
        boringTask:
          'Two-week sprint reviews that produce a 50-slide deck nobody reads → trunk-based delivery with diffs visible the same day',
        deliverables: [
          'Discovery sprint + product validation in weeks',
          'Modern delivery: trunk-based, contract tests, IaC by default',
          'AI-assisted engineering embedded in the DevOps toolchain',
          'Ship to production with quality gates and a 30-day warranty',
          'Co-build sessions with your engineers so the codebase stays yours',
          'AI Governance integration layer with auditable, policy-enforced controls',
          'MCP Gateway (Kong + IBM Context Forge) with routing, observability, and policy enforcement on agent tool-calls'
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
    title: 'Six pillars, one cloud + automation practice',
    subtitle:
      'Pick one pillar or combine two. All six are anchored on cloud + automation. All of them ship to production — no slideware, no advisory-only handoffs.',
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
      'Elixa is our in-house migration orchestration platform. It started as a way to make SAP modernisation less painful — fewer outages, cleaner data, faster migration waves. Today it coordinates multiple ERP and cloud migrations in parallel while keeping the live service running. Built for scale-ups in regulated industries that need a migration that does not take the platform down.',
    primaryCta: 'Request Elixa demo',
    secondaryCta: 'Read the docs',
    whyBuiltTitle: 'Why we built it',
    whyBuiltBody:
      'Elixa was born out of operational pain: SAP and ERP modernisation projects fail because they are run as a single big-bang effort, with no orchestration across waves, no continuity checks, and no clear handoff between phases. Elixa turns that into a workload-by-workload decision tree — pick the right migration strategy per workload, run the waves in parallel, keep the live service running, and report on operational continuity in real time. The same engine produces the cost projection your procurement team signs off on, so finance and delivery see the same numbers from day one.',
    steps: [
      {
        title: 'Capture the use case',
        description:
          'Sales engineers run the Elixa questionnaire. The platform maps every answer to a vendor-priced SKU, a migration strategy, and an operational continuity score — across the cloud and ERP of your choice, in your region, at your real discount tier.'
      },
      {
        title: 'Orchestrate the migration waves',
        description:
          'Elixa schedules the SAP + cloud + data migration waves in parallel, with rollback plans and pre-flight data integrity checks baked in for each wave.'
      },
      {
        title: 'Keep the live service running',
        description:
          'Operational continuity checks monitor the live service through every wave. Outage risk is surfaced before the wave, not after — critical for regulated workloads where an outage is a reporting event.'
      },
      {
        title: 'Govern the delivery',
        description:
          'Once the platform is live, Elixa cost guardrails keep cloud spend, security baselines, and migration deliverables aligned with the original plan — no drift, no surprises.'
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
      'Pick the model that matches your stage and risk profile. Built for scale-ups in regulated industries that need to ship in weeks — without locking into a 10-engineer team. Every engagement ships with a published scope, a fixed price, and a 30-day warranty.',
    items: [
      {
        title: 'Discovery Sprint',
        description:
          'Two-week diagnostic that delivers an audit-ready findings brief: current-state architecture, top three risks, and a prioritised remediation plan with effort, impact, and timeline. The fastest way for a non-TI-heavy scale-up to know what to fix first.',
        duration: '2 weeks · fixed fee'
      },
      {
        title: 'Foundation Build',
        description:
          'A 4–8 week engagement to land the first production-grade slice of your platform, data, AI governance, or AI workflow — the wedge that proves the model and unlocks the next investment. Outcome-priced, fixed scope, no advisory-only hand-offs.',
        duration: '4–8 weeks · fixed scope'
      },
      {
        title: 'Embedded Pod',
        description:
          'A senior two-to-four-engineer pod embedded with your team for one or two quarters. We own a measurable KPI (DORA metrics, run-rate cost, time-to-first-AI-agent, audit-pass rate) and we exit with a handover plan to your in-house team.',
        duration: '1–2 quarters · monthly retainer'
      },
      {
        title: 'Retainer Care',
        description:
          'Ongoing fractional senior engineering for scale-ups that cannot justify a full-time hire: FinOps care, SRE on-call coverage, AI governance reviews, quarterly platform health audits. Cancel with 30 days notice.',
        duration: 'Ongoing · monthly retainer'
      }
    ]
  },
  methodology: {
    eyebrow: 'How we deliver',
    title: 'A clear framework — adapted to your size, not the playbook.',
    subtitle:
      'Every engagement runs the same five steps — adapted to the size of the slice, not to the size of the slide deck. The framework is the same on a 2-week discovery and on a 6-month embedded pod.',
    steps: [
      {
        title: 'Step 1: Compatibility check',
        description:
          'One week. We look at your team, your regulator, your runway, and your current stack. We tell you in writing whether Cafetatek is the right fit — and we say no if it is not. No sales motion, no discovery invoice.'
      },
      {
        title: 'Step 2: Discover workspaces',
        description:
          'We map every workspace: repos, pipelines, data, identity, on-call, compliance. The output is a written map of what is solid, what is brittle, and what is missing — and which parts we can standardise vs. which we have to build.'
      },
      {
        title: 'Step 3: Rapid design',
        description:
          'Short, structured sessions with your engineers and your decision-maker. We use fast-decision techniques to converge on architecture, IaC plan, and runbook. You sign the runbook before we write a single line of code.'
      },
      {
        title: 'Step 4: Build',
        description:
          'Trunk-based delivery, contract tests, canary and blue-green deploys, peer review on every change. You see the diff the same day the engineer writes it. Quality gates are the default, not the escape hatch.'
      },
      {
        title: 'Step 5: Operate',
        description:
          'Runbooks, dashboards, on-call rotation, a 30-day warranty, and a knowledge-transfer plan. We hand over — we do not lock you in. If you cannot staff the on-call, we stay on retainer until you can.'
      }
    ]
  },
  stats: {
    items: [
      { amount: '12+', title: 'Years of practice' },
      { amount: '40+', title: 'B2B deliveries shipped' },
      { amount: '200+', title: 'Microservices in production' },
      { amount: '350%', title: 'Self-service delivery effectiveness' },
      { amount: '80%', title: 'Support SLA reduction' },
      { amount: '25%', title: 'Team capacity freed' },
      { amount: '35%', title: 'Operational time reduction' },
      { amount: '20%', title: 'Global artefact throughput uplift' }
    ]
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'Questions B2B buyers ask before we sign',
    subtitle:
      'The most common questions from engineering leaders, CTOs, and procurement teams in regulated industries — banking, fintech, healthcare, aviation, and global marketing.',
    items: [
      {
        question: 'Are you really cloud-agnostic?',
        answer:
          'Yes. We have shipped production workloads on AWS, GCP, Azure, OpenShift, Scaleway, OVHcloud, and on-prem Kubernetes — for clients in banking, fintech, healthcare, aviation, and global marketing. We do not earn a referral fee from any cloud provider. We recommend the platform that matches your team, your data residency constraints, and your cost envelope — not the one we are incentivised to push.'
      },
      {
        question: 'How does Elixa fit into a sales motion?',
        answer:
          'Elixa is our internal cost-engineering tool. When you brief us on a use case, we use Elixa to generate a 3-year cost projection across your preferred providers, in your region, with the discount tier you actually have. The output is a buyer-ready PDF / CSV that procurement and finance can sign off on. After delivery, Elixa unit-economics guardrails keep cost aligned with the original quote.'
      },
      {
        question: 'Do you work on regulated workloads?',
        answer:
          'Yes. We have shipped on PCI, GDPR, DORA, and EU AI Act-adjacent environments — for clients in banking (Scotiabank CoE), aviation (British Airways marketing operations), and global marketing. We produce audit-ready runbooks, data-flow maps, and risk registers; we work with your DPO and CISO from day one; we do not cut corners on access control, encryption, or logging.'
      },
      {
        question: 'What size of company do you work with?',
        answer:
          'EMEA scale-ups and growth-stage companies in regulated industries — typically between 10 and 500 employees. We are at our best with teams that cannot justify a 10-engineer platform function but still need to ship regulated, AI-enabled products without slowing down. If there is one engineering leader who owns the decision and a real product problem to solve, we are the right fit.'
      },
      {
        question: 'Can you help us with AI Governance and the EU AI Act?',
        answer:
          'Yes — that is one of our flagship workstreams. We build an AI Governance integration layer with auditable, policy-enforced controls, plus MCP Gateway plumbing on Kong + IBM Context Forge (routing, observability, and policy enforcement on agent tool-calls). The framing is built around EU AI Act readiness (enforcement 2 Aug 2026), NIST AI RMF, and ISO/IEC 42001. We ship a 6–10 week workstream that gives your auditors evidence at every commit — not a slide deck.'
      },
      {
        question: 'How is pricing structured?',
        answer:
          'Discovery Sprints are a fixed fee. Foundation Builds and Embedded Pods are fixed-scope or monthly retainers, with a published SOW and a 30-day warranty. Cloud costs are shown separately via Elixa, so you always see the service fee and the cloud spend as two distinct line items — important for scale-ups that need to defend the budget to a board or a CFO.'
      },
      {
        question: 'What happens after the first engagement?',
        answer:
          'Most clients move to a Retainer Care model for ongoing FinOps, SRE, and AI governance coverage. We do quarterly reviews against the original KPI. If you outgrow us, we hand over the runbooks, the dashboards, and the on-call rotation — no lock-in. If you do not yet need a full retainer, we can hand the work back to your in-house team after a Foundation Build and stay on call for a 30-day warranty.'
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
      title: 'Twelve years of practice, three clouds, one boutique — verified in regulated industries.'
    },
    problem: {
      eyebrow: 'The current state',
      title: 'Your growth is now waiting on the platform.',
      cto: {
        role: 'What your engineering team sees',
        text: 'Every release has to clear cloud, security, cost, and governance before it reaches customers. That is the wrong operating model for a scale-up: engineers lose momentum, AI initiatives stay stuck in review, and the roadmap slips. Cafetatek builds the delivery foundation and the audit evidence together, then hands a governed platform back to your team.'
      },
      ciso: {
        role: 'What your board and your auditors see',
        text: 'Every release has to clear cloud, security, cost, and governance before it reaches customers. That is the wrong operating model for a scale-up: enterprise buyers block the deal, regulators open the file, and the next AI feature waits another quarter. Cafetatek ships the evidence with the code, so compliance becomes a byproduct of shipping, not a project that competes with it.'
      }
    },
    caseStudies: {
      eyebrow: 'Verified delivery',
      title: 'What the practice has shipped in regulated industries.',
      subtitle: 'Four recent engagements in banking, aviation, enterprise SaaS, and global marketing. Numbers are pulled from delivery records — not marketing copy.',
      items: [
        {
          client: 'Globant',
          period: 'Feb 2024 – Jul 2025',
          industry: 'Enterprise SaaS · regulated delivery platform',
          service: 'Package 04 · DevSecOps Hardening',
          title: 'Self-service Terraform framework cut deploy time 12%',
          outcome: 'Reduced support SLA by 80%, increased team capacity 25%, deployed Terraform modules adopted across multiple teams for security compliance across a 200+ microservice platform.'
        },
        {
          client: 'Scotiabank Technology',
          period: 'Mar 2022 – Jan 2023',
          industry: 'Banking (regulated)',
          service: 'Package 02 · Cloud + Platform Engineering',
          title: 'Cloud and DevOps automation for a global bank',
          outcome: 'Delivered shared CI/CD pipelines, automated framework, Java test template adopted globally by QA teams across LATAM, USA, and EMEA in a regulated banking environment.'
        },
        {
          client: 'British Airways',
          period: '2022 – 2024',
          industry: 'Aviation · global marketing operations',
          service: 'Package 03 · DevOps Automation',
          title: 'DevOps automation supporting global marketing operations',
          outcome: 'Designed and operated DevOps automation supporting marketing and operational processes at scale for one of Europe’s largest airlines — reliable pipelines, faster campaign release cycles, audit-ready delivery records.'
        },
        {
          client: 'Asylum Marketing',
          period: 'Jan 2023 – Jan 2024',
          industry: 'Global marketing',
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
    tagline: 'Platform engineering senior para scale-ups de EMEA en industrias reguladas',
    description:
      'Cafetatek es una boutique de ingeniería senior que da a scale-ups de EMEA en industrias reguladas — banca, fintech, salud, aviación, marketing global — acceso directo a ingenieros senior de plataforma, datos e IA. Entregamos software moderno, IA gobernada y unit economics FinOps — sin la sobrecarga de un equipo de 10 ingenieros.'
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
    title: 'Muévete a velocidad enterprise, con presupuesto de boutique.',
    subtitle:
      'Para scale-ups de EMEA en banca, fintech, salud, aviación y marketing global que necesitan entregar productos regulados y AI-enabled sin frenar — y sin montar un equipo de plataforma de 10 ingenieros para hacerlo. Delivery senior para cloud, datos e IA: cableamos la autonomía, la gobernanza y las unit economics en tu stack, y luego devolvemos las llaves a tu equipo.',
    primaryCta: 'Habla con un ingeniero senior',
    secondaryCta: 'Conoce cómo trabajamos',
    quadrantsTitle: 'Salta a lo que importa',
    quadrants: [
      {
        key: 'pillars',
        step: '01',
        label: 'Inicio',
        title: 'Seis pilares de práctica',
        description: 'Automatización inteligente, delivery AI-driven, cloud transformation, formación, data engineering y security — a un clic.',
        icon: 'tabler:layout-grid',
        href: '#pillars'
      },
      {
        key: 'services',
        step: '02',
        label: 'Qué hacemos',
        title: 'Nuestros servicios',
        description: 'Recorre los servicios senior-led que entregamos a producción — automation, agile delivery, cloud, data, security y AI governance.',
        icon: 'tabler:briefcase',
        href: '#pillars'
      },
      {
        key: 'experience',
        step: '03',
        label: 'Por qué elegirnos',
        title: 'Soluciones AI-driven, 12+ años de experiencia',
        description: 'Tres hyperscalers, nubes soberanas UE y 100% entrega senior-only. Métricas verificadas, no adjetivos.',
        icon: 'tabler:building-arch',
        href: '#stats'
      },
      {
        key: 'projects',
        step: '04',
        label: 'Nuestro trabajo',
        title: 'Proyectos exitosos en industrias reguladas',
        description: 'Banca, fintech, salud, aviación, marketing global — Globant, Scotiabank, British Airways, Asylum Marketing.',
        icon: 'tabler:rocket',
        href: '#case-studies'
      }
    ]
  },
  intro: {
    title: 'Seis pilares, una práctica cloud + automation para industrias reguladas.',
    description:
      'En Cafetatek ayudamos a las empresas a acelerar la adopción AI-driven mediante un framework de entrega propietario y automation-first. Desde migrar la infraestructura de ClickOps a developer self-service, pasando por hardening DevSecOps, AI ChatOps e intelligent process automation, acompañamos tu journey de ingeniería en cada etapa. Nuestros programas de formación estructurada permiten a tus equipos dominar los workflows de TI de nueva generación sin perder tiempo en investigación de mercado ni en tendencias no probadas.'
  },
  pillars: {
    eyebrow: 'Seis pilares de servicio',
    title: 'La práctica Cafetatek, en seis pilares',
    subtitle:
      'Cada pilar es una capacidad de entrega liderada por senior y respaldada por dos a cuatro sub-servicios. La mayoría de los engagements combinan pilares — y todos llegan a producción. Sin slideware, sin hand-offs puramente advisory. Diseñado para scale-ups de EMEA en industrias reguladas que necesitan moverse rápido sin romper compliance.',
    items: [
      {
        title: 'Automatización Inteligente',
        description:
          'Sustituimos los bots rígidos y los workflows por consola por agentes autónomos que deciden en contexto, gestionan sus excepciones y operan sobre datos, documentos y herramientas operacionales — sin necesidad de supervisión 24/7.',
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
          'Lleva nuevas ideas de producto a producción en semanas, no en trimestres — con ingenieros senior, prácticas modernas de delivery y asistentes de IA embebidos en la toolchain. La calidad es no negociable: el trabajo llega a producción. Para productos regulados, añadimos AI Governance e integración MCP Gateway encima, para que cada workflow AI salga audit-ready.',
        bullets: [
          'Quality assurance integrado en el delivery, no añadido al final',
          'Software development as a service — precio por outcome, alcance fijo',
          'AI Governance + MCP Gateway integrado para industrias reguladas'
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
          },
          {
            letter: 'C',
            title: 'AI Governance + MCP Gateway',
            description:
              'Para productos que consumen IA dentro de workflows regulados (banca, fintech, salud): AI workloads con controles policy-enforced, servidores MCP sobre Kong + IBM Context Forge, observabilidad audit-ready sobre tool-calls de agentes. EU AI Act (enforcement 2 Ago 2026), NIST AI RMF, ISO/IEC 42001 readiness integrado en el delivery — no añadido al final.'
          }
        ],
        duration: '4-12 semanas por producto · 6-10 semanas por workstream de AI Governance',
        priceBand: '20-55k EUR por producto · 28-60k EUR por workstream de AI Governance',
        boringTask:
          'Sprint reviews de dos semanas que producen un deck de 50 slides que nadie lee → delivery trunk-based con diffs visibles el mismo día',
        deliverables: [
          'Sprint de descubrimiento + validación de producto en semanas',
          'Delivery moderno: trunk-based, contract tests, IaC por defecto',
          'Delivery AI-assisted embebido en la toolchain DevOps',
          'A producción con quality gates y garantía de 30 días',
          'Sesiones de co-build con tu equipo para que el código se quede contigo',
          'Capa de integración AI Governance con controles auditable y policy-enforced',
          'MCP Gateway (Kong + IBM Context Forge) con routing, observability y policy enforcement sobre tool-calls de agentes'
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
      'Elixa es nuestra plataforma interna de orquestación de migraciones. Nació como una forma de hacer la modernización de SAP menos dolorosa — menos outages, datos más limpios, olas de migración más rápidas. Hoy coordina múltiples migraciones de ERP y cloud en paralelo mientras mantiene el servicio vivo. Construida para scale-ups en industrias reguladas que necesitan una migración que no tumbe la plataforma.',
    primaryCta: 'Solicitar demo de Elixa',
    secondaryCta: 'Leer la documentación',
    whyBuiltTitle: 'Por qué lo construimos',
    whyBuiltBody:
      'Elixa nació de un dolor operacional: los proyectos de modernización de SAP y ERP fallan porque se corren como un único esfuerzo big-bang, sin orquestación entre olas, sin checks de continuidad y sin handoff claro entre fases. Elixa convierte eso en un decision tree carga por carga — elige la estrategia de migración correcta por carga, corre las olas en paralelo, mantiene el servicio vivo y reporta continuidad operacional en tiempo real. El mismo motor produce la proyección de coste que tu equipo de procurement firma, así finance y delivery ven los mismos números desde el día uno.',
    steps: [
      {
        title: 'Capturar el caso de uso',
        description:
          'Los preventas ejecutan el cuestionario de Elixa. La plataforma mapea cada respuesta a un SKU con precio real, una estrategia de migración y un score de continuidad operacional — sobre el cloud y ERP que elijas, en tu región, con tu tier de descuento real.'
      },
      {
        title: 'Orquestar las olas de migración',
        description:
          'Elixa agenda las olas de SAP + cloud + datos en paralelo, con planes de rollback y checks de integridad de datos pre-vuelo para cada ola.'
      },
      {
        title: 'Mantener el servicio vivo',
        description:
          'Los checks de continuidad operacional monitorizan el servicio vivo durante cada ola. El riesgo de outage se surface antes de la ola, no después — crítico para cargas reguladas donde un outage es un evento reportable.'
      },
      {
        title: 'Gobernar la entrega',
        description:
          'Cuando la plataforma está en producción, los guardrails de coste de Elixa mantienen el gasto cloud, las baselines de seguridad y los deliverables de migración alineados con el plan original — sin drift, sin sorpresas.'
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
    title: 'Seis pilares, una práctica de cloud + automation',
    subtitle:
      'Elige un pilar o combina dos. Los seis están anclados en cloud + automation. Todos llegan a producción — sin slideware, sin hand-offs puramente advisory.',
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
      'Elige el modelo que encaje con tu etapa y tu perfil de riesgo. Diseñado para scale-ups en industrias reguladas que necesitan entregar en semanas — sin lockearse en un equipo de 10 ingenieros. Cada engagement entrega alcance publicado, precio fijo y garantía de 30 días.',
    items: [
      {
        title: 'Discovery Sprint',
        description:
          'Diagnóstico de dos semanas que entrega un findings brief audit-ready: arquitectura actual, top tres riesgos, y un plan de remediación priorizado con effort, impact y timeline. La forma más rápida para un scale-up sin equipo TI grande de saber qué arreglar primero.',
        duration: '2 semanas · fee fijo'
      },
      {
        title: 'Foundation Build',
        description:
          'Engagement de 4–8 semanas para aterrizar el primer slice production-grade de tu plataforma, datos, AI governance o workflow de IA — la cuña que prueba el modelo y desbloquea la siguiente inversión. Precio por outcome, alcance fijo, sin hand-offs puramente advisory.',
        duration: '4–8 semanas · alcance fijo'
      },
      {
        title: 'Embedded Pod',
        description:
          'Un pod senior de dos a cuatro ingenieros embebido con tu equipo durante uno o dos trimestres. Somos owners de un KPI medible (DORA metrics, run-rate cost, time-to-first-AI-agent, audit-pass rate) y salimos con un handover plan a tu equipo interno.',
        duration: '1–2 trimestres · retainer mensual'
      },
      {
        title: 'Retainer Care',
        description:
          'Ingeniería senior fraccional continua para scale-ups que no pueden justificar una hire full-time: FinOps care, SRE on-call, AI governance reviews, auditorías trimestrales de salud de plataforma. Cancela con 30 días de aviso.',
        duration: 'Continuo · retainer mensual'
      }
    ]
  },
  methodology: {
    eyebrow: 'Cómo entregamos',
    title: 'Un framework claro — adaptado a tu tamaño, no al playbook.',
    subtitle:
      'Cada engagement corre los mismos cinco pasos — adaptados al tamaño del slice, no al tamaño del deck. El framework es el mismo en un discovery de 2 semanas y en un pod embebido de 6 meses.',
    steps: [
      {
        title: 'Paso 1: Compatibility check',
        description:
          'Una semana. Miramos tu equipo, tu regulador, tu runway y tu stack actual. Te decimos por escrito si Cafetatek encaja — y decimos no si no encaja. Sin motion de ventas, sin factura de discovery.'
      },
      {
        title: 'Paso 2: Discover workspaces',
        description:
          'Mapeamos cada workspace: repos, pipelines, datos, identidad, on-call, compliance. Output: un mapa escrito de lo que está sólido, lo que es frágil y lo que falta — y qué partes podemos estandarizar vs. qué hay que construir.'
      },
      {
        title: 'Paso 3: Rapid design',
        description:
          'Sesiones cortas y estructuradas con tu equipo y tu decision-maker. Usamos técnicas de decisión rápida para convergir en arquitectura, plan de IaC y runbook. Firmas el runbook antes de que escribamos una sola línea de código.'
      },
      {
        title: 'Paso 4: Build',
        description:
          'Trunk-based delivery, contract tests, canary y blue-green, peer review en cada cambio. Ves el diff el mismo día que el ingeniero lo escribe. Quality gates por defecto, no como excepción.'
      },
      {
        title: 'Paso 5: Operate',
        description:
          'Runbooks, dashboards, on-call rotation, garantía de 30 días y un plan de knowledge-transfer. Hacemos hand-over — no te lockeamos. Si no puedes cubrir el on-call, nos quedamos en retainer hasta que puedas.'
      }
    ]
  },
  stats: {
    items: [
      { amount: '12+', title: 'Años de práctica' },
      { amount: '40+', title: 'Entregas B2B shipped' },
      { amount: '200+', title: 'Microservicios en producción' },
      { amount: '350%', title: 'Effectiveness de delivery self-service' },
      { amount: '80%', title: 'Reducción de SLA de soporte' },
      { amount: '25%', title: 'Capacidad de equipo liberada' },
      { amount: '35%', title: 'Reducción de tiempo operacional' },
      { amount: '20%', title: 'Uplift de throughput de artefactos' }
    ]
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que los compradores B2B preguntan antes de firmar',
    subtitle:
      'Las preguntas más habituales de engineering leaders, CTOs y equipos de procurement en industrias reguladas — banca, fintech, salud, aviación y marketing global.',
    items: [
      {
        question: '¿De verdad son agnósticos a la nube?',
        answer:
          'Sí. Hemos entregado cargas en producción sobre AWS, GCP, Azure, OpenShift, Scaleway, OVHcloud y Kubernetes on-prem — para clientes en banca, fintech, salud, aviación y marketing global. No cobramos referral fee de ningún cloud provider. Recomendamos la plataforma que encaje con tu equipo, tus restricciones de data residency y tu envelope de coste — no la que nos incentivan a empujar.'
      },
      {
        question: '¿Cómo encaja Elixa en el motion de preventa?',
        answer:
          'Elixa es nuestra herramienta interna de cost-engineering. Cuando nos pasas un brief, usamos Elixa para generar una proyección de costes a 3 años sobre tu proveedor preferido, en tu región, con tu tier de descuento real. El output es un PDF / CSV listo para que procurement y finance firmen. Después de la entrega, los guardrails de coste de Elixa mantienen el gasto alineado con la cotización original.'
      },
      {
        question: '¿Trabajan en cargas reguladas?',
        answer:
          'Sí. Hemos entregado en entornos PCI, GDPR, DORA y adyacentes a EU AI Act — para clientes en banca (Scotiabank CoE), aviación (operaciones de marketing de British Airways) y marketing global. Producimos runbooks audit-ready, data-flow maps y risk registers; trabajamos con tu DPO y CISO desde el día uno; no recortamos en access control, encryption o logging.'
      },
      {
        question: '¿Con qué tamaño de empresa trabajan?',
        answer:
          'Scale-ups de EMEA y growth-stage en industrias reguladas — típicamente entre 10 y 500 empleados. Estamos en mejor forma con equipos que no pueden justificar una función de plataforma de 10 ingenieros pero necesitan entregar productos regulados y AI-enabled sin frenar. Si hay un engineering leader que owns la decisión y un problema de producto real que resolver, encajamos.'
      },
      {
        question: '¿Pueden ayudarnos con AI Governance y el EU AI Act?',
        answer:
          'Sí — es uno de nuestros workstreams flagship. Construimos una capa de integración AI Governance con controles auditable y policy-enforced, más plumbing MCP Gateway sobre Kong + IBM Context Forge (routing, observability y policy enforcement sobre tool-calls de agentes). El framing está construido alrededor de EU AI Act readiness (enforcement 2 Ago 2026), NIST AI RMF e ISO/IEC 42001. Entregamos un workstream de 6–10 semanas que da a tus auditores evidencia en cada commit — no un deck de slides.'
      },
      {
        question: '¿Cómo se estructura el pricing?',
        answer:
          'Los Discovery Sprints son fee fijo. Los Foundation Builds y Embedded Pods son alcance fijo o retainer mensual, con un SOW publicado y garantía de 30 días. Los costes cloud se muestran por separado vía Elixa, así siempre ves el service fee y el cloud spend como dos line items distintos — clave para scale-ups que necesitan defender el presupuesto ante un board o un CFO.'
      },
      {
        question: '¿Qué pasa después del primer engagement?',
        answer:
          'La mayoría de los clientes pasan a un Retainer Care para cobertura continua de FinOps, SRE y AI governance. Hacemos reviews trimestrales contra el KPI original. Si te nos quedas grande, te entregamos los runbooks, los dashboards y la on-call rotation — sin lock-in. Si aún no necesitas un retainer completo, podemos devolver el trabajo a tu equipo interno después de un Foundation Build y quedarnos on-call con la garantía de 30 días.'
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
      title: 'Doce años de práctica, tres clouds, una boutique — verificada en industrias reguladas.'
    },
    problem: {
      eyebrow: 'El estado actual',
      title: 'Tu crecimiento ahora está esperando a la plataforma.',
      cto: {
        role: 'Lo que ve tu equipo de ingeniería',
        text: 'Cada release tiene que superar cloud, seguridad, costes y gobernanza antes de llegar a los clientes. Es el modelo operativo equivocado para un scale-up: los ingenieros pierden ritmo, las iniciativas de IA se quedan atascadas en revisión y el roadmap se retrasa. Cafetatek construye a la vez la base de delivery y la evidencia de auditoría, y después devuelve una plataforma gobernada a tu equipo.'
      },
      ciso: {
        role: 'Lo que ven tu consejo y tus auditores',
        text: 'Cada release tiene que superar cloud, seguridad, costes y gobernanza antes de llegar a los clientes. Es el modelo operativo equivocado para un scale-up: los compradores enterprise bloquean el contrato, los reguladores abren el expediente y la próxima feature de IA espera otro trimestre. Cafetatek entrega la evidencia con el código, para que compliance sea un subproducto de enviar, no un proyecto que compite con enviar.'
      }
    },
    caseStudies: {
      eyebrow: 'Entrega verificada',
      title: 'Lo que la práctica ha entregado en industrias reguladas.',
      subtitle: 'Cuatro engagements recientes en banca, aviación, enterprise SaaS y marketing global. Los números vienen de los registros de entrega — no son copy de marketing.',
      items: [
        {
          client: 'Globant',
          period: 'Feb 2024 – Jul 2025',
          industry: 'Enterprise SaaS · plataforma de delivery regulada',
          service: 'Package 04 · DevSecOps Hardening',
          title: 'Framework Terraform self-service redujo el tiempo de deploy un 12%',
          outcome: 'Redujo el SLA de soporte en 80%, aumentó la capacidad del equipo en 25%, desplegó módulos Terraform adoptados por múltiples equipos para compliance de seguridad sobre una plataforma de 200+ microservicios.'
        },
        {
          client: 'Scotiabank Technology',
          period: 'Mar 2022 – Ene 2023',
          industry: 'Banca (regulada)',
          service: 'Package 02 · Cloud + Platform Engineering',
          title: 'Cloud y DevOps automation para un banco global',
          outcome: 'Pipelines compartidos de CI/CD, framework automatizado, template de tests Java adoptado globalmente por equipos de QA en LATAM, USA y EMEA en un entorno bancario regulado.'
        },
        {
          client: 'British Airways',
          period: '2022 – 2024',
          industry: 'Aviación · operaciones de marketing global',
          service: 'Package 03 · DevOps Automation',
          title: 'DevOps automation apoyando operaciones de marketing global',
          outcome: 'Diseño y operación de DevOps automation apoyando procesos de marketing y operativos a escala para una de las mayores aerolíneas europeas — pipelines confiables, ciclos de release de campañas más rápidos, registros de entrega audit-ready.'
        },
        {
          client: 'Asylum Marketing',
          period: 'Ene 2023 – Ene 2024',
          industry: 'Marketing global',
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
