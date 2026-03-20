import React, { useState } from 'react';

export default function Question({ children, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginTop: 8 }}>
      <div>{children}</div>
      <button style={{ marginTop: 8 }} onClick={() => setShow(!show)}>{show ? 'Hide answer' : 'Show answer'}</button>
      {show && <div style={{ marginTop: 8, background: '#f7f7f7', padding: 8, borderRadius: 4 }}>{answer}</div>}
    </div>
  );
}
