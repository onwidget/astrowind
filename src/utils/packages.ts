// Cafetatek 7-package service portfolio
// Extracted into a separate file because the package catalog is large and would
// bloat the main translations module. Keep this in sync with translations.ts.

import type { Locale } from './translations';

export type PackageId =
  | 'cross-platform-migration'
  | 'cloud-platform'
  | 'finops-elixa'
  | 'devsecops'
  | 'chatops-rpa'
  | 'training'
  | 'cyber-assessment';

export type PackageContent = {
  id: PackageId;
  index: string;
  eyebrow: string;
  title: string;
  problem: string;
  deliverables: string[];
  boringTask: string;
  duration: string;
  priceBand: string;
  isAnchor: boolean;
  subServices: Array<{ letter: string; title: string; description: string }>;
  ctaLabel: string;
};

const EN: Record<PackageId, PackageContent> = {
  'cross-platform-migration': {
    id: 'cross-platform-migration',
    index: '01',
    eyebrow: 'Service 01 · Cross-platform + Migration (anchor)',
    title: 'We build the new platform with you — and pick the right migration path per workload',
    problem:
      'Most cloud migrations fail because they are treated as a single "lift-and-shift" exercise. The reality is each workload deserves its own strategy: lift-and-shift, refactor, re-platform, or hybrid — and the right answer depends on regulatory exposure, runway, and team capacity.',
    deliverables: [
      'Workload-by-workload migration strategy matrix (Excel + Elixa decision-tree)',
      'Cross-platform app delivery (React Native, Flutter, Kotlin Multiplatform)',
      'Legacy ERP modernisation (SAP, Oracle, Microsoft) — runs on Elixa',
      'Co-build sessions with your engineers (pair programming, design reviews)',
      'Operational continuity through migration waves (zero-downtime cutover)'
    ],
    boringTask:
      'Manual "lift everything to AWS" decisions → workload-by-workload strategy matrix on Elixa with operational continuity scoring',
    duration: '6-12 weeks per migration wave',
    priceBand: '22-50k EUR per wave',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Cross-platform app delivery', description: 'React Native, Flutter, Kotlin Multiplatform — one codebase, three platforms' },
      { letter: 'B', title: 'AWS / GCP / Azure migration strategy', description: 'Lift-and-shift, refactor, re-platform, or hybrid — per workload' },
      { letter: 'C', title: 'Legacy ERP modernisation (SAP / Oracle / Microsoft)', description: 'Runs on Elixa — the original SAP operational inspiration' },
      { letter: 'D', title: 'Co-build sessions with your engineers', description: 'Pair programming, design reviews, architecture workshops' },
      { letter: 'E', title: 'Operational continuity through migration waves', description: 'Zero-downtime cutover, live service stays up while waves run' }
    ],
    ctaLabel: 'Discuss your migration'
  },
  'cloud-platform': {
    id: 'cloud-platform',
    index: '02',
    eyebrow: 'Service 02 · Cloud + Automation (anchor)',
    title: 'Click-ops to a governed platform — in one quarter',
    problem:
      'Manual console work is technical debt with interest. We replace it with multi-cloud landing zones, GitOps-driven Kubernetes, and golden paths your developers actually use.',
    deliverables: [
      'Multi-cloud landing zones (AWS, GCP, Azure, sovereign EU providers)',
      'GitOps + Argo CD pipeline with policy-as-code',
      'Internal Developer Platform (Backstage, Crossplane, Argo)',
      'Ephemeral environments for every PR',
      'Standardised Terraform modules consumed by other teams'
    ],
    boringTask:
      'Manual AWS console deployments at Pyramid → Terraform + Atlantis PR workflow (audit trail + rollback by default)',
    duration: '4-12 weeks',
    priceBand: '18-40k EUR',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Multi-cloud Landing Zones', description: 'AWS, GCP, Azure, sovereign EU — your choice, no referral fee' },
      { letter: 'B', title: 'Kubernetes Platforms', description: 'GKE, EKS, AKS, OpenShift — GitOps by default' },
      { letter: 'C', title: 'Internal Developer Platforms', description: 'Backstage, Crossplane, Argo — golden paths that get used' },
      { letter: 'D', title: 'ClickOps → Platform Engineering migration', description: 'From console-driven manual work to self-service' }
    ],
    ctaLabel: 'Discuss your platform'
  },
  'finops-elixa': {
    id: 'finops-elixa',
    index: '03',
    eyebrow: 'Service 03 · FinOps (anchor product: Elixa)',
    title: 'Multi-migration orchestration across all 3 clouds',
    problem:
      'Running multiple SAP and cloud migrations in parallel is operationally nightmarish — outages, data drift, lost context between waves. Elixa coordinates the work and keeps the live service running.',
    deliverables: [
      'Multi-wave migration dashboard with operational continuity scoring',
      'AIOps auto-tuning (Datadog, Dynatrace, Zabbix)',
      'Kubernetes waste elimination',
      'FinOps unit-economics guardrails across all 3 clouds',
      'Monthly ROI report'
    ],
    boringTask:
      'Manual quarterly cloud bill reviews (2 days each) → Elixa continuous tuning + monthly ROI report',
    duration: '4-6 weeks',
    priceBand: '18-30k EUR',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Elixa migration orchestration', description: 'Multi-wave dashboard with operational continuity scoring' },
      { letter: 'B', title: 'AIOps auto-tuning', description: 'Datadog, Dynatrace, Zabbix — predictive scaling' },
      { letter: 'C', title: 'Kubernetes waste elimination', description: 'Idle workloads shut down while you sleep' },
      { letter: 'D', title: 'Unit-economics guardrails', description: 'Across AWS, GCP, Azure — no cloud vendor lock-in' }
    ],
    ctaLabel: 'Request Elixa demo'
  },
  'devsecops': {
    id: 'devsecops',
    index: '04',
    eyebrow: 'Service 04 · DevSecOps',
    title: 'Hardened CI/CD for AI-assisted pipelines',
    problem:
      'AI-generated code ships vulnerabilities faster than you fix them. We audit and harden your pipeline with supply-chain controls and OWASP AI.',
    deliverables: [
      'CI/CD pipeline audit + hardening (GitHub Actions, GitLab CI)',
      'Supply-chain security (SBOM, Sigstore, cosign artifact signing)',
      'OWASP Top 10 + OWASP AI controls',
      'Secret + dependency scanning at every commit',
      'Audit-ready runbooks (PCI, GDPR, EU AI Act)'
    ],
    boringTask:
      'Manual security audits at Asylum Marketing (Active Directory GPO / OU / groups) → automated IaC policy checks at every commit',
    duration: '4-8 weeks',
    priceBand: '15-28k EUR',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Pipeline hardening', description: 'GitHub Actions, GitLab CI — quality gates, signed commits' },
      { letter: 'B', title: 'Supply-chain security', description: 'SBOM, Sigstore, cosign artifact signing' },
      { letter: 'C', title: 'OWASP Top 10 + OWASP AI', description: 'Including prompt-injection mitigation' },
      { letter: 'D', title: 'Audit-ready runbooks', description: 'PCI, GDPR, EU AI Act — evidence by default' }
    ],
    ctaLabel: 'Discuss your pipeline'
  },
  'chatops-rpa': {
    id: 'chatops-rpa',
    index: '05',
    eyebrow: 'Service 05 · ChatOps + Agentic RPA',
    title: 'Zero-touch ChatOps and autonomous RPA migration',
    problem:
      'Your devs context-switch to consoles at 2am and your UiPath bots break on every exception. A Slack-native bot handles deploys, infra health, and L1 incident triage; LLM-driven agents handle RPA exceptions in production.',
    deliverables: [
      'Slack / Teams bot integration',
      'CI/CD natural-language hooks (deploy, roll back, check status)',
      'L1 incident triage playbooks',
      'UiPath / BluePrism estate audit',
      'CrewAI / LangGraph PoC + production migration + ROI report'
    ],
    boringTask:
      'UiPath exception queues at Teleperformance (3 years of manual triage) → autonomous LLM triage agent + Slack-native deploys',
    duration: '4-8 weeks',
    priceBand: '18-32k EUR',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Slack / Teams bot integration', description: 'Natural-language interface to your CI/CD' },
      { letter: 'B', title: 'CI/CD natural-language hooks', description: 'Deploy, roll back, check status — from chat' },
      { letter: 'C', title: 'L1 incident triage playbooks', description: 'Bot handles the first 5 minutes of every incident' },
      { letter: 'D', title: 'UiPath / BluePrism estate audit', description: 'Migration plan to LLM-driven agents' },
      { letter: 'E', title: 'CrewAI / LangGraph PoC + production rollout', description: 'From proof of concept to production in 8 weeks' }
    ],
    ctaLabel: 'Discuss ChatOps + RPA'
  },
  training: {
    id: 'training',
    index: '06',
    eyebrow: 'Service 06 · Training programs',
    title: 'Hands-on training that turns your engineers into owners of the platform',
    problem:
      'New platform, new pipelines, new AI governance rules — your team can read the docs, but they need to ship the change. Cafetatek training programs are run by senior engineers who have actually built the thing they are teaching.',
    deliverables: [
      'Platform / Cloud / Kubernetes hands-on workshops (3-5 day bootcamps)',
      'DevSecOps / OWASP / AI Governance training for engineering teams',
      'Executive briefings for CTOs and CISOs (AI governance, cloud cost, platform risk)',
      'Train-the-trainer program so your team can run the next cohort internally',
      'Hands-on labs in your own environment (no toy data)'
    ],
    boringTask:
      'Reading through 200 pages of platform documentation on your own → 3-day hands-on bootcamp with a senior engineer who built the platform',
    duration: '1-5 days per workshop · 4-12 weeks per program',
    priceBand: '4-12k EUR per workshop · 18-45k EUR per program',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Platform / Cloud / Kubernetes workshops', description: 'Hands-on bootcamps for engineering teams (3-5 days)' },
      { letter: 'B', title: 'DevSecOps / OWASP / AI Governance training', description: 'For engineering teams shipping AI-assisted code' },
      { letter: 'C', title: 'Executive briefings for CTOs and CISOs', description: 'AI governance, cloud cost, platform risk — half-day format' },
      { letter: 'D', title: 'Train-the-trainer program', description: 'Your team runs the next cohort internally' },
      { letter: 'E', title: 'Hands-on labs in your own environment', description: 'No toy data — real repos, real pipelines, real incidents' }
    ],
    ctaLabel: 'Discuss your training needs'
  },
  'cyber-assessment': {
    id: 'cyber-assessment',
    index: '07',
    eyebrow: 'Service 07 · Cybersecurity assessments',
    title: 'Audit-ready assessments for cloud, AI, and compliance — without the slideware',
    problem:
      'Cloud, AI, and compliance risks move faster than your internal team can keep up. Cafetatek assessments produce audit-ready findings briefs: top three risks, prioritised remediation plan, and the evidence to show your buyers, regulators, and CISO that the work has been done.',
    deliverables: [
      'Cloud security posture assessment (AWS / GCP / Azure, sovereign EU providers)',
      'AI / LLM security assessment (OWASP AI, prompt-injection, model exfiltration)',
      'Compliance readiness (EU AI Act, GDPR, PCI, ISO 42001) with audit-ready runbooks',
      'Penetration testing of the IDP, ChatOps, and agent platforms we deliver',
      'Remediation tracked in your issue tracker with a 30-day re-test'
    ],
    boringTask:
      'Internal security reviews that take 2 weeks to produce a 50-page slide deck no one reads → audit-ready findings brief in 1 week with prioritised remediation plan',
    duration: '1-3 weeks per assessment',
    priceBand: '8-22k EUR per assessment',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Cloud security posture assessment', description: 'AWS, GCP, Azure, sovereign EU providers — CIS benchmarks' },
      { letter: 'B', title: 'AI / LLM security assessment', description: 'OWASP AI, prompt-injection, model exfiltration' },
      { letter: 'C', title: 'Compliance readiness', description: 'EU AI Act, GDPR, PCI, ISO 42001 — audit-ready runbooks' },
      { letter: 'D', title: 'Penetration testing', description: 'IDP, ChatOps, agent platforms we deliver' },
      { letter: 'E', title: 'Remediation tracked + 30-day re-test', description: 'Tracked in your issue tracker with re-test included' }
    ],
    ctaLabel: 'Request an assessment'
  }
};

