import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../components/Question';

describe('Question', () => {
  it('renders children', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    expect(screen.getByText('What is ICS?')).toBeInTheDocument();
  });

  it('hides the answer by default', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    expect(screen.queryByText('The answer')).not.toBeInTheDocument();
  });

  it('shows "Show answer" button initially', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    expect(screen.getByText('Show answer')).toBeInTheDocument();
  });

  it('reveals the answer when "Show answer" is clicked', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    fireEvent.click(screen.getByText('Show answer'));
    expect(screen.getByText('The answer')).toBeInTheDocument();
  });

  it('button text changes to "Hide answer" after reveal', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    fireEvent.click(screen.getByText('Show answer'));
    expect(screen.getByText('Hide answer')).toBeInTheDocument();
  });

  it('hides the answer again when "Hide answer" is clicked', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    fireEvent.click(screen.getByText('Show answer'));
    fireEvent.click(screen.getByText('Hide answer'));
    expect(screen.queryByText('The answer')).not.toBeInTheDocument();
  });

  it('button text returns to "Show answer" after hiding', () => {
    render(<Question answer="The answer">What is ICS?</Question>);
    fireEvent.click(screen.getByText('Show answer'));
    fireEvent.click(screen.getByText('Hide answer'));
    expect(screen.getByText('Show answer')).toBeInTheDocument();
  });
});
