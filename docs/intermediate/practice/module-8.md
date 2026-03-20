---
title: "Intermediate Module 8 Practice: Intermediate Case Study"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module8" stepId="1" title="Step 1: Replicating Meridian's Rate Computation">
  <p>Use the Meridian Defense Consulting case study data to work through the rate computation from scratch. Meridian's year-end data (before unallowable cost adjustments):</p>
  <ul>
    <li>Fringe pool booked total: $1,540,000 | Total labor base: $4,620,000</li>
    <li>Overhead pool booked total: $2,890,000 | Direct labor base: $3,580,000</li>
    <li>G&A pool booked total: $1,120,000 | Total cost input base: $8,240,000</li>
  </ul>
  <p>Unallowable costs found in Overhead: $47,000 total (entertainment $32,000, lobbying $15,000). No unallowable costs in Fringe or G&A.</p>
  <Question answer="Step 1 — Remove unallowables from Overhead: $2,890,000 − $47,000 = $2,843,000 allowable. Step 2 — Compute rates: Fringe = $1,540,000 / $4,620,000 = 33.33% (round to 33.3%). Overhead = $2,843,000 / $3,580,000 = 79.41% (round to 79.4%). G&A = $1,120,000 / $8,240,000 = 13.59% (round to 13.6%). These three rates appear in Schedule A's 'Claimed Rate' column and in Schedule D's 'Final Rate' column.">
    Compute Meridian's final indirect cost rate for each of the three pools. Show your work step by step.
  </Question>
  <Question answer="If the $47,000 had not been removed: Overhead rate = $2,890,000 / $3,580,000 = 80.7% (vs. 79.4% correct). The claimed Overhead would be overstated by $47,000 — the exact amount of unallowable costs. Additionally, because entertainment (FAR 31.205-14) and lobbying (FAR 31.205-22) are expressly unallowable, DCAA would apply the FAR 42.709 penalty: 2 × $47,000 = $94,000. Meridian would owe $47,000 in disallowances plus a $94,000 penalty — a total consequence of $141,000 for failing to remove $47,000 in unallowable costs.">
    What would the Overhead rate have been if the $47,000 in unallowable costs had NOT been removed? What additional consequences would Meridian face?
  </Question>
</Step>

<Step moduleId="module8" stepId="2" title="Step 2: Schedule E — Overbilling/Underbilling by Contract">
  <p>Meridian has eight cost-reimbursable contracts. For this exercise, use a simplified four-contract subset. Provisional rates: Fringe 32%, OH 68%, G&A 13%. Final rates: Fringe 33.3%, OH 79.4%, G&A 13.6%. Assume all direct labor below is from cost-type contracts.</p>

  | Contract | Direct Labor | Fringe Base | OH Base | TCI Approx |
  |---|---|---|---|---|
  | MDC-01 | $900,000 | $900,000 | $900,000 | $2,100,000 |
  | MDC-02 | $720,000 | $720,000 | $720,000 | $1,680,000 |
  | MDC-03 | $480,000 | $480,000 | $480,000 | $1,120,000 |
  | MDC-04 | $300,000 | $300,000 | $300,000 | $700,000 |

  <Question answer="Fringe variance rate: 33.3% − 32% = +1.3%. OH variance rate: 79.4% − 68% = +11.4%. G&A variance rate: 13.6% − 13% = +0.6%. MDC-01: Fringe $900K × 1.3% = +$11,700; OH $900K × 11.4% = +$102,600; G&A $2.1M × 0.6% = +$12,600. Total MDC-01 = +$126,900. MDC-02: Fringe $720K × 1.3% = +$9,360; OH $720K × 11.4% = +$82,080; G&A $1.68M × 0.6% = +$10,080. Total = +$101,520. MDC-03: Fringe $480K × 1.3% = +$6,240; OH $480K × 11.4% = +$54,720; G&A $1.12M × 0.6% = +$6,720. Total = +$67,680. MDC-04: Fringe $300K × 1.3% = +$3,900; OH $300K × 11.4% = +$34,200; G&A $700K × 0.6% = +$4,200. Total = +$42,300. Grand total underbilling across four contracts: $126,900 + $101,520 + $67,680 + $42,300 = $338,400.">
    Compute the Schedule E billing variance for each of the four contracts across all three pools. What is the total underbilling on these four contracts?
  </Question>
  <Question answer="The large OH underbilling (+11.4 percentage points) is the dominant driver. Provisional OH was set at 68% at year-start based on projected costs, but actual indirect costs were significantly higher — likely because indirect headcount grew during the year (more program managers, facility costs, etc.). The Fringe and G&A underbillings are smaller in percentage terms but still add up because they apply to large bases. The lesson: when actual indirect costs trend materially above provisional rates mid-year, contractors should discuss a provisional rate update with the ACO to reduce the settlement amount at year-end.">
    Why is the Overhead pool the dominant driver of the underbilling? What does this suggest about how Meridian set its provisional rates?
  </Question>
</Step>

<Step moduleId="module8" stepId="3" title="Step 3: The DCAA Desk Review">
  <p>DCAA's clarification request to Meridian asked about the TCI base construction — specifically whether fringe benefits on direct labor were included. Meridian's Controller, Diane, needs to respond clearly and completely.</p>
  <Question answer="Diane should prepare a written response with: (1) A clear, direct answer — yes, fringe benefits allocated to direct labor are included in the TCI base, consistent with Meridian's disclosed accounting practices. (2) A supporting schedule showing the TCI build-up: Direct labor $3,100,000 + Fringe on direct labor (33.3% × $3,100,000 = $1,032,300) + Direct materials + ODCs + Overhead allocated to direct = $8,240,000 total. (3) A reference to where this methodology is documented in Meridian's accounting manual or prior ICS submissions. The response should be sent within the timeframe DCAA specified (typically 15–30 days) and copied to the ACO.">
    Draft the key elements of Meridian's written response to DCAA's clarification request. What must the response include to satisfy DCAA?
  </Question>
  <Question answer="DCAA is asking because TCI base construction varies by contractor — some include fringe-on-direct and some do not, depending on their disclosed accounting practices. If fringe is included, it increases the base and lowers the G&A rate (more denominator, lower rate). DCAA wants to verify the base is computed consistently with how Meridian has always computed it, and that the $8,240,000 figure is arithmetically correct and supportable. An unsupported base figure — even if the G&A rate is otherwise accurate — is a Schedule A accuracy concern that can expand into a broader audit inquiry.">
    Why does DCAA care whether fringe benefits on direct labor are included in the G&A base? What audit risk is DCAA assessing with this question?
  </Question>
</Step>

---

[← Flashcards](/intermediate/flashcards/module-8) | [Advanced Level →](/advanced/training/module-1)
