import React from 'react';

export default function ModuleProgress({ moduleId }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6, marginBottom: 16 }}>
      <strong>Module progress</strong>
      <div style={{ marginTop: 8 }}>
        <small>Module id: {moduleId}</small>
      </div>
    </div>
  );
}
