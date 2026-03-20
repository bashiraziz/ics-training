import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

/**
 * Marks the current training module as visited in localStorage on mount.
 * Reads the level from the URL pathname (e.g. /beginner/training/module-1).
 */
export default function ModuleProgress({ moduleId }) {
  const { pathname } = useLocation();
  const level = pathname.split('/').filter(Boolean)[0] || 'beginner';
  const storageKey = `ics-visited-${level}-${moduleId}`;

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, '1');
    } catch (_) {
      // SSR or private browsing — fail silently.
    }
  }, [storageKey]);

  const moduleNum = moduleId.replace('module', '');

  return (
    <div className="mp-bar">
      <span className="mp-label">
        {level.charAt(0).toUpperCase() + level.slice(1)} · Module {moduleNum}
      </span>
      <span className="mp-badge">In Progress</span>
    </div>
  );
}
