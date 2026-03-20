import React, { useState, useEffect, useRef } from 'react';

/**
 * Single flip card. Controlled component — flip state is owned by FlashcardDeck.
 */
function Flashcard({ question, answer, flipped, onFlip }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onFlip();
    }
  }

  return (
    <div
      className={`fc-card${flipped ? ' fc-flipped' : ''}`}
      onClick={onFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={flipped ? 'Showing answer. Press to flip back.' : 'Showing question. Press to reveal answer.'}
    >
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

/**
 * Interactive flashcard deck with navigation, shuffle, self-grading, and
 * keyboard shortcuts (← → to navigate, Space to flip).
 *
 * @param {{ q: string, a: string }[]} cards  Array of flashcard pairs.
 */
export default function FlashcardDeck({ cards }) {
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [key, setKey] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [grades, setGrades] = useState({});

  const current = order[index];

  // Refs for keyboard handler — avoids stale closures with stable listener.
  const indexRef = useRef(index);
  const orderRef = useRef(order);
  indexRef.current = index;
  orderRef.current = order;

  useEffect(() => {
    function handleKey(e) {
      const tag = e.target?.tagName;
      const role = e.target?.getAttribute?.('role');
      // Skip when focus is on an interactive element that handles keys itself.
      if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || role === 'button') return;

      if (e.key === 'ArrowRight') {
        if (indexRef.current < orderRef.current.length - 1) {
          setIndex(i => i + 1);
          setFlipped(false);
          setKey(k => k + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (indexRef.current > 0) {
          setIndex(i => i - 1);
          setFlipped(false);
          setKey(k => k + 1);
        }
      } else if (e.key === ' ') {
        e.preventDefault();
        setFlipped(f => !f);
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Fisher-Yates shuffle — unbiased.
  function shuffle() {
    const arr = [...order];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setIndex(0);
    setFlipped(false);
    setKey(k => k + 1);
    setGrades({});
  }

  function reset() {
    setOrder(cards.map((_, i) => i));
    setIndex(0);
    setFlipped(false);
    setKey(k => k + 1);
    setGrades({});
  }

  function goNext() {
    setIndex(i => i + 1);
    setFlipped(false);
    setKey(k => k + 1);
  }

  function goPrev() {
    setIndex(i => i - 1);
    setFlipped(false);
    setKey(k => k + 1);
  }

  function gradeCard(grade) {
    setGrades(prev => ({ ...prev, [index]: grade }));
    if (index < order.length - 1) {
      setIndex(i => i + 1);
      setFlipped(false);
      setKey(k => k + 1);
    }
  }

  function reviewMissed() {
    const missedOrder = order.filter((_, i) => grades[i] === 'again');
    setOrder(missedOrder);
    setIndex(0);
    setFlipped(false);
    setKey(k => k + 1);
    setGrades({});
  }

  // Completion screen — shown once every card in the current deck is graded.
  const allGraded = order.length > 0 && order.every((_, i) => grades[i] !== undefined);

  if (allGraded) {
    const knownCount = Object.values(grades).filter(g => g === 'known').length;
    const againCount = Object.values(grades).filter(g => g === 'again').length;

    return (
      <div className="fc-deck fc-complete">
        <h3 className="fc-complete-title">Session complete!</h3>
        <p className="fc-complete-score">
          <span className="fc-grade-known-count">{knownCount} known</span>
          {' · '}
          <span className="fc-grade-again-count">{againCount} to review</span>
        </p>
        {againCount > 0 && (
          <button className="fc-btn" onClick={reviewMissed}>
            Review {againCount} missed card{againCount !== 1 ? 's' : ''}
          </button>
        )}
        <button className="fc-btn" onClick={reset}>Start over</button>
      </div>
    );
  }

  return (
    <div className="fc-deck">
      <div className="fc-toolbar">
        <span className="fc-counter">{index + 1} / {order.length}</span>
        <div className="fc-toolbar-actions">
          <button className="fc-btn" onClick={shuffle}>Shuffle</button>
          <button className="fc-btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <div
        className="fc-progress"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={order.length}
        aria-label={`Card ${index + 1} of ${order.length}`}
      >
        <div
          className="fc-progress-bar"
          style={{ width: `${((index + 1) / order.length) * 100}%` }}
        />
      </div>

      <Flashcard
        key={`${key}-${current}`}
        question={cards[current].q}
        answer={cards[current].a}
        flipped={flipped}
        onFlip={() => setFlipped(f => !f)}
      />

      {flipped && (
        <div className="fc-grade">
          <button className="fc-grade-btn fc-grade-known" onClick={() => gradeCard('known')}>
            Got it ✓
          </button>
          <button className="fc-grade-btn fc-grade-again" onClick={() => gradeCard('again')}>
            Review again ↩
          </button>
        </div>
      )}

      <div className="fc-nav">
        <button className="fc-nav-btn" onClick={goPrev} disabled={index === 0}>
          ← Previous
        </button>
        <button className="fc-nav-btn" onClick={goNext} disabled={index === order.length - 1}>
          Next →
        </button>
      </div>
    </div>
  );
}
