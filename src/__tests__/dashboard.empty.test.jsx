/**
 * Covers the `|| []` fallback branch in dashboard.js (line 27):
 *   const modules = modulesData[activeLevel] || [];
 * Triggered when the JSON has no entry for the active level.
 */

jest.mock('../data/modules.json', () => ({}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('Dashboard page — empty modules fallback', () => {
  it('renders without crashing when modulesData has no entries', () => {
    render(<Dashboard />);
    expect(screen.getByText('Training Dashboard')).toBeInTheDocument();
  });

  it('renders zero module rows when level data is missing', () => {
    render(<Dashboard />);
    expect(screen.queryAllByText(/^Module \d+$/)).toHaveLength(0);
  });
});
