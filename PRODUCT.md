# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro v6 (static-first SSG), Tailwind CSS v4 (CSS-first config in `src/assets/styles/tailwind.css`), TypeScript 5.9, MDX, Sharp for image optimization. Custom Vite integration in `vendor/integration/` loads `src/config.yaml` as virtual module `astrowind:config`. Deployed via Netlify (`netlify.toml`) and Vercel (`vercel.json`) configs.

## Users

Primary: CTO / VP Engineering / Head of Platform / CISO at regulated EMEA and LATAM scale-ups (1–500 employees) in banking, fintech, healthcare, aviation, global marketing. They already evaluated Big 4 consultancies, freelance SREs, and global system integrators. They want enterprise-grade platform engineering, DevSecOps, AI governance, and intelligent process automation without building a 10-engineer in-house platform team.

Secondary: Founder / CEO at a regulated scale-up who must answer to a board or regulator and needs a senior-led delivery partner rather than staff augmentation.

Adjacent: Procurement and InfoSec buyers at the same scale-ups, evaluating Cafetatek against a shortlist of 2–3 vendors, looking for delivery shape (duration, EUR price band, warranty, deliverables).

## Product Purpose

Cafetatek is a senior-led engineering boutique that ships regulated, AI-enabled products through a proprietary automation-first delivery framework. The practice accelerates AI-driven adoption for regulated scale-ups that need enterprise speed without an enterprise team.

Success = the prospect books a 30-minute discovery call after one session on `/`, `/services`, and one pillar deep-dive. The site must make the framework visible (5 sequential steps: Evaluations → Diseño → Estructuración → Ingeniería → Entrega), the portfolio structured (5 pillars, never a CV-style chronology), and the engagement shape unambiguous (fixed scope, outcome-priced, 30-day warranty, EUR price bands visible).

## Positioning

The mechanism no neighboring product can copy truthfully: a senior-led, automation-first delivery framework (ClickOps → developer self-service migration, DevSecOps hardening, AI ChatOps, intelligent process automation, AI Governance + MCP Gateway, EU AI Act readiness) paired with structured training that leaves the customer's team owning the platform, not the vendor.

Positioning constraints:
- Regulated industries (banking, fintech, healthcare, aviation, global marketing). No SMB retail, no consumer apps, no crypto.
- EMEA and LATAM only — no North America or APAC marketing copy.
- 5 pillars exactly. Never 6. Never CV-style chronology. Never "I worked at Globant" framing.
- Senior-led: every engagement runs with a senior engineer on every call, never staff augmentation.
- Audit-friendly: deliverables are audit-ready evidence (runbooks, policy-as-code, governance artefacts, training programmes).

## Operating Context

- Pricing: outcome-priced, fixed scope, 30-day warranty. EUR-denominated bands disclosed per pillar.
- Engagement shape: 4–12 week slices per pillar; 6–10 weeks for AI Governance workstreams.
- Buyer evaluation window: 10–30 days. Concurrent vendor comparison (Cafetatek vs. 2–3 alternatives).
- Regulatory context: EU AI Act enforcement 2 Aug 2026. NIST AI RMF, ISO/IEC 42001 readiness baked into delivery. Kong + IBM Context Forge referenced as integration targets for MCP Gateway.
- Cultural home: Spain (Castellano-speaking team); English primary on the site, ES mirror required.
- Discovery call path: `/contact` with optional `?pillar=0X` query parameter for attribution.

## Capabilities and Constraints

Confirmed capabilities (the 5 pillars):
1. **Intelligent Automation** — ChatOps & AI-driven workflows · End2End Intelligent automation · AI-augmented automation.
2. **AI-driven Agile Software Development** — Quality Assurance · Software development as a service · AI Governance + MCP Gateway (flagship sub-service, EU AI Act 2 Aug 2026 readiness).
3. **Cloud Transformation** — Cloud Adoption · Cloud application architecture · From ClickOps to Platform Engineering · FinOps (with Elixa, the Cafetatek-owned FinOps product).
4. **Enterprise Training & Upskilling Programs** — AI learning · Security training.
5. **Data Engineering** — SAP Modernization · Data-driven pipelines.

