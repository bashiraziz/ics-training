import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import modulesData from '../data/modules.json';

const FAR31_URL = 'https://far31-training.vercel.app';
const POOL_SITE_URL = 'https://pool-rates-training.vercel.app';

const LEVELS = [
  {
    key: 'beginner',
    label: 'Beginner',
    description: 'New to incurred cost submissions? Start here with plain-language explanations of what ICS is, who must file, and what DCAA expects.',
    startLink: '/beginner/training/module-1',
    moduleDescriptions: [
      'Get a plain-English overview of what an Incurred Cost Submission is, why it exists, and how it fits into the government contract lifecycle.',
      'Learn which contractors must file, what contract types trigger the requirement, and the consequences of missing the June 30 deadline.',
      'Understand the difference between provisional billing rates used during the year and the final rates computed after year-end.',
      'Get a clear overview of Schedules A through H — what each one covers and how they connect to form a complete submission.',
      'See how the direct and indirect cost classification from FAR Part 31 flows directly into your ICS schedules.',
      'Learn why overbillings and underbillings occur when provisional rates differ from final rates, and how to correct them.',
      'Understand what DCAA looks for in a submission, what triggers an audit, and the basics of staying clean.',
      'Follow a small 8(a) contractor through their first complete ICS filing from start to finish.',
    ],
  },
  {
    key: 'intermediate',
    label: 'Intermediate',
    description: 'Comfortable with the basics? Go deeper on the regulatory framework, schedule mechanics, rate variances, and common deficiencies.',
    startLink: '/intermediate/training/module-1',
    moduleDescriptions: [
      'Master FAR 52.216-7 — the Allowable Cost and Payment clause — and understand the full regulatory foundation for ICS filing requirements.',
      'Deep-dive into Schedule A, the summary of claimed indirect costs: structure, line items, and the most common errors DCAA flags.',
      'Examine Schedule B in detail — indirect expense pools and allocation bases — and see how it links back to your pool rate calculations.',
      'Work through Schedules C through H: direct costs by contract, contract listing, organizational chart, and the contractor certification.',
      'Learn how to compute the variance between provisional and final rates, determine over/under-billed amounts, and record adjustments.',
      'Master the segregation of unallowable costs in the ICS — what must be excluded, how to document it, and what DCAA tests for.',
      'Review the top reasons DCAA issues ICS deficiency letters and how to avoid each one before you submit.',
      'Follow a mid-size contractor as it reconciles a full year of provisional billings across three indirect cost pools.',
    ],
  },
  {
    key: 'advanced',
    label: 'Advanced',
    description: 'Ready for expert topics? Tackle multi-segment filings, CAS alignment, quick-close, DCAA audits, and M&A scenarios.',
    startLink: '/advanced/training/module-1',
    moduleDescriptions: [
      'Learn how to structure ICS filings across multiple business segments or divisions with separate pools and allocation bases.',
      'Ensure your ICS is consistent with your CAS Disclosure Statement — understand where the two frameworks interact and what triggers a CAS noncompliance finding.',
      'Determine when your organization qualifies for quick-close procedures and how to execute a quick-close ICS efficiently.',
      'Walk through the complete DCAA audit lifecycle after submission: desk review, sampling, field audit, preliminary findings, and exit conference.',
      'Build a strategy for drafting rebuttals, supporting questioned costs, negotiating disallowances, and escalating to the Contracting Officer.',
      'Understand the 6-year statute of limitations on ICS years, the finality of Contracting Officer determinations, and your appeal rights.',
      'Navigate what happens to open ICS years, pending audits, and rate negotiations during acquisitions, divestitures, and novation agreements.',
      'Apply every advanced concept as a large contractor navigates a DCAA audit, contested findings, and final rate negotiations.',
    ],
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [activeLevel, setActiveLevel] = useState('beginner');

  const level = LEVELS.find((l) => l.key === activeLevel);
  const modules = modulesData[activeLevel] || [];

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>

      {/* Hero */}
      <section className="lp-hero">
        <h1 className="lp-hero-title">Incurred Cost Submissions Training</h1>
        <p className="lp-hero-sub">
          Master the annual incurred cost submission process — reconcile rates, satisfy DCAA, and protect your contracts — at your level.
        </p>
        <div className="lp-hero-ctas">
          <Link className="button button--primary button--lg" to="/dashboard">
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Companion callout */}
      <section className="lp-companion">
        <p>
          ICS is the third step in a complete government contracting curriculum. Build your foundation with our companion sites:
        </p>
        <div className="lp-companion-links">
          <a
            className="button button--outline button--lg"
            style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            href={FAR31_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            FAR 31 Training — Cost Classification
          </a>
          <a
            className="button button--outline button--lg"
            style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            href={POOL_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pool Rates Training — Indirect Rates
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="lp-how">
        <h2 className="lp-section-title">How it works</h2>
        <div className="lp-how-grid">
          <div className="lp-how-card">
            <div className="lp-how-num">1</div>
            <h3>Choose your level</h3>
            <p>Select Beginner, Intermediate, or Advanced based on your familiarity with ICS and DCAA requirements.</p>
          </div>
          <div className="lp-how-card">
            <div className="lp-how-num">2</div>
            <h3>Read, then study</h3>
            <p>Work through 8 training modules and reinforce each topic with flashcards.</p>
          </div>
          <div className="lp-how-card">
            <div className="lp-how-num">3</div>
            <h3>Practice and apply</h3>
            <p>Complete hands-on exercises after each module and finish with a full case study.</p>
          </div>
        </div>
      </section>

      {/* Level picker + module grid */}
      <section className="lp-modules">
        <h2 className="lp-section-title">Training Modules</h2>

        <div className="lp-level-tabs">
          {LEVELS.map((l) => (
            <button
              key={l.key}
              className={`lp-level-tab${activeLevel === l.key ? ' lp-level-tab--active' : ''}`}
              onClick={() => setActiveLevel(l.key)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <p className="lp-level-desc">{level.description}</p>

        <div className="lp-modules-grid">
          {modules.map((mod, i) => (
            <Link
              key={mod.id}
              className="lp-module-card"
              to={`/${activeLevel}/training/module-${i + 1}`}
            >
              <span className="lp-module-num">Module {i + 1}</span>
              <span className="lp-module-title">{mod.title}</span>
              <span className="lp-module-desc">{level.moduleDescriptions[i]}</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link className="button button--primary" to={level.startLink}>
            Start {level.label} Module 1
          </Link>
        </div>
      </section>

    </Layout>
  );
}
