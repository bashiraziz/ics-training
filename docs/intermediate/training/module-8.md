---
title: "Intermediate Module 8 - Intermediate Case Study: Meridian Defense Consulting"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module8" />

## Company Background

Meridian Defense Consulting is a 75-person professional services firm providing program management and technical advisory services to the Department of Defense. Meridian has eight cost-reimbursable contracts active during the fiscal year ending December 31. Its indirect cost structure includes three pools: Fringe Benefits, Overhead (OH), and General & Administrative (G&A).

Meridian's Controller, Diane Reyes, is responsible for preparing and filing the ICS.

## Step 1: Setting Provisional Rates at Year Start

At the beginning of the fiscal year, Meridian prepares a forward pricing rate submission and negotiates provisional billing rates with the ACO:

| Pool | Provisional Rate | Base |
|---|---|---|
| Fringe Benefits | 32% | Total labor dollars |
| Overhead | 68% | Direct labor dollars |
| G&A | 13% | Total cost input (TCI) |

These rates are used on all eight contracts throughout the year — every invoice Meridian submits to the government uses these percentages.

## Step 2: Tracking Actuals Through the Year

Meridian's accounting system segregates costs by pool throughout the year. By December 31, the trial balance shows the following pool totals before any ICS adjustments:

| Pool | Booked Total |
|---|---|
| Fringe Benefits | $1,540,000 |
| Overhead | $2,890,000 |
| G&A | $1,120,000 |

Diane also pulls the year-end allocation bases from the job cost system:
- Total labor dollars (Fringe base): $4,620,000
- Direct labor dollars (OH base): $3,580,000
- Total cost input (G&A base): $8,240,000

## Step 3: Identifying Unallowable Costs

During year-end close, Diane runs the annual unallowable cost review. She identifies the following in Meridian's Overhead pool accounts:

| Cost Item | Amount | FAR Reference |
|---|---|---|
| Client entertainment (holiday dinner) | $22,000 | FAR 31.205-14 |
| Trade association lobbying assessment | $15,000 | FAR 31.205-22 |
| Staff recreational outing (company picnic, off-site) | $10,000 | FAR 31.205-14 |
| **Total Unallowable in OH** | **$47,000** | |

These $47,000 in costs had been booked to the overhead expense accounts during the year. They must be removed before the ICS rates are computed.

**Recomputed Overhead pool**: $2,890,000 − $47,000 = **$2,843,000 allowable**.

Entertainment and lobbying are expressly unallowable under FAR 31.205-14 and 31.205-22 respectively. Had Meridian billed these costs, it would have exposed itself to the FAR 42.709 penalty of two times the unallowable amount.

## Step 4: Computing Final Rates

With unallowable costs excluded, Diane computes the final rates:

| Pool | Allowable Costs | Base | Final Rate |
|---|---|---|---|
| Fringe Benefits | $1,540,000 | $4,620,000 | 33.3% |
| Overhead | $2,843,000 | $3,580,000 | 79.4% |
| G&A | $1,120,000 | $8,240,000 | 13.6% |

Note that no unallowable costs were identified in Fringe or G&A this year, so those pool totals are unchanged.

## Step 5: Schedule A and B Completion

Diane prepares Schedule A using the above data. The Overhead row shows:
- Total in pool: $2,890,000
- Less unallowable: $47,000
- Allowable claimed: $2,843,000
- Base: $3,580,000
- Claimed rate: 79.4%

She then prepares Schedule B for the Overhead pool, listing each cost element with amounts and the $47,000 unallowable deduction broken into three line items (entertainment $32,000 total, lobbying $15,000), each with the applicable FAR citation.

Schedule B total ($2,843,000) ties exactly to Schedule A — no reconciliation gap.

## Step 6: Rate Variances and Schedule E

Comparing final rates to provisional rates:

| Pool | Provisional | Final | Variance | Base (cost-type) | Dollar Variance |
|---|---|---|---|---|---|
| Fringe | 32.0% | 33.3% | +1.3% | $3,800,000 | +$49,400 underbilled |
| Overhead | 68.0% | 79.4% | +11.4% | $3,200,000 | +$364,800 underbilled |
| G&A | 13.0% | 13.6% | +0.6% | $7,100,000 | +$42,600 underbilled |
| **Net** | | | | | **+$456,800 underbilled** |

The overhead provisional rate of 68% was significantly below the final rate of 79.4% — largely because actual indirect headcount grew faster than projected. Meridian is owed an additional $456,800 in aggregate across its eight contracts, allocated per Schedule E.

## Step 7: Filing by June 30

Diane packages the complete ICS submission — Schedules A through H — and submits it to the ACO and DCAA on June 28, two days before the deadline. Schedule H is signed by Meridian's CFO.

## Step 8: DCAA Desk Review and Clarification Request

DCAA performs an adequacy review within 45 days and determines the submission is adequate. The auditor then conducts a desk review (no field visit for this submission size).

On day 60, DCAA sends a single written clarification request:

> "Please explain the basis for the Total Cost Input allocation base used for the G&A pool. Specifically, confirm whether the $8,240,000 TCI figure includes or excludes Fringe Benefits costs allocated to direct labor."

This is a common question — the construction of the TCI base is a frequent audit inquiry because some contractors include fringe-on-direct in the base and others do not.

Diane responds within 15 days with a written explanation and a supporting schedule showing the TCI build-up: direct labor + fringe on direct + other direct costs + overhead allocated to direct = $8,240,000. The fringe on direct labor is included, consistent with Meridian's disclosed accounting practices.

DCAA accepts the response. The audit report is issued to the ACO, who schedules a rate negotiation meeting. Final rates are agreed and documented in a Final Rate Agreement approximately 14 months after the ICS was filed.

Meridian submits final invoices on its eight contracts totaling $456,800, which are processed and paid within 60 days of the rate agreement.

---

[Next → Flashcards](/intermediate/flashcards/module-8)
