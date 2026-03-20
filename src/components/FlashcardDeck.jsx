import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`fc-card ${flipped ? 'fc-flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
      <div className="fc-inner">
        <div className="fc-front">
          <span className="fc-side-label">Question</span>
          <p className="fc-text">{question}</p>
          <span className="fc-hint">Click to reveal answer</span>
        </div>
        <div className="fc-back">
          <span className="fc-side-label">Answer</span>
          <p className="fc-text">{answer}</p>
          <span className="fc-hint">Click to flip back</span>
        </div>
      </div>
    </div>
  );
}

export default function FlashcardDeck({ cards }) {
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [key, setKey] = useState(0);

  const current = order[index];

  function shuffle() {
    const shuffled = [...order].sort(() => Math.random() - 0.5);
    setOrder(shuffled);
    setIndex(0);
    setKey(k => k + 1);
  }

  function reset() {
    setOrder(cards.map((_, i) => i));
    setIndex(0);
    setKey(k => k + 1);
  }

  return (
    <div className="fc-deck">
      <div className="fc-toolbar">
        <span className="fc-counter">{index + 1} / {cards.length}</span>
        <div className="fc-toolbar-actions">
          <button className="fc-btn" onClick={shuffle}>Shuffle</button>
          <button className="fc-btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="fc-progress">
        <div className="fc-progress-bar" style={{ width: `${((index + 1) / cards.length) * 100}%` }} />
      </div>

      <Flashcard key={`${key}-${current}`} question={cards[current].q} answer={cards[current].a} />

      <div className="fc-nav">
        <button
          className="fc-nav-btn"
          onClick={() => { setIndex(i => i - 1); setKey(k => k + 1); }}
          disabled={index === 0}
        >
          ← Previous
        </button>
        <button
          className="fc-nav-btn"
          onClick={() => { setIndex(i => i + 1); setKey(k => k + 1); }}
          disabled={index === cards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
