import React from 'react';
import { render, screen } from '@testing-library/react';
import ModuleProgress from '../components/ModuleProgress';

describe('ModuleProgress', () => {
  it('renders the "Module progress" label', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText('Module progress')).toBeInTheDocument();
  });

  it('displays the moduleId', () => {
    render(<ModuleProgress moduleId="module1" />);
    expect(screen.getByText('Module id: module1')).toBeInTheDocument();
  });

  it('displays a different moduleId correctly', () => {
    render(<ModuleProgress moduleId="module5" />);
    expect(screen.getByText('Module id: module5')).toBeInTheDocument();
  });
});
