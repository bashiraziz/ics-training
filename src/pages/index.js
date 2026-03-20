import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { LEVELS } from '../data/levels';

const FAR31_URL = 'https://far31-training.vercel.app';
const POOL_SITE_URL = 'https://pool-rates-training.vercel.app';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [activeLevel, setActiveLevel] = useState('beginner');

  const level = LEVELS.find((l) => l.key === activeLevel);
  const modules = level?.modules || [];

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>

      {/* Hero */}
      <section className="lp-hero">
        <h1 className="lp-hero-title">Incurred Cost Submissions Training</h1>
        <p className="lp-hero-sub">
          Master the annual incurred cost submission process: reconcile rates, satisfy DCAA, and protect your contracts, at your level.
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

        <p className="lp-level-desc">{level?.description}</p>

        <div className="lp-modules-grid">
          {modules.map((mod, i) => (
            <Link
              key={mod.id}
              className="lp-module-card"
              to={`/${activeLevel}/training/module-${i + 1}`}
            >
              <span className="lp-module-num">Module {i + 1}</span>
              <span className="lp-module-title">{mod.title}</span>
              <span className="lp-module-desc">{mod.description}</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link className="button button--primary" to={level?.startLink}>
            Start {level?.label} Module 1
          </Link>
        </div>
      </section>

    </Layout>
  );
}
