import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Step from '../components/Step';

describe('Step', () => {
  it('renders the title', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    expect(screen.getByText('Step One')).toBeInTheDocument();
  });

  it('hides children by default', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    expect(screen.queryByText('Content here')).not.toBeInTheDocument();
  });

  it('shows "Reveal" button initially', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    expect(screen.getByText('Reveal')).toBeInTheDocument();
  });

  it('reveals children when "Reveal" is clicked', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByText('Content here')).toBeInTheDocument();
  });

  it('button changes to "Hide" after revealing', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByText('Hide')).toBeInTheDocument();
  });

  it('hides children again when "Hide" is clicked', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    fireEvent.click(screen.getByText('Hide'));
    expect(screen.queryByText('Content here')).not.toBeInTheDocument();
  });

  it('button returns to "Reveal" after hiding', () => {
    render(<Step moduleId="m1" stepId="s1" title="Step One">Content here</Step>);
    fireEvent.click(screen.getByText('Reveal'));
    fireEvent.click(screen.getByText('Hide'));
    expect(screen.getByText('Reveal')).toBeInTheDocument();
  });
});
