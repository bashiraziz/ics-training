---
title: "Advanced Module 2 Practice: CAS Disclosure Statement Alignment"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module2" stepId="1" title="Step 1: Determine CAS Coverage">
  <p>
    GlobalTech Solutions is a mid-size government contractor. In its most recent completed cost accounting period, GlobalTech received the following contract awards:
  </p>
  <p>
    - Contract A: $1.8M firm-fixed-price (no cost or pricing data submitted)<br/>
    - Contract B: $3.2M cost-plus-fixed-fee (cost or pricing data certified)<br/>
    - Contract C: $47M cost-plus-incentive-fee (cost or pricing data certified)<br/>
    - Contract D: $8M time-and-materials (cost or pricing data certified)
  </p>
  <Question answer="Contract A (FFP without cost or pricing data) is exempt from CAS. Contracts B, C, and D are CAS-covered because they required certified cost or pricing data and exceed the micro-purchase threshold. Total CAS-covered awards: $3.2M + $47M + $8M = $58.2M. Because total CAS-covered awards exceed $50M, GlobalTech is subject to full CAS coverage for the next cost accounting period. Full CAS coverage means all applicable CAS standards apply, and GlobalTech must file and maintain a complete CAS Disclosure Statement (DS-1) for each covered segment.">
    Calculate GlobalTech's total CAS-covered contract awards and determine whether the company is subject to modified or full CAS coverage for the next period. Identify which contract(s) are exempt and why.
  </Question>
  <Question answer="Full CAS coverage requires GlobalTech to comply with all applicable Cost Accounting Standards (not just the four under modified coverage: CAS 401, 402, 405, 406). Additional standards that apply include CAS 403 (home office allocation), CAS 406 (cost accounting period), CAS 410 (G&A expenses), CAS 412 and 413 (pension costs), CAS 414 and 417 (cost of money), CAS 415 (deferred compensation), CAS 416 (insurance), and others. The practical impact: more detailed disclosure requirements, broader audit coverage, and mandatory price adjustment clauses in all CAS-covered contracts.">
    What additional compliance obligations does full CAS coverage impose compared to modified CAS coverage? Name at least three additional CAS standards that now apply.
  </Question>
</Step>

<Step moduleId="module2" stepId="2" title="Step 2: Identify a DS-ICS Inconsistency">
  <p>
    GlobalTech's approved Disclosure Statement (Section 3) states: "G&A expenses are allocated to final cost objectives using a Total Cost Input (TCI) base, which includes all direct costs and all indirect costs except G&A itself."
  </p>
  <p>
    GlobalTech's ICS for the current year shows G&A allocated on a base that excludes subcontract costs over $500,000 on any single contract — a "modified TCI" approach the company implemented when it won a large subcontract-heavy IDIQ. No DS amendment was filed. The subcontract exclusion reduced the G&A base by $12M, raising the G&A rate from 9.1% to 10.8%.
  </p>
  <Question answer="Yes, this is a CAS noncompliance. The DS says TCI (all direct and indirect costs except G&A). The ICS uses a modified TCI that excludes large subcontracts — a material difference not disclosed in the DS. The noncompliance impact is the rate difference (10.8% vs. 9.1%) applied to the costs of all CAS-covered contracts. On a base of, say, $80M TCI, the undisclosed exclusion of $12M means the G&A rate was inflated by approximately 1.7 percentage points. That overcharge — roughly $1.37M on the $80M base — represents a mandatory price adjustment in the government's favor, calculated for each CAS-covered contract affected during the period of noncompliance.">
    Is this a CAS noncompliance? Calculate the approximate impact and explain how the price adjustment would be computed.
  </Question>
  <Question answer="GlobalTech should: (1) Immediately notify the ACO in writing of the undisclosed change, including when the modified base was first used and why. (2) File a DS amendment with the corrected Section 3 description of the G&A allocation base. (3) Compute the cost impact for each year the undisclosed practice was in effect, applying it to each affected CAS-covered contract. (4) Work with the ACO to agree on the price adjustment amounts. Proactive disclosure, though it results in a required price adjustment, is far better than having DCAA discover the noncompliance during audit — which would add a formal finding to the audit record and could trigger broader scrutiny of the contractor's accounting practices.">
    What steps should GlobalTech take to correct this situation, and in what order? What is the consequence of proactively disclosing vs. waiting for DCAA to find it?
  </Question>
</Step>

<Step moduleId="module2" stepId="3" title="Step 3: Plan a DS Amendment">
  <p>
    GlobalTech has decided to restructure its indirect cost pools. Currently it operates one overhead pool and one G&A pool. It wants to move to a two-overhead-pool structure (one for direct labor-intensive programs, one for ODC-intensive programs) to more equitably allocate overhead. This is a voluntary change to improve cost allocation equity. The change will take effect at the start of next fiscal year.
  </p>
  <Question answer="Because this is a voluntary (unilateral) change initiated by the contractor, GlobalTech must notify the ACO in writing in advance of implementation. Under CAS 401, the contractor must describe the change, its effective date, and compute the cost impact on all existing CAS-covered contracts — comparing costs under the old method versus the new method. If the new method increases costs to the government, the government pays more (or the contractor retains more); if it decreases costs, the government is owed a credit. The DS amendment (revised Section 3) must be filed and acknowledged before or immediately upon implementation. The key risk: implementing the change without advance notice triggers a retroactive noncompliance finding rather than an agreed prospective change.">
    What process must GlobalTech follow to implement this change? Is advance notice to the ACO required, and what cost impact analysis must be prepared?
  </Question>
  <Question answer="The DS amendment should describe: (1) the name and purpose of each new overhead pool, (2) what categories of cost are included in each pool, (3) the allocation base for each pool and why it was chosen (e.g., direct labor hours for the labor-intensive pool; total direct costs for the ODC-intensive pool), (4) the method for assigning direct contracts to each pool if a contract has both labor and ODC components, and (5) the effective date. GlobalTech should also update Section 3 to remove the description of the single combined overhead pool. After filing, DCAA will compare ICS filings in subsequent years to confirm the new pools match what was disclosed.">
    What specific content must the DS amendment include to describe the new two-pool overhead structure? List the key elements DCAA will expect to see in the amended Section 3.
  </Question>
</Step>

---

[← Flashcards](/advanced/flashcards/module-2) | [Next Module →](/advanced/training/module-3)
