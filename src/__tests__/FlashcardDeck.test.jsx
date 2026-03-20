import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlashcardDeck from '../components/FlashcardDeck';

const CARDS = [
  { q: 'Question 1', a: 'Answer 1' },
  { q: 'Question 2', a: 'Answer 2' },
  { q: 'Question 3', a: 'Answer 3' },
];

describe('FlashcardDeck — rendering', () => {
  it('renders the counter showing first card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('renders the current card question', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('renders Question and Answer side labels', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Question')).toBeInTheDocument();
    expect(screen.getByText('Answer')).toBeInTheDocument();
  });

  it('renders flip hints', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Click to reveal answer')).toBeInTheDocument();
    expect(screen.getByText('Click to flip back')).toBeInTheDocument();
  });

  it('renders progress bar with ARIA attributes', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '1');
    expect(progressbar).toHaveAttribute('aria-valuemin', '1');
    expect(progressbar).toHaveAttribute('aria-valuemax', '3');
  });

  it('renders initial progress bar width', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const bar = container.querySelector('.fc-progress-bar');
    expect(bar.style.width).toBe(`${(1 / 3) * 100}%`);
  });

  it('card has role="button" and tabIndex for keyboard access', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('card has descriptive aria-label when face-up', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    expect(card).toHaveAttribute('aria-label', 'Showing question. Press to reveal answer.');
  });
});

describe('FlashcardDeck — navigation', () => {
  it('Previous button is disabled on the first card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('← Previous')).toBeDisabled();
  });

  it('Next button is enabled on the first card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Next →')).not.toBeDisabled();
  });

  it('clicking Next advances to the next card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument();
  });

  it('clicking Next twice reaches the last card and disables Next', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    fireEvent.click(screen.getByText('Next →'));
    expect(screen.getByText('3 / 3')).toBeInTheDocument();
    expect(screen.getByText('Next →')).toBeDisabled();
  });

  it('clicking Previous after advancing goes back', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    fireEvent.click(screen.getByText('← Previous'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('navigating resets card to face-up', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.click(card); // flip
    expect(card).toHaveClass('fc-flipped');
    fireEvent.click(screen.getByText('Next →'));
    // After navigation the new card is face-up
    expect(container.querySelector('.fc-card')).not.toHaveClass('fc-flipped');
  });

  it('progress bar width updates when navigating', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    const bar = container.querySelector('.fc-progress-bar');
    expect(bar.style.width).toBe(`${(2 / 3) * 100}%`);
  });
});

describe('FlashcardDeck — flip', () => {
  it('clicking the card adds fc-flipped class', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    expect(card).not.toHaveClass('fc-flipped');
    fireEvent.click(card);
    expect(card).toHaveClass('fc-flipped');
  });

  it('clicking the card again removes fc-flipped class', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.click(card);
    fireEvent.click(card);
    expect(card).not.toHaveClass('fc-flipped');
  });

  it('card aria-label updates when flipped', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.click(card);
    expect(card).toHaveAttribute('aria-label', 'Showing answer. Press to flip back.');
  });

  it('grade buttons are hidden when card is face-up', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.queryByText('Got it ✓')).not.toBeInTheDocument();
    expect(screen.queryByText('Review again ↩')).not.toBeInTheDocument();
  });

  it('grade buttons appear after flipping', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(container.querySelector('.fc-card'));
    expect(screen.getByText('Got it ✓')).toBeInTheDocument();
    expect(screen.getByText('Review again ↩')).toBeInTheDocument();
  });

  it('pressing Enter on the card flips it', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(card).toHaveClass('fc-flipped');
  });

  it('pressing Space on the card flips it', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.keyDown(card, { key: ' ' });
    expect(card).toHaveClass('fc-flipped');
  });

  it('pressing an unhandled key on the card does nothing', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    fireEvent.keyDown(card, { key: 'Tab' });
    expect(card).not.toHaveClass('fc-flipped');
  });
});

