import React from 'react';
import { render, screen } from '@testing-library/react';
import * as docusaurusRouter from '@docusaurus/router';
import ModuleProgress from '../components/ModuleProgress';

// The @docusaurus/router mock returns pathname: '/beginner/training/module-1'
// so level will always be 'beginner' in these tests.

beforeEach(() => localStorage.clear());

describe('ModuleProgress', () => {
  it('renders the module number and level', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText(/Beginner · Module 1/)).toBeInTheDocument();
  });

  it('renders a different module number', () => {
    render(<ModuleProgress moduleId="module5" />);
    expect(screen.getByText(/Module 5/)).toBeInTheDocument();
  });

  it('renders the In Progress badge', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('marks the module as visited in localStorage on mount', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(localStorage.getItem('ics-visited-beginner-module1')).toBe('1');
  });

  it('uses the level from the URL pathname', () => {
    render(<ModuleProgress moduleId="module3" />);
    expect(localStorage.getItem('ics-visited-beginner-module3')).toBe('1');
  });

  it('container has mp-bar class', () => {
    const { container } = render(<ModuleProgress moduleId="module1" />);
    expect(container.firstChild).toHaveClass('mp-bar');
  });

  it('label has mp-label class', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText(/Beginner · Module 1/)).toHaveClass('mp-label');
  });

  it('badge has mp-badge class', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText('In Progress')).toHaveClass('mp-badge');
  });

  it('falls back to "beginner" when pathname has no level segment', () => {
    jest.spyOn(docusaurusRouter, 'useLocation').mockReturnValueOnce({ pathname: '/' });
    render(<ModuleProgress moduleId="module1" />);
    expect(localStorage.getItem('ics-visited-beginner-module1')).toBe('1');
    jest.restoreAllMocks();
  });
});
