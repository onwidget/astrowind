---
name: ELIXA
status: source-of-truth-for-elixa-sap-foundation
owner: product team
companion_docs:
  - PRODUCT.md
  - DESIGN.md
  - COPYWRITING_GUIDELINES.md
last_updated: 2026-09-07
---

# Elixa — SAP integration foundation

> **What this is:** the product starting point for Elixa. Every later claim about
> migration orchestration, FinOps, or Cortex on the marketing site must stay
> consistent with this model. User-visible copy lives in
> `src/utils/translations.ts` under `elixa.*`; this file is the brief those
> strings are written from.

## One-line brief

Elixa connects SAP to a modern data warehouse **without custom ABAP extractors**,
using the semantic layers and APIs SAP already ships — then lands business-ready
tables in BigQuery via ODP deltas and Google Cloud Cortex.

## 1. Market pain

Connecting SAP to a Data Warehouse has historically meant months of work
because it depends on the customer’s Basis / ABAP team hand-building custom
extractors. That creates corporate friction, delays projects, and scares IT
directors who fear saturating ERP performance.

## 2. Elixa approach — skip greenfield ABAP

The platform uses the semantic layers and APIs already built into SAP. The
adapter matches the customer’s version:

| SAP version | Adapter |
| --- | --- |
| **S/4HANA** (ideal) | CDS Views, published to the internet as a REST API over **OData** |
| **ECC** (legacy) | Same pattern, pointed at the **classic extractors** the customer already used for SAP BW |
| **Business One** (SMBs) | Native **Service Layer** API — no CDS / classic extractor path |

## 3. Secret engine — ODP + incremental loads (CDC)

For S/4HANA and ECC, OData is not used in the naive full-scan way. Exposure
must go through SAP’s internal **ODP (Operational Data Provisioning)**
framework.

- ODP keeps **bookmarks** inside SAP.
- When Airbyte requests data, SAP does **not** scan the whole database — it
  returns only the **deltas** (invoices, customers, etc. created or changed
  since the last call).
- Result: near-zero extra CPU and network load on the ERP.

## 4. Why this closes C-level deals

1. **Deploy in minutes (playbook)** — No custom code ask. A pre-built script;
   the customer’s team enables ODP in about 30 minutes and hands back a secure
   URL.
2. **No extra SAP licence cost (Digital Access)** — A strictly **read-only**
   technical user over standard APIs, so the customer does not owe SAP
   additional indirect-access licences.
3. **Immediate business language (Cortex)** — Raw OData lands in BigQuery;
   **Google Cloud Cortex Framework** maps opaque German table names
   (`VBAK`, `MARA`, …) into business language for the Elixa web UI.

## 5. Relationship to the rest of Elixa

This SAP foundation is the **origin story**. The product page still presents
Elixa as the multi-migration / FinOps orchestration layer that grew from that
pain. Do not invent a second, conflicting SAP extractor story elsewhere on
the site.

## Copy lock notes

- Keep B2/C1 English and native Spanish mirrors (`COPYWRITING_GUIDELINES.md`).
- Prefer concrete nouns: CDS Views, OData, ODP, Airbyte, BigQuery, Cortex.
- Do not invent Digital Access licence percentages or unnamed customer proof.