const ES: Record<PackageId, PackageContent> = {
  'cross-platform-migration': {
    id: 'cross-platform-migration',
    index: '01',
    eyebrow: 'Servicio 01 · Cross-platform + Migración (anchor)',
    title: 'Construimos contigo — y elegimos la ruta de migración correcta por carga de trabajo',
    problem:
      'La mayoría de las migraciones cloud fallan porque se tratan como un único ejercicio de "lift-and-shift". La realidad es que cada carga merece su propia estrategia: lift-and-shift, refactor, re-platform o híbrida — y la respuesta correcta depende de exposición regulatoria, runway y capacidad del equipo.',
    deliverables: [
      'Matriz de estrategia de migración carga por carga (Excel + Elixa decision-tree)',
      'Cross-platform app delivery (React Native, Flutter, Kotlin Multiplatform)',
      'Modernización de ERP legacy (SAP, Oracle, Microsoft) — corre sobre Elixa',
      'Sesiones de co-build con tu equipo (pair programming, design reviews)',
      'Continuidad operacional durante las olas de migración (cutover sin downtime)'
    ],
    boringTask:
      'Decisiones manuales de "migrar todo a AWS" → matriz de estrategia carga por carga sobre Elixa con scoring de continuidad operacional',
    duration: '6-12 semanas por ola de migración',
    priceBand: '22-50k EUR por ola',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Cross-platform app delivery', description: 'React Native, Flutter, Kotlin Multiplatform — un codebase, tres plataformas' },
      { letter: 'B', title: 'Estrategia de migración AWS / GCP / Azure', description: 'Lift-and-shift, refactor, re-platform o híbrida — por carga' },
      { letter: 'C', title: 'Modernización de ERP legacy (SAP / Oracle / Microsoft)', description: 'Corre sobre Elixa — la inspiración original operacional' },
      { letter: 'D', title: 'Co-build con tu equipo', description: 'Pair programming, design reviews, architecture workshops' },
      { letter: 'E', title: 'Continuidad operacional durante las olas', description: 'Zero-downtime cutover, el servicio se mantiene arriba mientras corren las olas' }
    ],
    ctaLabel: 'Conversar sobre tu migración'
  },
  'cloud-platform': {
    id: 'cloud-platform',
    index: '02',
    eyebrow: 'Servicio 02 · Cloud + Automation (anchor)',
    title: 'De click-ops a una plataforma gobernada — en un trimestre',
    problem:
      'El trabajo manual de consola es deuda técnica con intereses. Lo reemplazamos con landing zones multi-cloud, Kubernetes con GitOps, y golden paths que tu equipo realmente usa.',
    deliverables: [
      'Multi-cloud landing zones (AWS, GCP, Azure, nubes soberanas UE)',
      'Pipeline GitOps + Argo CD con policy-as-code',
      'Internal Developer Platform (Backstage, Crossplane, Argo)',
      'Entornos efímeros para cada PR',
      'Módulos de Terraform estandarizados consumidos por otros equipos'
    ],
    boringTask:
      'Despliegues manuales por consola AWS en Pyramid → Terraform + Atlantis PR workflow (audit trail + rollback por defecto)',
    duration: '4-12 semanas',
    priceBand: '18-40k EUR',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Multi-cloud Landing Zones', description: 'AWS, GCP, Azure, soberanas UE — tu eliges, sin referral fee' },
      { letter: 'B', title: 'Kubernetes Platforms', description: 'GKE, EKS, AKS, OpenShift — GitOps por defecto' },
      { letter: 'C', title: 'Internal Developer Platforms', description: 'Backstage, Crossplane, Argo — golden paths que se usan' },
      { letter: 'D', title: 'ClickOps → Platform Engineering', description: 'De trabajo manual por consola a self-service' }
    ],
    ctaLabel: 'Conversar sobre tu plataforma'
  },
  'finops-elixa': {
    id: 'finops-elixa',
    index: '03',
    eyebrow: 'Servicio 03 · FinOps (producto anchor: Elixa)',
    title: 'Orquestación de migraciones múltiples en los 3 clouds',
    problem:
      'Correr múltiples migraciones de SAP y cloud en paralelo es operacionalmente pesadilla — outages, data drift, contexto perdido entre olas. Elixa coordina el trabajo y mantiene el servicio vivo.',
    deliverables: [
      'Dashboard multi-ola de migración con scoring de continuidad operacional',
      'AIOps auto-tuning (Datadog, Dynatrace, Zabbix)',
      'Eliminación de desperdicio en Kubernetes',
      'Guardrails de unit-economics FinOps en los 3 clouds',
      'Reporte mensual de ROI'
    ],
    boringTask:
      'Revisiones trimestrales manuales de la factura cloud (2 días cada una) → Elixa continuous tuning + reporte mensual de ROI',
    duration: '4-6 semanas',
    priceBand: '18-30k EUR',
    isAnchor: true,
    subServices: [
      { letter: 'A', title: 'Elixa migration orchestration', description: 'Multi-wave dashboard con scoring de continuidad operacional' },
      { letter: 'B', title: 'AIOps auto-tuning', description: 'Datadog, Dynatrace, Zabbix — predictive scaling' },
      { letter: 'C', title: 'Eliminación de desperdicio en Kubernetes', description: 'Cargas idle se apagan mientras duermes' },
      { letter: 'D', title: 'Guardrails de unit-economics', description: 'En AWS, GCP, Azure — sin lock-in de vendor' }
    ],
    ctaLabel: 'Solicitar demo de Elixa'
  },
  'devsecops': {
    id: 'devsecops',
    index: '04',
    eyebrow: 'Servicio 04 · DevSecOps',
    title: 'CI/CD endurecido para pipelines asistidos por IA',
    problem:
      'El código generado por IA se envía con vulnerabilidades más rápido de lo que las corriges. Auditamos y endurecemos tu pipeline con controles de supply-chain y OWASP AI.',
    deliverables: [
      'Auditoría + hardening de pipeline CI/CD (GitHub Actions, GitLab CI)',
      'Supply-chain security (SBOM, Sigstore, cosign artifact signing)',
      'OWASP Top 10 + controles OWASP AI',
      'Secret + dependency scanning en cada commit',
      'Runbooks audit-ready (PCI, GDPR, EU AI Act)'
    ],
    boringTask:
      'Auditorías manuales de seguridad en Asylum Marketing (Active Directory GPO / OU / groups) → automated IaC policy checks en cada commit',
    duration: '4-8 semanas',
    priceBand: '15-28k EUR',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Pipeline hardening', description: 'GitHub Actions, GitLab CI — quality gates, signed commits' },
      { letter: 'B', title: 'Supply-chain security', description: 'SBOM, Sigstore, cosign artifact signing' },
      { letter: 'C', title: 'OWASP Top 10 + OWASP AI', description: 'Incluye mitigación de prompt-injection' },
      { letter: 'D', title: 'Runbooks audit-ready', description: 'PCI, GDPR, EU AI Act — evidence por defecto' }
    ],
    ctaLabel: 'Conversar sobre tu pipeline'
  },
  'chatops-rpa': {
    id: 'chatops-rpa',
    index: '05',
    eyebrow: 'Servicio 05 · ChatOps + Agentic RPA',
    title: 'ChatOps zero-touch y migración autónoma de RPA',
    problem:
      'Tus devs cambian de contexto a consolas a las 2am y tus bots de UiPath rompen ante cualquier excepción. Un bot nativo de Slack maneja deploys, salud de infra y triaje L1; agentes LLM manejan excepciones de RPA en producción.',
    deliverables: [
      'Integración de bot Slack / Teams',
      'Hooks de CI/CD en lenguaje natural (deploy, rollback, status)',
      'Playbooks de triaje de incidentes L1',
      'Auditoría del estate UiPath / BluePrism',
      'PoC CrewAI / LangGraph + migración a producción + reporte de ROI'
    ],
    boringTask:
      'Colas de excepción de UiPath en Teleperformance (3 años de triaje manual) → agente autónomo de triaje LLM + deploys nativos de Slack',
    duration: '4-8 semanas',
    priceBand: '18-32k EUR',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Integración de bot Slack / Teams', description: 'Interfaz en lenguaje natural a tu CI/CD' },
      { letter: 'B', title: 'Hooks de CI/CD en lenguaje natural', description: 'Deploy, rollback, status — desde el chat' },
      { letter: 'C', title: 'Playbooks de triaje L1', description: 'El bot maneja los primeros 5 minutos de cada incidente' },
      { letter: 'D', title: 'Auditoría UiPath / BluePrism', description: 'Plan de migración a agentes LLM' },
      { letter: 'E', title: 'PoC CrewAI / LangGraph + producción', description: 'De proof of concept a producción en 8 semanas' }
    ],
    ctaLabel: 'Conversar sobre ChatOps + RPA'
  },
  training: {
    id: 'training',
    index: '06',
    eyebrow: 'Servicio 06 · Programas de formación',
    title: 'Formación hands-on que convierte a tu equipo en dueño de la plataforma',
    problem:
      'Plataforma nueva, pipelines nuevos, reglas nuevas de gobierno de IA — tu equipo puede leer la docs, pero necesita entregar el cambio. Los programas de formación de Cafetatek los imparten ingenieros senior que realmente construyeron lo que están enseñando.',
    deliverables: [
      'Workshops hands-on de Platform / Cloud / Kubernetes (bootcamps de 3-5 días)',
      'Formación DevSecOps / OWASP / Gobierno de IA para equipos de ingeniería',
      'Briefings ejecutivos para CTOs y CISOs (gobierno de IA, coste cloud, riesgo de plataforma)',
      'Programa train-the-trainer para que tu equipo corra la siguiente cohorte internamente',
      'Labs hands-on en tu propio entorno (sin datos de juguete)'
    ],
    boringTask:
      'Leer 200 páginas de documentación de plataforma por tu cuenta → bootcamp hands-on de 3 días con un ingeniero senior que construyó la plataforma',
    duration: '1-5 días por workshop · 4-12 semanas por programa',
    priceBand: '4-12k EUR por workshop · 18-45k EUR por programa',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Workshops Platform / Cloud / Kubernetes', description: 'Bootcamps hands-on para equipos de ingeniería (3-5 días)' },
      { letter: 'B', title: 'Formación DevSecOps / OWASP / Gobierno de IA', description: 'Para equipos que entregan código asistido por IA' },
      { letter: 'C', title: 'Briefings ejecutivos para CTOs y CISOs', description: 'Gobierno de IA, coste cloud, riesgo de plataforma — formato half-day' },
      { letter: 'D', title: 'Train-the-trainer', description: 'Tu equipo corre la siguiente cohorte internamente' },
      { letter: 'E', title: 'Labs hands-on en tu propio entorno', description: 'Sin datos de juguete — repos reales, pipelines reales, incidentes reales' }
    ],
    ctaLabel: 'Conversar sobre tu formación'
  },
  'cyber-assessment': {
    id: 'cyber-assessment',
    index: '07',
    eyebrow: 'Servicio 07 · Assessments de ciberseguridad',
    title: 'Assessments audit-ready para cloud, IA y compliance — sin slideware',
    problem:
      'Los riesgos en cloud, IA y compliance se mueven más rápido de lo que tu equipo interno puede seguir. Los assessments de Cafetatek producen findings briefs audit-ready: top tres riesgos, plan de remediación priorizado, y la evidencia para mostrar a tus buyers, reguladores y CISO que el trabajo se ha hecho.',
    deliverables: [
      'Cloud security posture assessment (AWS / GCP / Azure, nubes soberanas UE)',
      'AI / LLM security assessment (OWASP AI, prompt-injection, model exfiltration)',
      'Compliance readiness (EU AI Act, GDPR, PCI, ISO 42001) con runbooks audit-ready',
      'Penetration testing del IDP, ChatOps y plataformas de agentes que entregamos',
      'Remediación trackeada en tu issue tracker con re-test a 30 días'
    ],
    boringTask:
      'Reviews internos de seguridad que tardan 2 semanas en producir un slide deck de 50 páginas que nadie lee → findings brief audit-ready en 1 semana con plan de remediación priorizado',
    duration: '1-3 semanas por assessment',
    priceBand: '8-22k EUR por assessment',
    isAnchor: false,
    subServices: [
      { letter: 'A', title: 'Cloud security posture assessment', description: 'AWS, GCP, Azure, nubes soberanas UE — benchmarks CIS' },
      { letter: 'B', title: 'AI / LLM security assessment', description: 'OWASP AI, prompt-injection, model exfiltration' },
      { letter: 'C', title: 'Compliance readiness', description: 'EU AI Act, GDPR, PCI, ISO 42001 — runbooks audit-ready' },
      { letter: 'D', title: 'Penetration testing', description: 'IDP, ChatOps, plataformas de agentes que entregamos' },
      { letter: 'E', title: 'Remediación trackeada + re-test a 30 días', description: 'Tracked en tu issue tracker con re-test incluido' }
    ],
    ctaLabel: 'Solicitar un assessment'
  }
};

const dictionaries: Record<Locale, Record<PackageId, PackageContent>> = { en: EN, es: ES };

export const getPackages = (locale: Locale): PackageContent[] => {
  return Object.values(dictionaries[locale] ?? EN);
};

export const getPackage = (locale: Locale, id: PackageId): PackageContent => {
  return (dictionaries[locale] ?? EN)[id];
};
