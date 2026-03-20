import React, { useState } from 'react';

export default function Question({ children, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div className="question-block">
      <div>{children}</div>
      <button
        className="question-btn"
        aria-expanded={show}
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide answer' : 'Show answer'}
      </button>
      {show && <div className="question-answer">{answer}</div>}
    </div>
  );
}