describe('FlashcardDeck — shuffle and reset', () => {
  it('Reset returns to card 1 in original order', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('Shuffle resets to position 1 / 3', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Shuffle'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });
});

describe('FlashcardDeck — self-grade', () => {
  it('"Got it ✓" advances to next card and clears flip', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Got it ✓'));
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
    expect(container.querySelector('.fc-card')).not.toHaveClass('fc-flipped');
  });

  it('"Review again ↩" advances to next card', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
  });

  it('shows completion screen after all cards are graded', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    for (let i = 0; i < CARDS.length; i++) {
      fireEvent.click(container.querySelector('.fc-card'));
      fireEvent.click(screen.getByText('Got it ✓'));
    }
    expect(screen.getByText('Session complete!')).toBeInTheDocument();
  });

  it('completion screen shows correct known/review counts', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Got it ✓'));
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));
    expect(screen.getByText(/1 known/)).toBeInTheDocument();
    expect(screen.getByText(/2 to review/)).toBeInTheDocument();
  });

  it('shows singular "card" text when exactly 1 card needs review', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    // Grade first two as known, last one as again
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Got it ✓'));
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Got it ✓'));
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));
    expect(screen.getByText(/Review 1 missed card$/)).toBeInTheDocument();
  });

  it('Review missed button appears when some cards are graded again', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    for (let i = 0; i < CARDS.length; i++) {
      fireEvent.click(container.querySelector('.fc-card'));
      fireEvent.click(screen.getByText('Review again ↩'));
    }
    expect(screen.getByText(/Review 3 missed cards/)).toBeInTheDocument();
  });

  it('Review missed button is absent when all cards are known', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    for (let i = 0; i < CARDS.length; i++) {
      fireEvent.click(container.querySelector('.fc-card'));
      fireEvent.click(screen.getByText('Got it ✓'));
    }
    expect(screen.queryByText(/Review \d+ missed/)).not.toBeInTheDocument();
  });

  it('clicking "Review missed" starts a new deck with only the missed cards', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Got it ✓'));            // card 1 known
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));       // card 2 again
    fireEvent.click(container.querySelector('.fc-card'));
    fireEvent.click(screen.getByText('Review again ↩'));       // card 3 again
    // Completion screen visible
    fireEvent.click(screen.getByText(/Review 2 missed cards/));
    // Should reset to a 2-card deck at position 1
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
    expect(screen.queryByText('Session complete!')).not.toBeInTheDocument();
  });

  it('Start over resets the deck from completion screen', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    for (let i = 0; i < CARDS.length; i++) {
      fireEvent.click(container.querySelector('.fc-card'));
      fireEvent.click(screen.getByText('Got it ✓'));
    }
    fireEvent.click(screen.getByText('Start over'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.queryByText('Session complete!')).not.toBeInTheDocument();
  });
});

describe('FlashcardDeck — keyboard shortcuts', () => {
  it('ArrowRight navigates to next card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
  });

  it('ArrowLeft navigates to previous card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('Space flips the card', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: ' ' });
    expect(container.querySelector('.fc-card')).toHaveClass('fc-flipped');
  });

  it('ArrowRight does not go past the last card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'ArrowRight' }); // already at last
    expect(screen.getByText('3 / 3')).toBeInTheDocument();
  });

  it('ArrowLeft does not go before the first card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: 'ArrowLeft' }); // already at first
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('global handler ignores unrecognised keys', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.keyDown(window, { key: 'Escape' }); // not ArrowRight/Left/Space
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.queryByText('fc-flipped')).not.toBeInTheDocument();
  });

  it('global handler ignores keypresses on role=button elements', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    // Fire ArrowRight on the card element (role=button) — global handler should skip it
    fireEvent.keyDown(card, { key: 'ArrowRight' });
    expect(screen.getByText('1 / 3')).toBeInTheDocument(); // no navigation happened
  });
});
