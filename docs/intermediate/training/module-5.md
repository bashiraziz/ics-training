---
title: "Intermediate Module 5 - Rate Variances and Adjustments"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module5" />

## The Core Formula

The entire economic purpose of the ICS process is to settle the difference between what was billed during the year (using provisional rates) and what should have been billed (using final rates based on actual costs). This difference is the **rate variance**, and it must be computed for every indirect cost pool.

**Rate Variance Formula (per pool)**:

```
Dollar Variance = (Final Rate − Provisional Rate) × Actual Allocation Base
```

- If the result is **positive**, the contractor **underbilled** — the government owes the contractor more money.
- If the result is **negative**, the contractor **overbilled** — the contractor must credit the government.

This computation is done separately for each pool. The net position across all pools is the contractor's total billing adjustment.

## Worked Example: Three-Pool Contractor

"Atlas Engineering" has three indirect cost pools. Here is the data for the fiscal year:

### Fringe Benefits Pool

| Item | Value |
|---|---|
| Provisional Rate | 28.0% |
| Final Rate (from ICS) | 31.0% |
| Actual Allocation Base (total labor) | $4,000,000 |
| Variance | 31.0% − 28.0% = +3.0% |
| **Dollar Variance** | **+3.0% × $4,000,000 = +$120,000** |

Result: Atlas **underbilled** fringe by $120,000. However — note that fringe applies to both direct and indirect labor. The underbilling on **government cost-type contracts** is only the portion attributable to direct labor on those contracts, not total labor. But for this illustration, we treat the full base as billable for simplicity.

For this example, assume $3,000,000 of the $4,000,000 total labor was direct labor on cost-type contracts. Billable underbilling on fringe = 3.0% × $3,000,000 = **+$90,000**.

### Overhead Pool

| Item | Value |
|---|---|
| Provisional Rate | 68.0% |
| Final Rate (from ICS) | 61.0% |
| Actual Direct Labor Base (cost-type contracts) | $3,000,000 |
| Variance | 61.0% − 68.0% = −7.0% |
| **Dollar Variance** | **−7.0% × $3,000,000 = −$210,000** |

Result: Atlas **overbilled** overhead by $210,000. The contractor must credit the government this amount.

### G&A Pool

| Item | Value |
|---|---|
| Provisional Rate | 13.5% |
| Final Rate (from ICS) | 14.0% |
| Actual Total Cost Input Base (cost-type contracts) | $8,500,000 |
| Variance | 14.0% − 13.5% = +0.5% |
| **Dollar Variance** | **+0.5% × $8,500,000 = +$42,500** |

Result: Atlas **underbilled** G&A by $42,500.

### Net Position

| Pool | Dollar Variance |
|---|---|
| Fringe Benefits | +$90,000 (underbilled) |
| Overhead | −$210,000 (overbilled) |
| G&A | +$42,500 (underbilled) |
| **Net** | **−$77,500 (net overbilling)** |

Atlas overbilled the government by a net of $77,500 across all contracts for this fiscal year. This amount must be credited back.

## A Simpler Three-Pool Illustration (Rounded)

To match the content guidance for this module, here is a cleaner three-pool example:

| Pool | Final Rate | Provisional Rate | Base | Dollar Variance |
|---|---|---|---|---|
| Fringe | 30% | 27% | $400,000 | +$12,000 underbilled |
| Overhead | 65% | 72% | $400,000 | −$28,000 overbilled |
| G&A | 14% | 13% | $400,000 | +$4,000 underbilled |
| **Net** | | | | **−$12,000 net overbilling** |

Net: $12,000 + $4,000 − $28,000 = **−$12,000**. The contractor owes the government $12,000.

## How Adjustments Are Processed

Once final rates are established (either by negotiated rate agreement or ACO unilateral determination), the billing adjustment is processed in one of two ways:

**Option 1 — Invoice submission**: If the contractor underbilled on net, they submit a final invoice to each affected contract for the additional amount owed to them. This invoice is processed through the contract payment system.

**Option 2 — Credit memo**: If the contractor overbilled on net, they issue a credit to the government, typically through a negative invoice or a demand for payment. The ACO coordinates repayment terms; large overbillings may be subject to interest under the Prompt Payment Act or the Contract Disputes Act.

**Contract-by-contract settlement**: The adjustment is allocated to individual contracts based on Schedule E. Each contract gets its own variance calculation so that the right amount is applied to the right contract — critical when contracts span different fiscal years or have different funding ceilings.

## Timing of Adjustments

Rate adjustments are **not** processed at the time the ICS is filed. The sequence is:

1. ICS filed → DCAA adequacy review (30–90 days)
2. DCAA field audit or desk review (months to years)
3. DCAA issues audit report to ACO
4. ACO negotiates final rates with contractor
5. Final rate agreement signed
6. Billing adjustments submitted and processed

For calendar-year contractors who file by June 30, it is common for final rates not to be established until 18–36 months later. During this period, provisional billing continues on ongoing contracts. The overbilling/underbilling position continues to grow until rates are finalized.

This is why maintaining accurate provisional rates throughout the year matters — a large variance discovered years later can be financially disruptive.

---

[Next → Flashcards](/intermediate/flashcards/module-5)
