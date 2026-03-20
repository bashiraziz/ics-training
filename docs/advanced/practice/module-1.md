---
title: "Advanced Module 1 Practice: Multi-Segment ICS Filings"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module1" stepId="1" title="Step 1: Identify the Home Office Allocation">
  <p>
    Meridian Defense Group has two segments and a home office. Home office costs for the fiscal year total $4,800,000. The three-factor allocation data is as follows:
  </p>
  <p>
    <strong>Segment A (Systems):</strong> Payroll $9M, Revenue $48M, Assets $3M<br/>
    <strong>Segment B (Logistics):</strong> Payroll $6M, Revenue $27M, Assets $1M
  </p>
  <Question answer="First, compute each factor's total and each segment's share. Payroll: A = $9M/$15M = 60%; B = 40%. Revenue: A = $48M/$75M = 64%; B = 36%. Assets: A = $3M/$4M = 75%; B = 25%. Average of three factors: Segment A = (60% + 64% + 75%) / 3 = 66.3%. Segment B = (40% + 36% + 25%) / 3 = 33.7%. Segment A receives $4,800,000 × 66.3% = $3,182,400. Segment B receives $4,800,000 × 33.7% = $1,617,600. These amounts appear as identifiable line items in each segment's G&A pool on their respective Schedule H.">
    Using the three-factor formula under CAS 403, calculate what portion of home office costs each segment receives. Show your work for each factor and the final composite allocation.
  </Question>
  <Question answer="The home office allocation appears in each segment's G&A indirect cost pool as an identifiable line item on Schedule H of the segment's ICS. It is not buried within overhead or treated as a direct cost. This ensures DCAA can trace the allocation from the home office ICS to each segment's ICS and verify the amounts match the home office's reported allocation.">
    Where in a segment's ICS must the home office allocation appear, and why does DCAA care about its placement?
  </Question>
</Step>

<Step moduleId="module1" stepId="2" title="Step 2: Handle an Inter-Segment Transaction">
  <p>
    During the year, Segment A provided $320,000 in systems engineering labor to Segment B to support a Segment B contract with the Air Force. Segment A's fully burdened labor rate for these employees is $185/hour; the market rate for comparable commercial services is $210/hour. Segment B recorded $320,000 in its direct costs for this work. Segment A included this $320,000 in its revenue for internal management purposes.
  </p>
  <Question answer="Under CAS 414 and FAR 31.205-26, inter-segment transfers must be priced at the transferring segment's cost, not at commercial market price — unless the segment routinely sells the service to unaffiliated customers. Since Segment A is primarily a government contractor and not a commercial seller of these services, the transfer must be priced at Segment A's cost. At $185/hour fully burdened, the allowable transfer cost may differ from the $320,000 recorded. If the $320,000 reflects the cost-based rate, it is correct. If it reflects anything above cost, the excess is unallowable on Segment B's contract.">
    At what price should this inter-segment transfer be recorded in Segment B's direct costs? What rule governs this, and what would happen if the market rate of $210/hour was used instead?
  </Question>
  <Question answer="For multi-segment ICS purposes, the inter-segment transfer must not cause double-counting. Specifically: (1) Segment A should not include the $320,000 as revenue in its allocation base calculations if doing so would absorb home office costs against revenue that is internal. (2) Segment B should not include the $320,000 transfer cost in its G&A allocation base in a way that overlaps with how Segment A already absorbed home office costs on the same dollars. The multi-segment ICS filing should show both sides of the transaction, and the consolidated reconciliation should eliminate the inter-segment flows so total combined costs equal actual costs incurred by the group.">
    What are the two main double-counting risks this inter-segment transaction creates in the multi-segment ICS, and how should they be prevented?
  </Question>
</Step>

<Step moduleId="module1" stepId="3" title="Step 3: Identify the CAS 401 Risk">
  <p>
    After reviewing both segments' ICS submissions, the DCAA auditor notes the following: Segment A allocates G&A on a Total Cost Input (TCI) base, as disclosed in its Disclosure Statement. Segment B allocates G&A on a Value Added base (TCI minus subcontracts and materials), as disclosed in its own Disclosure Statement. During the year, Segment B had $8M in subcontract costs. If Segment B had used TCI, its G&A rate would have been 14.2%. Using Value Added, its G&A rate is 18.7%.
  </p>
  <Question answer="No, this is not automatically a CAS 401 violation. CAS 401 requires each segment to consistently apply its disclosed cost accounting practices — but it does not require all segments of the same contractor to use identical practices. The key is disclosure: each segment's Disclosure Statement must accurately describe that segment's allocation method. Since both segments have separately filed DS forms that disclose their respective bases, and both are applying those bases consistently, the difference is compliant. A violation would arise only if a segment's actual practice differed from what its own DS described.">
    Is the difference in G&A allocation bases between Segment A and Segment B a CAS 401 violation? Explain the rule and why the answer is yes or no.
  </Question>
  <Question answer="The DCAA auditor will verify: (1) that each segment's Disclosure Statement is on file and currently approved, (2) that each segment's ICS allocation base matches exactly what the DS describes (no undisclosed modifications), and (3) that the two segments have not shared cost pools or commingled costs in a way that makes the differing allocation methods inconsistent at the consolidated level. The auditor may also check whether any inter-segment transactions were treated differently under the two methods in a way that favored the contractor (i.e., routing high-margin work through the segment with the higher rate). Proper documentation of the DS for each segment is the contractor's primary defense.">
    What will the DCAA auditor check to verify that the two-segment G&A allocation difference is legitimate and properly disclosed? What documentation should the contractor have ready?
  </Question>
</Step>

---

[← Flashcards](/advanced/flashcards/module-1) | [Next Module →](/advanced/training/module-2)
