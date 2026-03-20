import React, { useState } from 'react';

export default function Step({ moduleId, stepId, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 6, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{title}</strong>
        {!open ? (
          <button onClick={() => setOpen(true)}>Reveal</button>
        ) : (
          <button onClick={() => setOpen(false)}>Hide</button>
        )}
      </div>
      {open && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  );
}
