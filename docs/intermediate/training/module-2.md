---
title: "Intermediate Module 2 - Schedule Deep Dive: Schedule A"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module2" />

## What Schedule A Is

Schedule A is the **Summary of Claimed Indirect Costs**. It is the first schedule reviewers — and DCAA auditors — look at when they open an ICS package. Think of it as the income statement of the indirect cost claim: one row per pool, summarizing total costs, deductions for unallowable items, the net claimed amount, the allocation base, and the resulting rate.

Every other schedule in the ICS either feeds into Schedule A (Schedules B, C) or explains items on it. If Schedule A has errors, they cascade everywhere.

## The Structure of Schedule A

Each row in Schedule A represents one indirect cost pool. A typical contractor with three pools would have three rows plus a total or summary row. The columns, left to right, are:

| Column | Description |
|---|---|
| Pool Name | E.g., Fringe Benefits, Overhead, G&A |
| Total Costs in Pool | Everything booked to the pool — allowable and unallowable combined |
| Less: Unallowable Costs | The amount removed per FAR 31 cost principles |
| Allowable Costs Claimed | Total minus unallowables — this is what the contractor is claiming |
| Allocation Base | The total of the base used to spread this pool (e.g., total direct labor dollars) |
| Claimed Rate | Allowable costs divided by the allocation base, expressed as a percentage |

The "Claimed Rate" column is the final indirect cost rate for that pool. This rate, once accepted by DCAA and agreed by the ACO, becomes the **final rate** that applies to all contracts for that fiscal year.

## A Sample Schedule A (Three-Pool Contractor)

Below is a representative Schedule A for a hypothetical contractor, "Falcon Systems," for the fiscal year ending December 31:

| Pool | Total in Pool | Less Unallowable | Allowable Claimed | Allocation Base | Claimed Rate |
|---|---|---|---|---|---|
| Fringe Benefits | $1,250,000 | $8,000 | $1,242,000 | $4,140,000 (total labor) | 30.0% |
| Overhead | $2,100,000 | $47,000 | $2,053,000 | $3,200,000 (direct labor) | 64.2% |
| G&A | $980,000 | $15,000 | $965,000 | $6,890,000 (total cost input) | 14.0% |

In this example:
- Fringe rate = $1,242,000 / $4,140,000 = 30.0%
- Overhead rate = $2,053,000 / $3,200,000 = 64.2%
- G&A rate = $965,000 / $6,890,000 = 14.0%

Each of these rates is also what appears in Schedule D (the rate comparison schedule) as the "final rate."

## How Schedule A Relates to Other Schedules

Schedule A is a summary — its numbers must be supportable by the detail schedules:

- **Schedule B** provides the line-item detail for each pool. The total claimed costs for "Overhead" in Schedule A must equal the sum of all cost elements listed in the Overhead section of Schedule B. If they don't match, DCAA will issue a deficiency.
- **Schedule C** provides the direct costs by contract. The direct labor amounts in Schedule C feed the allocation bases shown in Schedule A.
- **Schedule D** takes the "Claimed Rate" from Schedule A and compares it to the provisional rate billed during the year to compute the variance.

## The Three Most Common Schedule A Errors

**Error 1: Unallowable costs included in pool totals without deducting them.**
Some contractors book entertainment, lobbying, or interest expense to overhead accounts and forget to break it out. The "Total Costs in Pool" column includes these items, but the "Less Unallowable" column is left blank or understated. Result: the claimed rate is inflated. DCAA will find this during the audit and disallow the costs — sometimes with penalties if the costs are "expressly unallowable."

**Error 2: Pool totals that don't reconcile to Schedule B detail.**
This is the most common adequacy finding. The Schedule A total for a pool is $2,100,000, but when you add up all the line items on Schedule B for that pool, you get $2,087,000. The $13,000 gap has no explanation. DCAA will stop the adequacy clock until it is resolved.

**Error 3: Using wrong allocation base totals.**
The allocation base used in Schedule A must match the actual base for the year — not the budgeted base, not last year's base. A contractor who uses budgeted direct labor hours instead of actual direct labor dollars (when their disclosed practice is direct labor dollars) has a consistency problem that can invalidate the entire rate computation.

## Tips for Getting Schedule A Right

- Tie the pool totals to your trial balance before submitting. Each pool total should match a specific general ledger account or group of accounts.
- Run your unallowable cost sub-ledger and confirm the deduction amounts match what is on Schedule B.
- Compute the allocation base from Schedule C actuals, not from your budget or billing system.
- Have someone who did not prepare the schedule verify that Schedule A totals equal Schedule B totals for each pool.

---

[Next → Flashcards](/intermediate/flashcards/module-2)
