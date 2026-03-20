import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { LEVELS } from '../data/levels';

export default function Dashboard() {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [visited, setVisited] = useState({});

  useEffect(() => {
    try {
      const result = {};
      LEVELS.forEach(({ key, modules }) => {
        modules.forEach(({ id }) => {
          if (localStorage.getItem(`ics-visited-${key}-${id}`)) {
            result[`${key}-${id}`] = true;
          }
        });
      });
      setVisited(result);
    } catch (_) {
      // SSR or private browsing — fail silently.
    }
  }, []);

  const levelData = LEVELS.find((l) => l.key === activeLevel);
  const modules = levelData?.modules || [];

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
          {levelData?.description}
        </div>

        <div className="db-section-label">
          {levelData?.label} Modules
        </div>

        <div className="db-module-list">
          {modules.map((mod, i) => (
            <div className="db-module-row" key={mod.id}>
              <div className="db-module-info">
                <span className="db-mod-badge">Module {i + 1}</span>
                <span className="db-mod-title">{mod.title}</span>
                {visited[`${activeLevel}-${mod.id}`] && (
                  <span className="db-visited-badge">✓ Visited</span>
                )}
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
