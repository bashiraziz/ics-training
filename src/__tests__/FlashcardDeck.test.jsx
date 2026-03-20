import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlashcardDeck from '../components/FlashcardDeck';

const CARDS = [
  { q: 'Question 1', a: 'Answer 1' },
  { q: 'Question 2', a: 'Answer 2' },
  { q: 'Question 3', a: 'Answer 3' },
];

describe('FlashcardDeck', () => {
  it('renders the counter showing first card', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('renders the current card question', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('renders the Question and Answer side labels', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Question')).toBeInTheDocument();
    expect(screen.getByText('Answer')).toBeInTheDocument();
  });

  it('renders flip hints', () => {
    render(<FlashcardDeck cards={CARDS} />);
    expect(screen.getByText('Click to reveal answer')).toBeInTheDocument();
    expect(screen.getByText('Click to flip back')).toBeInTheDocument();
  });

  it('renders the progress bar', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const bar = container.querySelector('.fc-progress-bar');
    expect(bar).toBeInTheDocument();
    expect(bar.style.width).toBe(`${(1 / 3) * 100}%`);
  });

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

  it('clicking Reset returns to card 1 in original order', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  it('clicking Shuffle does not change the card count', () => {
    render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Shuffle'));
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('clicking the card toggles the fc-flipped class', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    const card = container.querySelector('.fc-card');
    expect(card).not.toHaveClass('fc-flipped');
    fireEvent.click(card);
    expect(card).toHaveClass('fc-flipped');
    fireEvent.click(card);
    expect(card).not.toHaveClass('fc-flipped');
  });

  it('progress bar width updates when navigating', () => {
    const { container } = render(<FlashcardDeck cards={CARDS} />);
    fireEvent.click(screen.getByText('Next →'));
    const bar = container.querySelector('.fc-progress-bar');
    expect(bar.style.width).toBe(`${(2 / 3) * 100}%`);
  });
});
