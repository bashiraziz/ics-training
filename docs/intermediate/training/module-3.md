---
title: "Intermediate Module 3 - Schedule Deep Dive: Schedule B"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module3" />

## What Schedule B Is

Schedule B is the **detail behind Schedule A**. Where Schedule A gives one line per indirect cost pool, Schedule B breaks each pool into its individual cost elements — salaries, benefits, rent, utilities, travel, depreciation, and so on — and shows the amount claimed and the amount disallowed for each element.

The fundamental rule: **the total of all cost elements in Schedule B for a given pool must exactly equal the "Allowable Costs Claimed" figure in Schedule A for that pool.** This reconciliation is the first thing DCAA checks during an adequacy review.

## The Structure of Schedule B

Each pool gets its own section (or its own sub-schedule) within Schedule B. A typical section contains:

| Cost Element | Total Incurred | Unallowable | Allowable Claimed | Reference/Basis |
|---|---|---|---|---|
| Salaries — indirect staff | $450,000 | $0 | $450,000 | Payroll records |
| Payroll taxes | $38,000 | $0 | $38,000 | Payroll records |
| Rent — home office | $120,000 | $0 | $120,000 | Lease agreement |
| Utilities | $18,000 | $0 | $18,000 | Invoices |
| Entertainment | $12,000 | $12,000 | $0 | FAR 31.205-14 |
| Telephone | $9,000 | $0 | $9,000 | Invoices |
| **Pool Total** | **$647,000** | **$12,000** | **$635,000** | → Schedule A |

The "Reference/Basis" column is not always required but is good practice — it tells the auditor where to look for support without a conversation.

## The Three Standard Pool Structures

The FAR does not mandate a specific pool structure, but three configurations are by far the most common in government contracting:

### Pool 1: Fringe Benefits

Fringe Benefits captures the cost of compensating employees beyond their base salary: payroll taxes (FICA, FUTA, SUTA), health insurance, retirement contributions, paid time off accruals, and similar items.

**Typical allocation base**: Total labor dollars — direct labor plus indirect labor. The rationale is that fringe costs benefit all employees equally, so they should be spread across all labor. This is sometimes called the "total labor dollar" base or "total compensable hours" base.

**Why this makes sense**: A $500/month health insurance premium applies equally to a direct charge employee and an overhead employee. Spreading fringe over all labor is a fair and defensible approach.

### Pool 2: Overhead (OH)

Overhead captures the cost of supporting direct charge work that isn't specifically identifiable to a single contract: indirect salaries for project managers, facility costs for the work area, depreciation of project equipment, and similar items.

**Typical allocation base**: Direct labor dollars (sometimes direct labor hours). The rationale is that overhead exists because of direct work performed — so the more direct labor on a contract, the more overhead it should absorb.

**Note**: Some contractors use a modified total direct cost (MTDC) base or a direct labor plus fringe base. Whatever base is used must be consistent with the contractor's disclosed or established accounting practices (FAR 42.703).

### Pool 3: General and Administrative (G&A)

G&A captures the cost of running the business as a whole: executive salaries, finance and accounting staff, legal, HR (not included in fringe), business development, proposal costs, and corporate facility costs.

**Two common G&A bases**:

1. **Total Cost Input (TCI)**: The sum of all direct costs plus all allocated overhead (but not G&A itself). TCI is the most common base and is generally accepted by DCAA as equitable.
2. **Value-Added (VA)**: TCI minus subcontract costs and material costs. Used when the contractor has large subcontract or material pass-throughs that would distort the G&A rate if included in the base.

## A Sample Schedule B Excerpt: Overhead Pool

This excerpt shows the Overhead pool for a small engineering firm:

| Cost Element | Total Incurred | Unallowable | Allowable | FAR Ref |
|---|---|---|---|---|
| Indirect salaries | $820,000 | $0 | $820,000 | |
| Fringe on indirect salaries | $246,000 | $0 | $246,000 | Allocated from Fringe pool |
| Facility rent | $215,000 | $0 | $215,000 | |
| Depreciation — lab equipment | $88,000 | $0 | $88,000 | FAR 31.205-11 |
| Travel — indirect | $41,000 | $5,000 | $36,000 | Per diem excess |
| Entertainment | $22,000 | $22,000 | $0 | FAR 31.205-14 |
| Bid & proposal | $67,000 | $0 | $67,000 | FAR 31.205-18 |
| Lobbying | $15,000 | $15,000 | $0 | FAR 31.205-22 |
| **Pool Total** | **$1,514,000** | **$42,000** | **$1,472,000** | |

This pool total of $1,472,000 flows directly to the Overhead row in Schedule A.

## Consistency Is Critical

DCAA pays close attention to whether Schedule B cost element definitions are consistent with prior years and with the contractor's disclosed accounting practices. If depreciation was in Overhead last year but is in G&A this year without explanation, that is a red flag. If indirect salaries in Schedule B don't match what the payroll system shows for overhead cost centers, that is a reconciliation failure.

**Before submitting**, the contractor should be able to answer: for every dollar in Schedule B, what general ledger account does it come from, and what document supports it?

---

[Next → Flashcards](/intermediate/flashcards/module-3)
