import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import modulesData from '../data/modules.json';

const LEVELS = [
  {
    key: 'beginner',
    label: 'Beginner',
    description: 'New to incurred cost submissions? Covers what ICS is, who must file, provisional vs. final rates, the six schedules, and a first-timer end-to-end scenario.',
  },
  {
    key: 'intermediate',
    label: 'Intermediate',
    description: 'Comfortable with the basics? Go deeper on FAR 52.216-7, schedule mechanics, rate variances, unallowable cost segregation, and common DCAA deficiencies.',
  },
  {
    key: 'advanced',
    label: 'Advanced',
    description: 'Expert topics: multi-segment filings, CAS alignment, quick-close procedures, the full DCAA audit lifecycle, and ICS in M&A scenarios.',
  },
];

export default function Dashboard() {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const modules = modulesData[activeLevel] || [];

  return (
    <Layout title="Dashboard">
      <div className="db-page">

        <div className="db-header">
          <h1>Training Dashboard</h1>
          <p>Choose your skill level, then work through training, flashcards, and practice for each module.</p>
        </div>

        <div className="db-level-tabs">
          {LEVELS.map((level) => (
            <button
              key={level.key}
              className={`db-level-tab${activeLevel === level.key ? ' db-level-tab--active' : ''}`}
              onClick={() => setActiveLevel(level.key)}
            >
              {level.label}
            </button>
          ))}
        </div>

        <div className="db-level-desc">
          {LEVELS.find((l) => l.key === activeLevel)?.description}
        </div>

        <div className="db-section-label">
          {LEVELS.find((l) => l.key === activeLevel)?.label} Modules
        </div>

        <div className="db-module-list">
          {modules.map((mod, i) => (
            <div className="db-module-row" key={mod.id}>
              <div className="db-module-info">
                <span className="db-mod-badge">Module {i + 1}</span>
                <span className="db-mod-title">{mod.title}</span>
              </div>
              <div className="db-module-links">
                <Link
                  className="db-link-train"
                  to={`/${activeLevel}/training/module-${i + 1}`}
                >
                  Training
                </Link>
                <Link
                  className="db-link-flash"
                  to={`/${activeLevel}/flashcards/module-${i + 1}`}
                >
                  Flashcards
                </Link>
                <Link
                  className="db-link-practice"
                  to={`/${activeLevel}/practice/module-${i + 1}`}
                >
                  Practice
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="button button--primary"
          to={`/${activeLevel}/training/module-1`}
        >
          Start Module 1
        </Link>

      </div>
    </Layout>
  );
}
