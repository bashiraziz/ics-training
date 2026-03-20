---
title: "Beginner Module 5 - Direct vs. Indirect Costs in ICS"
---

import ModuleProgress from '@site/src/components/ModuleProgress';

<ModuleProgress moduleId="module5" />

## The Foundation: FAR Part 31

Before you can prepare an ICS, you need to understand how costs are classified. The governing standard is **FAR Part 31**, which establishes the principles for determining whether costs are allowable, allocable, and properly categorized. The ICS is essentially a structured application of FAR Part 31 to your actual cost data for the year.

The most fundamental distinction in FAR Part 31 — and in the ICS — is between **direct costs** and **indirect costs**.

## Direct Costs

A direct cost is any cost that can be **identified specifically with a particular final cost objective** (i.e., a specific contract). If you can look at a cost and say "this was incurred solely because of Contract X," it's a direct cost.

Common examples of direct costs:
- Labor hours worked on a specific contract (direct labor)
- Materials purchased for a specific contract
- Subcontractor invoices for work on a specific contract
- Travel directly required by a contract (e.g., site visits)
- Other Direct Costs (ODCs) charged to a specific contract

In the ICS, direct costs flow to **Schedule C**, where they are listed contract-by-contract.

**The consistency rule matters here.** Under FAR 31.202, if a type of cost is treated as direct on one contract, it must be treated as direct on all contracts where the same circumstances exist. You cannot charge one type of cost directly to some contracts and indirectly to others without a documented, consistently applied policy.

## Indirect Costs

An indirect cost is a cost that **cannot be identified specifically with a single contract** but benefits multiple contracts or the business as a whole. These costs are accumulated in pools and then allocated across contracts using a rational allocation base.

Common examples of indirect costs:
- Fringe benefits (health insurance, payroll taxes, retirement contributions) — benefit all employees
- Facility rent and utilities for shared office space
- Indirect labor (accounting staff, HR, program managers supporting multiple contracts)
- Depreciation on shared equipment
- General and administrative expenses (executive salaries, legal fees, business development)

In the ICS, indirect costs flow to **Schedules A and B** — pooled by category, then allocated.

## The Three Most Common Indirect Pools

Most government contractors maintain three core indirect cost pools:

| Pool | What It Captures | Typical Allocation Base |
|---|---|---|
| **Fringe Benefits** | Employer payroll taxes, health/dental/vision, leave, retirement | Total labor dollars or total labor hours |
| **Overhead** | Costs that support direct work: supervision, facilities, shared equipment, indirect labor on contracts | Direct labor dollars (most common) |
| **General & Administrative (G&A)** | Costs of running the overall business: executive management, finance, legal, business development | Total cost input (most common) or value-added base |

Each pool feeds into the ICS as follows:
- **Schedule B** lists every expense in the pool line by line
- **Schedule A** summarizes pool totals and computes the rate (pool ÷ base)
- **Schedule D** compares the computed final rate to the provisional rate used for billing

## Unallowable Costs: The Critical Exclusion

The most consequential rule in ICS preparation is this: **unallowable costs must be excluded from all claimed schedules.**

FAR Part 31.205 lists specific unallowable cost categories, including:
- Entertainment and amusement costs (FAR 31.205-14)
- Alcoholic beverages (FAR 31.205-51)
- Lobbying and political activity costs (FAR 31.205-22)
- Interest on borrowings (FAR 31.205-20)
- Costs of fines and penalties (FAR 31.205-15)
- Advertising costs not related to recruitment or contract performance (FAR 31.205-1)

**The common mistake:** Unallowable costs often live in the same accounting system accounts as allowable costs. For example, a company might run both allowable recruiting advertising and unallowable product advertising through the same G&A account. If the G&A pool is entered into Schedule B without removing the unallowable portion, the contractor is claiming costs it has no legal right to collect from the government.

This is one of DCAA's primary audit targets. Auditors look at the composition of each indirect pool and test whether any unallowable costs were included. Claiming unallowable costs — even inadvertently — can result in penalties, repayment demands, and in willful cases, False Claims Act liability.

## How the Cost Classification Flows Through the ICS

```
Accounting System
      |
      ├── Direct Costs → Schedule C (by contract)
      |
      └── Indirect Costs → Schedule B (by pool)
                              |
                              └── Schedule A (pool totals → rates)
                                            |
                                            └── Applied to Schedule C bases → Schedule D (rate comparison) → Schedule E (contract settlement)
```

Getting this classification right at the outset makes every downstream schedule more accurate and easier to defend under audit.

---

[Next → Flashcards](/beginner/flashcards/module-5)
