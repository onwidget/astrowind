# Elixa SAP integration foundation — design

**Date:** 2026-09-07  
**Status:** approved for implementation (cloud agent — user supplied the memorandum as source copy)  
**Source memo:** Executive memorandum on SAP integration model + competitive advantage (Elixa)

## Goal

Capture the SAP → Data Warehouse integration model as **Elixa’s product starting point**, and surface it on `/product` (EN + ES) without deleting the existing multi-migration orchestration narrative.

## Approaches considered

| Approach | Pros | Cons |
| --- | --- | --- |
| A. Docs only (`ELIXA.md`) | Fast, low risk | Invisible to buyers on `/product` |
| **B. Docs + product page sections (chosen)** | Source of truth + sales-facing C-level arguments | Slightly longer `/product` |
| C. Full Elixa rewrite around SAP extractors | Strongest story pivot | Throws away FinOps / wave orchestration copy already in market |

**Recommendation:** B. The memo is the foundation; orchestration remains the broader product frame.

## Design

1. **`ELIXA.md`** at repo root — product source of truth for the SAP model (pain, adapters by SAP version, ODP/CDC, C-level close). Companion to `PRODUCT.md`.
2. **`PRODUCT.md`** — reference Elixa’s SAP foundation via `ELIXA.md`.
3. **`translations.ts`** — extend `elixa` with bilingual blocks: market pain, three adapters (S/4HANA · ECC · Business One), ODP engine, three C-level arguments. Move hardcoded EN strings off `product.astro`.
4. **`src/pages/product.astro`** — insert the SAP foundation band after “Why we built it”, before “How Elixa works”.
5. **`src/pages/es/product.astro`** — Spanish mirror (was missing).

## Out of scope

- New GSAP / scroll widgets
- Replacing FinOps / cost-projection FAQ answers
- Diagrams or architecture visuals (follow-up)

## Verification

- `npm run check` and `npm run build`
- Visual: `/product` and `/es/product` at 1440 and 390 via Playwright screenshots
