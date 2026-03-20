---
title: "Intermediate Module 4 - Schedule Deep Dive: Schedules C–H"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module4" />

## Overview

Schedules A and B are the core of the ICS. Schedules C through H provide the supporting context, reconciliations, and certifications that make the submission complete and auditable. Each schedule serves a distinct purpose, and missing any one of them is grounds for a DCAA deficiency finding.

## Schedule C: Direct Costs by Contract

Schedule C lists every contract that was active during the fiscal year and shows, for each contract, the direct costs charged: direct labor, direct materials, other direct costs (ODCs), and subcontractor costs. The column totals roll up to the contractor's total direct costs for the year.

**Why it matters**: Schedule C is the bridge between what the contractor billed on each contract and what the allocation bases in Schedule A are built from. The total direct labor column in Schedule C must equal the direct labor figure used as the allocation base in the Overhead pool. If Schedule C direct labor totals $3,200,000 but Schedule A shows an Overhead base of $3,250,000, there is a $50,000 discrepancy that DCAA will flag immediately.

Schedule C must reconcile to:
- The contractor's accounting system (trial balance, job cost reports)
- Contract billing records (what was actually invoiced to each contract)
- Schedule E (the over/underbilling reconciliation)

**Common error**: Including costs from commercial or fixed-price contracts in Schedule C. Only cost-type and T&M contracts subject to FAR 52.216-7 are typically included (though some contractors include all contracts for completeness, clearly distinguishing types).

## Schedule D: Rate Summary

Schedule D is a side-by-side comparison of:

| Column | Description |
|---|---|
| Pool Name | Fringe, Overhead, G&A, etc. |
| Provisional Rate | The billing rate used during the year |
| Final Rate | The rate computed from the ICS (from Schedule A) |
| Variance | Final minus provisional |
| Allocation Base Used | Actual base dollars applied during the year |
| Dollar Variance | Rate variance × base = over or underbilling |

Schedule D translates the rate difference into a dollar amount — the actual billing adjustment owed to or by the government. This schedule is the direct input to Schedule E.

**Example line**: Overhead — Provisional rate 60%, Final rate 64.2%, Variance +4.2 points. Base actually billed: $3,200,000. Dollar variance: 4.2% × $3,200,000 = $134,400 underbilling (contractor is owed more).

## Schedule E: Claimed vs. Billed Reconciliation

Schedule E shows the over/underbilling position **by contract**. For each contract listed in Schedule C, Schedule E computes:

- Costs that should have been billed at the final rate
- Costs actually billed at the provisional rate
- The difference (positive = underbilled, negative = overbilled)

The sum of all contract-level variances on Schedule E must equal the total dollar variance computed on Schedule D. This cross-check is one of the key reconciliation points DCAA uses to confirm internal consistency.

**Practical note**: Contractors on firm-fixed-price contracts have no rate adjustment exposure, so those contracts do not appear on Schedule E (or appear with zero variance).

## Schedule F: Subcontract Data

If the contractor has cost-type subcontracts, Schedule F addresses the subcontractor ICS obligation. For large subcontracts, prime contractors may be required to include the subcontractor's own ICS data or obtain a written representation from the subcontractor that they have filed (or will file) their own ICS with their cognizant government agency.

The rule: **cost is cost**. If a subcontractor's indirect costs flow through to the prime's claimed costs (e.g., on a cost-plus subcontract), those costs must also be subject to the same audit trail. Schedule F documents how that obligation is being met.

Many small contractors have only fixed-price subcontracts or no subcontracts, in which case Schedule F is a brief statement to that effect.

## Schedule G: Organizational Chart

Schedule G is the contractor's organizational chart, showing the management structure, functional departments, and reporting lines as they existed during the fiscal year.

**Why DCAA cares**: The organization chart helps the auditor assess whether the indirect cost pool structure makes logical sense. If a contractor has a "Corporate" pool and an "Overhead" pool, the org chart should show which functions sit in each. If a Vice President of Business Development is charged to Overhead but the org chart puts her in a G&A function, that is inconsistent.

The org chart also helps DCAA verify that the number of indirect employees is plausible relative to the indirect salaries claimed, and that the indirect/direct employee split is consistent with the pool structure.

## Schedule H: Contractor Certification

Schedule H is the signed contractor certification — the statement that the ICS is accurate, complete, and complies with FAR requirements. It must be signed by an authorized official of the company (typically the CFO, Controller, or a Principal).

The certification language required under FAR 42.703-2 reads, in substance:

> "I certify that to the best of my knowledge and belief, this proposal is complete and accurate, and the cost data used to support the claimed rates are in compliance with the contract terms and applicable cost accounting standards and regulations."

**Missing or unsigned Schedule H = automatic deficiency.** DCAA will not begin substantive review of an ICS that lacks a proper certification. This is also the contractor's personal accountability statement — a false certification can expose the signer to liability under the False Claims Act.

The certification must cover the fiscal year being submitted, and the signer must be someone with authority and knowledge of the financial statements.

---

[Next → Flashcards](/intermediate/flashcards/module-4)
