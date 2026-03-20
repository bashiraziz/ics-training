---
title: "Intermediate Module 2 Practice: Schedule A"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module2" stepId="1" title="Step 1: Reading a Schedule A">
  <p>Below is a partial Schedule A for Bridgewater Technical Services for the fiscal year ending December 31. Some values are missing. Review it carefully.</p>

  | Pool | Total in Pool | Less Unallowable | Allowable Claimed | Allocation Base | Claimed Rate |
  |---|---|---|---|---|---|
  | Fringe Benefits | $980,000 | $6,500 | ? | $3,200,000 | ? |
  | Overhead | $1,750,000 | ? | $1,692,000 | $2,800,000 | 60.4% |
  | G&A | $640,000 | $0 | $640,000 | $5,100,000 | ? |

  <Question answer="Fringe allowable claimed = $980,000 − $6,500 = $973,500. Fringe claimed rate = $973,500 ÷ $3,200,000 = 30.4%. Overhead unallowable = $1,750,000 − $1,692,000 = $58,000. G&A claimed rate = $640,000 ÷ $5,100,000 = 12.5%.">
    Calculate the three missing values: Fringe Allowable Claimed, Fringe Claimed Rate, Overhead Less Unallowable, and G&A Claimed Rate.
  </Question>
  <Question answer="The Overhead pool had $58,000 in unallowable costs. This is a material amount relative to the $1,750,000 pool total (about 3.3%). DCAA will want to see Schedule B Overhead section show exactly $58,000 deducted with specific cost items identified and FAR citations provided. If the $58,000 includes any expressly unallowable costs (entertainment, lobbying, interest), the contractor faces penalty exposure if those costs were previously billed at provisional rates.">
    The Overhead pool has unallowable costs. What documentation must the contractor provide in Schedule B to support this deduction?
  </Question>
</Step>

<Step moduleId="module2" stepId="2" title="Step 2: Spotting Schedule A Errors">
  <p>You are reviewing Bridgewater's ICS before it goes to DCAA. You pull the Schedule B totals for each pool:</p>
  <ul>
    <li>Fringe Benefits — Schedule B total allowable: $973,500 ✓</li>
    <li>Overhead — Schedule B total allowable: $1,704,000</li>
    <li>G&A — Schedule B total allowable: $640,000 ✓</li>
  </ul>
  <p>Schedule A shows Overhead allowable claimed at $1,692,000.</p>
  <Question answer="There is a $12,000 discrepancy in the Overhead pool: Schedule B shows $1,704,000 allowable, but Schedule A shows $1,692,000. This is a reconciliation failure — the most common Schedule A adequacy deficiency. Before submitting, the Controller must identify the source of the $12,000 gap: Was a cost element left off Schedule B? Was a late journal entry captured in Schedule A but not B? Was there a data entry error? The discrepancy must be resolved so both schedules show the same number.">
    Identify the problem with the Overhead pool reconciliation and explain what must be done before submission.
  </Question>
  <Question answer="If submitted with this discrepancy, DCAA will issue a deficiency letter identifying the Schedule A-to-B reconciliation failure for the Overhead pool. The six-month clock stops. Bridgewater must correct the schedules, prepare a supporting reconciliation worksheet showing how Schedule B ties to Schedule A, and resubmit. The substantive audit cannot begin until an adequate submission is received.">
    What will happen if this submission reaches DCAA with the reconciliation error?
  </Question>
</Step>

<Step moduleId="module2" stepId="3" title="Step 3: Allocation Base Verification">
  <p>The Schedule A for Bridgewater shows a G&A allocation base of $5,100,000 (Total Cost Input). You are told that Schedule C shows the following direct costs for all cost-type contracts during the year:</p>
  <ul>
    <li>Direct labor: $2,800,000</li>
    <li>Direct materials: $410,000</li>
    <li>Other direct costs: $180,000</li>
    <li>Allocated Overhead (at final rate of 60.4% × $2,800,000): $1,691,200</li>
  </ul>
  <Question answer="TCI = Direct labor + Direct materials + ODCs + Allocated overhead = $2,800,000 + $410,000 + $180,000 + $1,691,200 = $5,081,200. Schedule A shows $5,100,000 — a difference of $18,800. This is a base discrepancy. Before submission, Bridgewater must reconcile this gap. Possible causes: the overhead allocation used a rounded rate, fringe benefits allocated to direct labor were also included in TCI, or certain cost-type contract costs were excluded from Schedule C.">
    Build the Total Cost Input base from Schedule C data. Does it match the $5,100,000 shown in Schedule A? If not, describe the discrepancy.
  </Question>
  <Question answer="Using a wrong allocation base overstates or understates the G&A rate. In this case, if TCI should be $5,081,200 but $5,100,000 was used, the G&A rate is slightly understated (640,000 / 5,100,000 = 12.5% vs. 640,000 / 5,081,200 = 12.6%). While this seems small, DCAA will require the base to be supported by the actual data. Consistency with disclosed accounting practices is mandatory under FAR 42.703, and an unsupported base figure is an adequacy deficiency.">
    Why does it matter if the allocation base in Schedule A doesn't match what you can derive from Schedule C?
  </Question>
</Step>

---

[← Flashcards](/intermediate/flashcards/module-2) | [Next Module →](/intermediate/training/module-3)
