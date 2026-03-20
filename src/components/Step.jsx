import React, { useState } from 'react';

/**
 * Collapsible step container used in practice modules.
 * moduleId and stepId are used to persist step-completion state in localStorage.
 */
export default function Step({ moduleId, stepId, title, children }) {
  const [open, setOpen] = useState(false);

  function handleReveal() {
    setOpen(true);
    try {
      if (moduleId && stepId) {
        localStorage.setItem(`ics-step-${moduleId}-${stepId}`, '1');
      }
    } catch (_) {
      // SSR or private browsing — fail silently.
    }
  }

  return (
    <div className="step-card">
      <div className="step-card-header">
        <strong>{title}</strong>
        {!open ? (
          <button aria-expanded={false} onClick={handleReveal}>Reveal</button>
        ) : (
          <button aria-expanded={true} onClick={() => setOpen(false)}>Hide</button>
        )}
      </div>
      {open && <div className="step-card-body">{children}</div>}
    </div>
  );
}
