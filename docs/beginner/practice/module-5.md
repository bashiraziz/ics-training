---
title: "Beginner Module 5 Practice: Direct vs. Indirect Costs in ICS"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module5" stepId="1" title="Step 1: Classify Costs as Direct or Indirect">
  <p>Orion Federal Services has the following costs for the fiscal year. Classify each as direct or indirect, identify which indirect pool it belongs to (if indirect), and note whether any allowability issues exist.</p>
  <ul>
    <li>Cost A: $85,000 in engineer salaries — all hours were worked exclusively on Contract 7</li>
    <li>Cost B: $22,000 health insurance premiums paid by the company for all employees</li>
    <li>Cost C: $14,500 spent on a client appreciation dinner with agency personnel</li>
    <li>Cost D: $38,000 in CFO salary — the CFO manages overall business operations, not a specific contract</li>
    <li>Cost E: $6,200 in travel costs for an engineer's on-site visit required by Contract 3</li>
  </ul>
  <Question answer="Cost A: Direct cost — engineer salaries tied exclusively to Contract 7. Goes to Schedule C. Cost B: Indirect cost — Fringe Benefits pool. Health insurance benefits all employees and cannot be tied to a single contract. Goes to Schedule B. Cost C: Unallowable — entertainment costs are unallowable under FAR 31.205-14 and must be excluded from all claimed schedules. It may be in the accounting system but cannot appear in the ICS as claimed costs. Cost D: Indirect cost — G&A pool. CFO salary supports overall business operations. Goes to Schedule B. Cost E: Direct cost — travel directly required by Contract 3. Goes to Schedule C under Contract 3.">
    Classify each cost (A through E) as direct, indirect (and which pool), or unallowable. Cite the FAR provision for any unallowable item.
  </Question>
  <Question answer="Under FAR 31.202, if a type of cost is treated as direct on one contract, it must be treated as direct on all contracts where the same circumstances exist. Orion cannot treat travel as a direct cost on Contract 3 but as an overhead cost on Contract 7 if the circumstances are the same (on-site visits required by the contract). Inconsistent treatment is a finding in DCAA audits and undermines the integrity of the cost allocation system.">
    Orion charges travel as a direct cost on Contract 3 but routes similar travel through overhead for Contract 7. What FAR rule does this violate and why does it matter?
  </Question>
</Step>

<Step moduleId="module5" stepId="2" title="Step 2: Build an Indirect Pool">
  <p>You are building Orion's Overhead pool for Schedule B. The accounting system shows the following expenses in overhead accounts:</p>
  <ul>
    <li>Indirect program manager salary: $92,000</li>
    <li>Office lease (shared space): $36,000</li>
    <li>Utilities: $8,400</li>
    <li>Employee recognition awards: $3,100</li>
    <li>Lobbying consultant fees: $11,500</li>
    <li>IT software licenses for contract work: $14,200</li>
  </ul>
  <Question answer="The lobbying consultant fees ($11,500) are unallowable under FAR 31.205-22 (lobbying and political activity costs). These must be removed before the pool is entered on Schedule B. Employee recognition awards ($3,100) require scrutiny under FAR 31.205-13 — awards that meet specific criteria (e.g., length-of-service awards under $400 per employee) are allowable, but cash equivalents or awards exceeding IRS limits may not be. Assuming the recognition awards are allowable, the claimed overhead pool total is $92,000 + $36,000 + $8,400 + $3,100 + $14,200 = $153,700.">
    Identify any unallowable costs in the overhead pool and calculate the total allowable pool costs for Schedule B. Cite the relevant FAR 31.205 subsection for disallowed items.
  </Question>
  <Question answer="The overhead rate is the pool total divided by the direct labor base. If the allowable overhead pool is $153,700 and Orion's direct labor base is $410,000, the final overhead rate is $153,700 ÷ $410,000 = 37.5%. This rate appears on Schedule A. Each contract on Schedule C has its direct labor multiplied by 37.5% to determine the overhead allocated to it.">
    If Orion's direct labor base for the year was $410,000, what is the overhead rate using the allowable pool costs? Explain where this rate appears in the ICS and how it is applied.
  </Question>
</Step>

<Step moduleId="module5" stepId="3" title="Step 3: Spot the Double-Counting Error">
  <p>During ICS preparation, a reviewer notices that Orion's indirect program manager (the $92,000 salary from Step 2) also has 200 hours charged directly to Contract 9 in the accounting system. Those 200 direct hours amount to approximately $8,850 in salary cost at his blended rate.</p>
  <Question answer="This is a double-counting error. The program manager's full $92,000 salary was included in the overhead pool on Schedule B, which means his costs are being allocated to all contracts through the overhead rate. If $8,850 of his time is also charged as a direct cost to Contract 9 on Schedule C, Contract 9 is bearing that cost twice: once through its proportional share of overhead, and once as a direct charge. DCAA calls this 'double billing' and it is a serious finding.">
    Describe the double-counting problem this creates. Which contracts are harmed, and how?
  </Question>
  <Question answer="To fix this, Orion has two options: (1) Remove the $8,850 from the overhead pool on Schedule B (reducing the pool total) and keep the $8,850 as a direct charge to Contract 9 on Schedule C. (2) Remove the direct charge to Contract 9 and keep the full $92,000 in overhead, allocated proportionally. Option 1 is typically correct if the program manager genuinely performed distinct, identifiable work on Contract 9. Orion must choose one treatment and apply it consistently — and the choice must be supported by timesheets.">
    How should Orion correct this double-counting before filing the ICS? What documentation supports the correction?
  </Question>
</Step>

---

[← Flashcards](/beginner/flashcards/module-5) | [Next Module →](/beginner/training/module-6)
