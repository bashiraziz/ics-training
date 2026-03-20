---
title: "Advanced Module 8 Practice: Advanced Case Study"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module8" stepId="1" title="Step 1: Analyze the Apex Home Office Allocation">
  <p>
    Recall from the Apex Federal Systems case study: Apex has two divisions and a home office. Home office costs are $6.2M. The three-factor data produces a 62%/38% split (Division 1 / Division 2).
  </p>
  <p>
    Now consider a variation: at year-end, Apex's CFO discovers that the assets figure used for Division 2 ($1.2M) understated the division's assets by $800,000 — the correct figure is $2.0M. The payroll and revenue factors are unchanged.
  </p>
  <Question answer="Recalculate with corrected assets: Division 1 Assets = $2.8M; Division 2 Assets = $2.0M; Total = $4.8M. Asset factor: Division 1 = $2.8M/$4.8M = 58.3%; Division 2 = $2.0M/$4.8M = 41.7%. Recompute composite (all three factors equal weight): Payroll: D1 = 60%, D2 = 40%. Revenue: D1 = 64%, D2 = 36%. Assets: D1 = 58.3%, D2 = 41.7%. Composite: D1 = (60 + 64 + 58.3)/3 = 60.8%; D2 = (40 + 36 + 41.7)/3 = 39.2%. Home office allocation: D1 = $6.2M × 60.8% = $3,769,600; D2 = $6.2M × 39.2% = $2,430,400. The original allocation gave Division 2 only $2,362,800. The corrected allocation gives Division 2 $2,430,400 — a difference of $67,600 that must be reflected in Division 2's G&A pool and Schedule H.">
    Recalculate the three-factor home office allocation with the corrected Division 2 asset figure. How much does each division's share change, and what must be updated in each division's ICS?
  </Question>
  <Question answer="The CFO should correct the ICS before submission. If DCAA discovers an asset understatement that caused Division 2 to receive less home office allocation than it should have, DCAA would note it as an ICS error that may affect both divisions' final rates. Division 1 received too much home office allocation (reducing its G&A rate slightly); Division 2 received too little (inflating its apparent G&A rate). If Division 2's contracts are primarily cost-type, the underpayment of home office costs to Division 2 means the government was underbilled for those costs — a possible contractor claim for the difference. Correcting before submission is far cleaner than an amended ICS after the fact. The correction also needs to reconcile to the consolidated total — the same $6.2M of home office costs, just differently distributed.">
    If the error is discovered after the ICS has already been submitted but before DCAA has completed adequacy review, what should Apex do and why? What is the financial impact on each division's contracts if the error is not corrected?
  </Question>
</Step>

<Step moduleId="module8" stepId="2" title="Step 2: Reconstruct the Audit Strategy">
  <p>
    Returning to the original Apex scenario: DCAA questioned $340,000 total. Apex's management must decide — before submitting its management response — how to allocate its resources across the three findings.
  </p>
  <Question answer="Finding 1 (Entertainment — $82,000): Partially concede. The $48,000 in government-client entertainment is clearly unallowable; defending it wastes credibility. For the $13,000 in employee events, gather all available documentation (attendance records, meeting agendas, business purpose statements) and defend what can be supported. For the $21,000 scaled amount, push back with a targeted document production — providing records for every untested transaction to rebut the scaling. Estimated defensible: $25,000-$30,000 of the $82,000. Finding 2 (Compensation — $193,000): Most defensible. The issue is benchmark selection, not the principle. Get the right surveys (WTW, McLagan), confirm the right peer group, document the CEO's unique qualifications. This is where to invest the most analytical resources. Realistic recovery: $100,000-$140,000 of the $193,000. Finding 3 (CAS Noncompliance — $65,000): Do not fight it. The change happened, no amendment was filed, the fact pattern is clear. Accept promptly, file the DS amendment, implement corrective action, and use the goodwill generated to strengthen credibility on the other findings. Resources needed: minimal (concession letter and corrective action plan).">
    Develop the resource allocation strategy for Apex's management response. Which finding deserves the most analytical effort, which should be conceded immediately, and which falls in between? Estimate the realistic recovery for each.
  </Question>
  <Question answer="The compensation rebuttal should: (1) Challenge DCAA's benchmark source — Radford's general industry survey includes manufacturing, retail, and other non-government industries. A government IT contractor CEO operates in a specialized market with clearance requirements, regulatory complexity, and a narrow client base. The WTW government IT contractor peer group is more appropriate. (2) Challenge DCAA's peer group size — if Radford used companies up to $1B in revenue, the benchmark is diluted by much larger companies paying less because of scale. Narrow to $50M-$150M revenue. (3) Document CEO-specific factors: TS/SCI clearance (rare and valuable), 22 years in government IT (not easily replaced), $30M in new contracts attributable to CEO relationships (quantifiable business development value). (4) Provide the WTW and McLagan surveys with the specific benchmark tables highlighted. (5) State Apex's proposed position: compensation is reasonable up to $820,000 (75th percentile in the more appropriate survey); only $55,000 above that figure should be at issue. This is a structured, evidence-based rebuttal — not just a denial.">
    Draft the outline of Apex's management response argument for the executive compensation finding. What specific evidence must be assembled, and what is the precise regulatory argument under FAR 31.205-6(p)?
  </Question>
