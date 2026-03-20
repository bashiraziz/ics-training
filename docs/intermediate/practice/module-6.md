---
title: "Intermediate Module 6 Practice: Unallowable Cost Identification in ICS"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module6" stepId="1" title="Step 1: Identifying Unallowable Costs in Pool Accounts">
  <p>Vantage Defense LLC is preparing its ICS and has asked you to review its Overhead pool accounts. The following transactions were booked to Overhead during the year:</p>
  <ul>
    <li>A: Indirect staff salaries — $680,000</li>
    <li>B: Annual holiday party for all employees — $24,000</li>
    <li>C: Trade show booth rental (to attract government customers) — $18,000</li>
    <li>D: Interest on the company's equipment loan — $11,000</li>
    <li>E: Facility rent for the work area — $145,000</li>
    <li>F: Penalty for OSHA safety violation — $6,500</li>
    <li>G: Recruiting advertising in online job boards — $9,000</li>
    <li>H: Depreciation on engineering workstations — $52,000</li>
  </ul>
  <Question answer="Unallowable items: B — Holiday party $24,000 (FAR 31.205-14, entertainment); D — Interest $11,000 (FAR 31.205-20, interest expense); F — OSHA penalty $6,500 (FAR 31.205-15, fines and penalties). Borderline item: C — Trade show $18,000 may be allowable if it qualifies as allowable advertising under FAR 31.205-1 (specifically 31.205-1(f)(1) for trade show exhibitions), but if it is primarily entertainment/hospitality at the booth, portions may be disallowable. Allowable items: A (indirect salaries), E (facility rent), G (recruiting advertising — specifically allowable under FAR 31.205-1(f)(5)), H (depreciation — allowable under FAR 31.205-11).">
    Identify all clearly unallowable costs and cite the applicable FAR reference for each. Flag any borderline items.
  </Question>
  <Question answer="Total unallowable (clear): $24,000 + $11,000 + $6,500 = $41,500. Allowable Overhead (excluding borderline trade show): $680,000 + $145,000 + $9,000 + $52,000 = $886,000. If the trade show $18,000 is fully allowable: total allowable = $904,000. If it is fully disallowable: total allowable = $886,000. These amounts flow to the 'Allowable Claimed' column in Schedule A's Overhead row. The $41,500 in confirmed unallowables must be deducted on Schedule B with FAR citations.">
    After removing all clearly unallowable costs, compute the allowable Overhead pool amount that will flow to Schedule A.
  </Question>
</Step>

<Step moduleId="module6" stepId="2" title="Step 2: Penalty Exposure Analysis">
  <p>Vantage's prior-year ICS (just reviewed by DCAA) included $24,000 in holiday party costs and $11,000 in interest expense in the Overhead pool — the same cost types as this year. DCAA's audit found these costs in the prior-year ICS and disallowed them. Vantage paid the disallowance but did not receive a penalty assessment. For this year's ICS, Vantage's controller has again included these items in the claimed pool without deduction.</p>
  <Question answer="Holiday party costs (FAR 31.205-14) and interest expense (FAR 31.205-20) are expressly unallowable — the FAR explicitly prohibits them with no ambiguity. Because DCAA disallowed these same cost types in the prior year, Vantage has actual knowledge that they are unallowable. Including them again in this year's ICS is not a mistake — it is a knowing inclusion of expressly unallowable costs. Under FAR 42.709, DCAA will recommend and the ACO will likely assess a penalty equal to two times the unallowable amount: 2 × ($24,000 + $11,000) = $70,000 penalty, plus the disallowance itself.">
    What penalty risk does Vantage face for including these costs in this year's ICS? Explain the FAR 42.709 penalty structure.
  </Question>
  <Question answer="Vantage should immediately implement a system to flag and separately account for unallowable costs at the point of entry. For this year: remove the $35,000 from the claimed pool, list them as unallowable on Schedule B with FAR citations, and add a note that these costs were previously disallowed. Going forward: create dedicated G/L account codes for unallowable costs (e.g., 6210 Entertainment — Unallowable, 6215 Interest — Unallowable) so they never enter the claimed pool. Train accounting staff on FAR 31.205 unallowable cost categories. Conduct an annual pre-submission unallowable cost review.">
    What corrective action should Vantage take before submitting this year's ICS, and what system changes should it make going forward?
  </Question>
</Step>

<Step moduleId="module6" stepId="3" title="Step 3: Segregation System Design">
  <p>Vantage's accounting system has a single "Travel and Entertainment" account (Account 5400) where all travel, meals, and entertainment costs are coded. At year-end, the account has a balance of $88,000. The Controller believes most of it is allowable business travel, but some portion is entertainment.</p>
  <Question answer="DCAA will pull the full transaction detail of Account 5400 and review each transaction. They will look for: (1) Receipts or expense reports that indicate a restaurant or entertainment venue; (2) Descriptions like 'client dinner,' 'team outing,' 'holiday event,' or 'sporting event tickets'; (3) Transactions on weekends or holidays that suggest social rather than business context; (4) Amounts that exceed per diem rates for meals (the excess may be disallowable under FAR 31.205-46). Any transactions identified as entertainment will be disallowed — and if material, may trigger penalty review.">
    How will DCAA audit Account 5400? What will auditors look for when reviewing the transaction detail?
  </Question>
  <Question answer="Best practice: Split Account 5400 into sub-accounts at the chart-of-accounts level: 5400-T (Travel — allowable), 5400-M (Meals — allowable business meals), 5400-E (Entertainment — unallowable, FAR 31.205-14). Require employees to code expense reports to the correct sub-account at submission. For mixed events (e.g., a working lunch that may have an entertainment component), establish a written policy defining which costs go to which code. The unallowable sub-account (5400-E) maps to the 'Less Unallowable' column in Schedule B and is never included in the claimed pool. This eliminates the year-end allocation problem and makes the audit trail clear.">
    Design a better chart-of-accounts structure for this cost category that would allow Vantage to cleanly segregate allowable and unallowable costs going forward.
  </Question>
</Step>

---

[← Flashcards](/intermediate/flashcards/module-6) | [Next Module →](/intermediate/training/module-7)
