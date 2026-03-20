/**
 * Covers the `|| []` fallback branch in index.js (line 66):
 *   const modules = modulesData[activeLevel] || [];
 * Triggered when the JSON has no entry for the active level.
 */

jest.mock('../data/modules.json', () => ({}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page — empty modules fallback', () => {
  it('renders without crashing when modulesData has no entries', () => {
    render(<Home />);
    expect(screen.getByText('Incurred Cost Submissions Training')).toBeInTheDocument();
  });

  it('renders zero module cards when level data is missing', () => {
    render(<Home />);
    expect(screen.queryAllByText(/^Module \d+$/)).toHaveLength(0);
  });
});
