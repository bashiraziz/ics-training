---
title: "Beginner Module 4 Practice: The Six Core Schedules"
---

import Step from '@site/src/components/Step';
import Question from '@site/src/components/Question';

<Step moduleId="module4" stepId="1" title="Step 1: Match Information to Schedules">
  <p>Vertex Defense Solutions is assembling its ICS package. The accounting team has gathered the following pieces of information and needs to know which schedule each item belongs to.</p>
  <ul>
    <li>Item 1: A spreadsheet listing every G&A expense account — legal fees ($18,000), executive salaries ($210,000), office supplies ($4,200), and recruiting advertising ($9,500)</li>
    <li>Item 2: A table showing that the final overhead rate is 63% versus the provisional rate of 70%</li>
    <li>Item 3: A statement signed by Vertex's CFO certifying the ICS is accurate and complete</li>
    <li>Item 4: Direct labor and travel costs charged to each of Vertex's eight government contracts</li>
  </ul>
  <Question answer="Item 1 goes on Schedule B (indirect expense detail — line-by-line listing of every cost element within each pool). Item 2 goes on Schedule D (indirect cost rates summary — provisional vs. final rate comparison). Item 3 goes on Schedule H (contractor certification). Item 4 goes on Schedule C (direct costs by contract).">
    Match each item to the correct ICS schedule and briefly explain why.
  </Question>
  <Question answer="The recruiting advertising ($9,500) needs scrutiny. Under FAR 31.205-1, recruiting advertising directly related to staffing government contracts is generally allowable. However, advertising for other purposes (brand awareness, commercial product promotion) is unallowable. Vertex must review whether this $9,500 is exclusively for recruitment. If any portion relates to non-recruiting advertising, that amount must be removed from the G&A pool before being entered on Schedule B.">
    One of the G&A expenses — recruiting advertising ($9,500) — may be partly unallowable. What question must Vertex answer before including it on Schedule B, and what happens if part of it is unallowable?
  </Question>
</Step>

<Step moduleId="module4" stepId="2" title="Step 2: Understand What DCAA Checks">
  <p>Vertex's ICS is submitted. DCAA's auditor begins the adequacy review. She has DCAA's standard adequacy checklist in front of her.</p>
  <Question answer="DCAA's adequacy checklist verifies: (1) All required schedules are present and complete. (2) Schedule H is signed by an authorized official. (3) Indirect rates can be computed from the data in Schedules A and B. (4) Direct costs on Schedule C reconcile to total claimed costs. (5) Indirect pools and allocation bases are consistently defined. If any of these elements are missing or inconsistent, DCAA will return the submission as inadequate.">
    List the five main things DCAA checks during the adequacy review. What is the consequence of failing any one of them?
  </Question>
  <Question answer="Schedule D is the rate settlement document. It shows the provisional rate Vertex billed at (70%) versus the final rate computed from actual data (63%). The 7-percentage-point difference is what drives the Schedule E overbilling calculation. The CO and DCAA use Schedule D to see exactly where rates changed, by how much, and to understand whether the variance is explainable or a potential audit concern.">
    Schedule D shows a 7-point drop in overhead (from 70% provisional to 63% final). Who uses this information and what decision does it inform?
  </Question>
</Step>

<Step moduleId="module4" stepId="3" title="Step 3: Trace a Cost from Source to Schedule">
  <p>Vertex's accounting system recorded $42,000 in depreciation on shared computer servers during the year. These servers support all government contracts — no single contract uses them exclusively.</p>
  <Question answer="Because the servers support all contracts rather than any single contract, the depreciation is an indirect cost. It belongs in the Overhead pool (most likely, since it supports contract work). It appears on Schedule B as a line item within the Overhead pool, is included in the overhead pool total on Schedule A, and the resulting overhead rate is applied to direct labor on Schedule C to allocate this cost across all contracts proportionally.">
    Is the $42,000 server depreciation a direct or indirect cost? Which schedule(s) does it appear on, and how does it flow through the ICS?
  </Question>
  <Question answer="If depreciation was incorrectly charged as a direct cost to a single contract on Schedule C, that contract would bear the entire $42,000 instead of its fair proportional share. Other contracts would benefit from the servers without any cost allocation. This violates the FAR 31.202 consistency rule and the principle that indirect costs must be allocated to all benefiting contracts. DCAA would question the direct charge and likely reclassify it as indirect.">
    If someone accidentally recorded the server depreciation as a direct cost on a single contract rather than in the overhead pool, what problem would that create?
  </Question>
</Step>

---

[← Flashcards](/beginner/flashcards/module-4) | [Next Module →](/beginner/training/module-5)
