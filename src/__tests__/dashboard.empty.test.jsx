/**
 * Covers the `|| []` fallback branch in dashboard.js:
 *   const modules = levelData?.modules || [];
 * Triggered when LEVELS is empty (no matching level found).
 */

jest.mock('../data/levels', () => ({ LEVELS: [] }));

import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('Dashboard page — empty levels fallback', () => {
  it('renders without crashing when LEVELS is empty', () => {
    render(<Dashboard />);
    expect(screen.getByText('Training Dashboard')).toBeInTheDocument();
  });

  it('renders zero module rows when LEVELS is empty', () => {
    render(<Dashboard />);
    expect(screen.queryAllByText(/^Module \d+$/)).toHaveLength(0);
  });
});
