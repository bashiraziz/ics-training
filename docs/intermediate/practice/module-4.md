---
title: "Intermediate Module 4 Practice: Schedules C–H"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module4" stepId="1" title="Step 1: Schedule C and D Reconciliation">
  <p>Pinnacle Analytics has five cost-type contracts active during the fiscal year. Schedule C shows the following direct labor by contract:</p>

  | Contract | Direct Labor |
  |---|---|
  | Contract 101 | $420,000 |
  | Contract 102 | $310,000 |
  | Contract 103 | $185,000 |
  | Contract 104 | $275,000 |
  | Contract 105 | $90,000 |
  | **Total** | **$1,280,000** |

  <p>Schedule A shows an Overhead allocation base of $1,310,000.</p>
  <Question answer="Schedule C direct labor totals $1,280,000, but the Overhead allocation base in Schedule A is $1,310,000 — a $30,000 discrepancy. This is a reconciliation deficiency. The direct labor base in Schedule A must be supported by the actual direct labor from Schedule C. Before submission, Pinnacle must identify the source of the $30,000 gap. Possible causes: a contract was omitted from Schedule C, a non-cost-type contract's labor was included in the base, or the base includes fringe on direct labor while Schedule C shows raw labor only (in which case the methodology must be clearly documented).">
    There is a discrepancy between Schedule C and the Overhead base in Schedule A. Identify the discrepancy and explain what must be investigated before submission.
  </Question>
  <Question answer="Schedule D takes the final Overhead rate from Schedule A and the provisional rate used during the year, computes the rate variance, then multiplies that variance by the actual allocation base to determine the dollar overbilling or underbilling. The dollar variance in Schedule D must equal the sum of all contract-level variances in Schedule E. If Schedule C has a wrong base figure, Schedule D's dollar variance computation is wrong, and Schedule E contract-level variances will not sum correctly — creating a cascading reconciliation failure across three schedules.">
    How does an error in the Schedule C direct labor total affect the accuracy of Schedule D and Schedule E?
  </Question>
</Step>

<Step moduleId="module4" stepId="2" title="Step 2: Schedule E — Over/Underbilling by Contract">
  <p>Pinnacle's final Overhead rate is 72%. Its provisional rate was 68%. Using the corrected direct labor base of $1,280,000 (assume all is from cost-type contracts), and the following direct labor by contract from Schedule C:</p>

  | Contract | Direct Labor | Billed at 68% | Should Bill at 72% | Variance |
  |---|---|---|---|---|
  | Contract 101 | $420,000 | $285,600 | ? | ? |
  | Contract 102 | $310,000 | $210,800 | ? | ? |
  | Contract 103 | $185,000 | $125,800 | ? | ? |
  | Contract 104 | $275,000 | $187,000 | ? | ? |
  | Contract 105 | $90,000 | $61,200 | ? | ? |

  <Question answer="Contract 101: Should bill = $420,000 × 72% = $302,400; variance = $302,400 − $285,600 = +$16,800 underbilled. Contract 102: $310,000 × 72% = $223,200; variance = $223,200 − $210,800 = +$12,400. Contract 103: $185,000 × 72% = $133,200; variance = $133,200 − $125,800 = +$7,400. Contract 104: $275,000 × 72% = $198,000; variance = $198,000 − $187,000 = +$11,000. Contract 105: $90,000 × 72% = $64,800; variance = $64,800 − $61,200 = +$3,600. Total underbilling = $16,800 + $12,400 + $7,400 + $11,000 + $3,600 = $51,200.">
    Complete the Schedule E table by computing the 'Should Bill at 72%' and 'Variance' columns for each contract. What is the total underbilling?
  </Question>
  <Question answer="The total Schedule E variance ($51,200) must equal the Schedule D dollar variance. Schedule D: (72% − 68%) × $1,280,000 = 4% × $1,280,000 = $51,200. They match — confirming internal consistency between Schedules D and E. This cross-check is one of the first reconciliation tests DCAA performs during adequacy review.">
    Confirm that the total Schedule E variance matches the Schedule D calculation. Show the Schedule D computation.
  </Question>
</Step>

<Step moduleId="module4" stepId="3" title="Step 3: Schedule F and Schedule H Issues">
  <p>Pinnacle has two subcontracts active during the year:</p>
  <ul>
    <li>Subcontract A: Fixed-price subcontract with Vertex Corp — $180,000</li>
    <li>Subcontract B: Cost-plus-fixed-fee subcontract with DataLink LLC — $340,000 ceiling, $290,000 incurred</li>
  </ul>
  <p>Pinnacle's CFO has been on medical leave. The company's Controller prepared and signed Schedule H.</p>
  <Question answer="Subcontract A (fixed-price) requires no Schedule F treatment — Vertex's indirect costs are embedded in its fixed price, and the government has no audit rights over them. Subcontract B (cost-type) requires Schedule F documentation. Pinnacle must either include DataLink's own ICS data (if DataLink filed or will file with its cognizant agency) or obtain a written assertion from DataLink that it has filed or will file its own incurred cost proposal. The $290,000 in DataLink costs flowing through Pinnacle's books must be traceable.">
    Which subcontract requires Schedule F treatment, and what must Schedule F include?
  </Question>
  <Question answer="Whether the Controller's signature is acceptable depends on whether the Controller has authority to bind the company on representations to the government. The FAR 42.703-2 certification must be signed by an 'authorized official' — typically the CFO, CEO, President, or someone specifically authorized in writing to sign on the company's behalf. If the Controller has been delegated this authority (in writing, in a board resolution or delegation of authority document), the signature is valid. If not, the ICS will be rejected as inadequately certified — an automatic deficiency — and must be resubmitted with the CFO's signature once available.">
    The CFO is on medical leave and the Controller signed Schedule H. Is this acceptable? What is the risk if it is not?
  </Question>
</Step>

---

[← Flashcards](/intermediate/flashcards/module-4) | [Next Module →](/intermediate/training/module-5)