Constraints:
- Astro v6 + Tailwind v4 only; no new framework. Components in `src/components/{common,ui,widgets}/`.
- Bilingual: every EN string has an ES mirror in `src/utils/translations.ts`. Pages mirror under `src/pages/es/`.
- No CV-style content: case studies use real client names (banking, aviation, enterprise SaaS, global marketing) with outcome + metrics, never personal employer chronology.
- No "I worked at" or personal employer mentions. The CEO is the company voice, not an individual CV.

Open / undecided facts:
- Real client logos for case studies (currently anonymized).
- Lighthouse budget on mobile (target > 90, unverified).
- Whether the 5-step framework animation belongs on the home or has its own route.
- Whether pillar deep-dive pages (`/services/01` through `/services/05`) are separate routes or anchors on `/services`.

## Brand Commitments

- Name: **Cafetatek**. Tone: senior-led, audit-friendly, automation-first, confident but never boastful.
- Voice: no fluff, no marketing clichés, no "synergy" / "leverage" / "best-in-class". Specifics always beat abstractions.
- Brand binding copy (English primary): "At Cafetatek, we help companies accelerate AI-driven adoption through a proprietary, automation-first delivery framework. From migrating infrastructure from ClickOps to developer self-service, to DevSecOps hardening, AI ChatOps, and intelligent process automation, we support your engineering journey at every stage. Our structured training programs enable your teams to master next-generation IT workflows without losing time on market research or unproven trends."
- Brand binding copy (Spanish): native ES mirror of the above, never a literal translation.
- Operating company: registered in Spain. Team operates in CET.

## Evidence on Hand

- Real framework: 5 sequential delivery steps in `src/utils/translations.ts` under `methodology.steps` (1. Evaluations · 2. Diseño · 3. Estructuración · 4. Ingeniería · 5. Entrega).
- Real pillars: 5 in `src/utils/translations.ts` under `pillars.items`, with sub-services, deliverables, duration bands, EUR price bands, and "boring task" callouts per pillar.
- Real case studies: 4 anonymized engagements in `dict.homepage.caseStudies.items` (banking, aviation, enterprise SaaS, global marketing) with client name + period + industry + service + title + outcome. Industry and service are real; client names need final approval before public launch.
- Internal numbers (stats): under `dict.stats.items` — disclose as Cafetatek practice metrics, never personal CV metrics.
- Reference products: Elixa (FinOps + multi-migration orchestration, owned by Cafetatek, under pillar 03 sub-service FinOps). **SAP integration foundation** (ODP / OData / CDS / Cortex) is the product starting point — see [`ELIXA.md`](./ELIXA.md).
- Audit frameworks: EU AI Act, NIST AI RMF, ISO/IEC 42001.

Absent (must not be fabricated):
- Public client logos and testimonials.
- Specific revenue, ARR, or headcount claims.
- Named customer contacts.

## Product Principles

1. **Order sells.** When a buyer sees a clear 5-step framework and a structured 5-pillar portfolio, they read the page; when they see a CV, they leave.
2. **Specifics beat claims.** "Replace brittle bots and console-driven workflows with autonomous agents that take decisions in context" outranks "AI-driven automation" every time.
3. **Audit-ready is the trust signal.** Buyers in regulated industries forward the page to InfoSec and procurement; the deliverable list, the warranty, and the framework references (EU AI Act, NIST AI RMF) are what earns the forward.
4. **The flagship is visible.** AI Governance + MCP Gateway is the practice's flagship sub-service; it must own an anchor on `/services`, not be a third card in a row.
5. **Senior-led means visible.** Every pillar engagement ships with a senior engineer on every call. The site proves it through specifics, not by saying "senior-led".

## Accessibility & Inclusion

- WCAG 2.1 AA target for the marketing site (text contrast, keyboard navigation, focus rings, motion-reduce support).
- Bilingual EN / ES with `<html lang>` set per locale route (`src/pages/es/`).
- `prefers-reduced-motion` must disable non-essential scroll-driven animations; the 5-step framework animation and the pillar reveal animations are the highest-risk surfaces for this.
- No content relies on color alone (status indicators, active states, engagement chips use text + color).