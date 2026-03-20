import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Step from '../components/Step';

beforeEach(() => localStorage.clear());

describe('Step', () => {
  it('renders the title', () => {
    render(<Step title="Step One">Content here</Step>);
    expect(screen.getByText('Step One')).toBeInTheDocument();
  });

  it('hides children by default', () => {
    render(<Step title="Step One">Content here</Step>);
    expect(screen.queryByText('Content here')).not.toBeInTheDocument();
  });

  it('shows "Reveal" button initially', () => {
    render(<Step title="Step One">Content here</Step>);
    expect(screen.getByText('Reveal')).toBeInTheDocument();
  });

  it('"Reveal" button has aria-expanded=false initially', () => {
    render(<Step title="Step One">Content here</Step>);
    expect(screen.getByText('Reveal')).toHaveAttribute('aria-expanded', 'false');
  });

  it('reveals children when "Reveal" is clicked', () => {
    render(<Step title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByText('Content here')).toBeInTheDocument();
  });

  it('button changes to "Hide" after revealing', () => {
    render(<Step title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByText('Hide')).toBeInTheDocument();
  });

  it('"Hide" button has aria-expanded=true when open', () => {
    render(<Step title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByText('Hide')).toHaveAttribute('aria-expanded', 'true');
  });

  it('hides children again when "Hide" is clicked', () => {
    render(<Step title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    fireEvent.click(screen.getByText('Hide'));
    expect(screen.queryByText('Content here')).not.toBeInTheDocument();
  });

  it('button returns to "Reveal" after hiding', () => {
    render(<Step title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    fireEvent.click(screen.getByText('Hide'));
    expect(screen.getByText('Reveal')).toBeInTheDocument();
  });

  it('saves step progress to localStorage when moduleId and stepId are provided', () => {
    render(<Step moduleId="module1" stepId="1" title="Step One">Content</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(localStorage.getItem('ics-step-module1-1')).toBe('1');
  });

  it('does not write to localStorage when moduleId is absent', () => {
    render(<Step title="Step One">Content</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(localStorage.length).toBe(0);
  });

  it('container has step-card class', () => {
    const { container } = render(<Step title="Step One">Content</Step>);
    expect(container.firstChild).toHaveClass('step-card');
  });

  it('header has step-card-header class', () => {
    const { container } = render(<Step title="Step One">Content</Step>);
    expect(container.querySelector('.step-card-header')).toBeInTheDocument();
  });

  it('revealed body has step-card-body class', () => {
    const { container } = render(<Step title="Step One">Content</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(container.querySelector('.step-card-body')).toBeInTheDocument();
  });
});