</Step>

<Step moduleId="module8" stepId="3" title="Step 3: Calculate the Full Financial Resolution">
  <p>
    The negotiation concluded with the following: Finding 1 disallowance = $61,000. Finding 2 disallowance = $80,000. Finding 3 disallowance = $65,000. Total disallowed: $206,000. All disallowed costs were in Division 1's G&A pool (Findings 1 and 2) and Division 2's G&A pool (Finding 3). The disallowed costs affect Division 1's G&A rate as follows: Division 1 had a $9.8M G&A pool and a $72M TCI base, producing a 13.6% G&A rate. The $141,000 in Division 1 disallowances reduce the pool to $9.659M, a revised rate of 13.4%.
  </p>
  <Question answer="Division 1 G&A rate recalculation: Original rate = $9,800,000 / $72,000,000 = 13.61%. Revised rate = $9,659,000 / $72,000,000 = 13.42%. Rate reduction = 0.19 percentage points. Division 1 billing impact: On cost-type contracts that billed at 13.61% G&A, the correct rate was 13.42%. The overbilling per $1M of TCI base on those contracts = 0.0019 × $1,000,000 = $1,900. On $47M in cost-type TCI, overbilling = 0.0019 × $47,000,000 = $89,300. This matches the $89,000 figure cited in the case study (rounding differences). Apex must repay $89,000 in overbillings plus CDA interest. For Division 2, the $65,000 CAS noncompliance is handled separately under the CAS price adjustment clause — not through a G&A rate recalculation but through a direct contract-by-contract price adjustment.">
    Verify the $89,000 overbilling figure by recalculating Division 1's final G&A rate with the disallowances removed and applying the rate change to Division 1's cost-type contract base. Show all steps.
  </Question>
  <Question answer="The five key lessons: (1) Concede the indefensible early. The $48,000 entertainment concession was strategically correct — it preserved credibility on the larger findings. Trying to defend clearly unallowable entertainment would have hardened DCAA's and the ACO's positions across the board. (2) Fight on the right terrain. The compensation dispute was won on benchmark selection, not on the principle of compensation limits. Knowing which element of a finding is contestable — and focusing there — is more effective than a broad denial. (3) CAS proactive correction pays off. Accepting the DS noncompliance and fixing it immediately prevented it from propagating to Years 2 and 3. Had Apex waited, the same undisclosed practice would appear in future ICS filings, multiplying the financial impact. (4) Documentation wins recoverable dollars. The $21,000 scaled disallowance was recovered entirely through document production. Keeping organized records is not overhead — it is a direct financial asset. (5) Multi-segment coordination requires discipline. Home office allocation errors, DS mismatches, or inconsistent inter-segment treatment create audit findings that span all segments. The investment in coordinated ICS preparation pays back in reduced audit exposure.">
    Identify the five most important lessons from the Apex case study for a contractor facing its first DCAA ICS audit. For each lesson, cite the specific Apex fact pattern that illustrates it.
  </Question>
</Step>

---

[← Flashcards](/advanced/flashcards/module-8) | [Training Dashboard →](/dashboard)
