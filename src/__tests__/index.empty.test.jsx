/**
 * Covers the `|| []` fallback branch in index.js:
 *   const modules = level?.modules || [];
 * Triggered when LEVELS is empty (no matching level found).
 */

jest.mock('../data/levels', () => ({ LEVELS: [] }));

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page — empty levels fallback', () => {
  it('renders without crashing when LEVELS is empty', () => {
    render(<Home />);
    expect(screen.getByText('Incurred Cost Submissions Training')).toBeInTheDocument();
  });

  it('renders zero module cards when LEVELS is empty', () => {
    render(<Home />);
    expect(screen.queryAllByText(/^Module \d+$/)).toHaveLength(0);
  });
});
