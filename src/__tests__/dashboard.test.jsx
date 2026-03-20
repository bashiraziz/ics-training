import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('Dashboard page', () => {
  it('renders inside the Layout wrapper', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders the Training Dashboard heading', () => {
    render(<Dashboard />);
    expect(screen.getByText('Training Dashboard')).toBeInTheDocument();
  });

  it('renders the header description', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Choose your skill level/)).toBeInTheDocument();
  });

  it('renders all three level tabs', () => {
    render(<Dashboard />);
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
  });

  it('Beginner tab is active by default', () => {
    render(<Dashboard />);
    const tabs = screen.getAllByRole('button');
    const beginnerTab = tabs.find(t => t.textContent === 'Beginner');
    expect(beginnerTab).toHaveClass('db-level-tab--active');
  });

  it('renders the beginner level description by default', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Covers what ICS is, who must file/)).toBeInTheDocument();
  });

  it('renders the "Beginner Modules" section label', () => {
    render(<Dashboard />);
    expect(screen.getByText('Beginner Modules')).toBeInTheDocument();
  });

  it('renders 8 module rows for beginner', () => {
    render(<Dashboard />);
    const badges = screen.getAllByText(/^Module \d+$/);
    expect(badges).toHaveLength(8);
  });

  it('renders the first beginner module title', () => {
    render(<Dashboard />);
    expect(screen.getByText('What Is an Incurred Cost Submission?')).toBeInTheDocument();
  });

  it('each module row has Training, Flashcards, and Practice links', () => {
    render(<Dashboard />);
    expect(screen.getAllByText('Training')).toHaveLength(8);
    expect(screen.getAllByText('Flashcards')).toHaveLength(8);
    expect(screen.getAllByText('Practice')).toHaveLength(8);
  });

  it('Training links point to the correct beginner paths', () => {
    render(<Dashboard />);
    const trainingLinks = screen.getAllByText('Training').map(el => el.closest('a'));
    expect(trainingLinks[0]).toHaveAttribute('href', '/beginner/training/module-1');
    expect(trainingLinks[7]).toHaveAttribute('href', '/beginner/training/module-8');
  });

  it('Flashcard links point to the correct beginner paths', () => {
    render(<Dashboard />);
    const flashLinks = screen.getAllByText('Flashcards').map(el => el.closest('a'));
    expect(flashLinks[0]).toHaveAttribute('href', '/beginner/flashcards/module-1');
  });

  it('Practice links point to the correct beginner paths', () => {
    render(<Dashboard />);
    const practiceLinks = screen.getAllByText('Practice').map(el => el.closest('a'));
    expect(practiceLinks[0]).toHaveAttribute('href', '/beginner/practice/module-1');
  });

  it('renders the Start Module 1 button', () => {
    render(<Dashboard />);
    expect(screen.getByText('Start Module 1')).toBeInTheDocument();
  });

  it('Start Module 1 links to beginner module 1 by default', () => {
    render(<Dashboard />);
    const startLink = screen.getByText('Start Module 1').closest('a');
    expect(startLink).toHaveAttribute('href', '/beginner/training/module-1');
  });

  it('clicking Intermediate switches to intermediate modules', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByText('ICS Regulatory Foundation')).toBeInTheDocument();
  });

  it('Intermediate tab becomes active after clicking', () => {
    render(<Dashboard />);
    const tabs = screen.getAllByRole('button');
    const intTab = tabs.find(t => t.textContent === 'Intermediate');
    fireEvent.click(intTab);
    expect(intTab).toHaveClass('db-level-tab--active');
  });

  it('clicking Intermediate updates section label', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByText('Intermediate Modules')).toBeInTheDocument();
  });

  it('clicking Intermediate updates Start Module 1 link', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Intermediate'));
    const startLink = screen.getByText('Start Module 1').closest('a');
    expect(startLink).toHaveAttribute('href', '/intermediate/training/module-1');
  });

  it('clicking Intermediate updates description', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByText(/Go deeper on FAR 52\.216-7/)).toBeInTheDocument();
  });

  it('clicking Advanced switches to advanced modules', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Advanced'));
    expect(screen.getByText('Multi-Segment ICS Filings')).toBeInTheDocument();
  });

  it('clicking Advanced updates Start Module 1 link', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Advanced'));
    const startLink = screen.getByText('Start Module 1').closest('a');
    expect(startLink).toHaveAttribute('href', '/advanced/training/module-1');
  });

  it('clicking Advanced updates Training links to advanced paths', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Advanced'));
    const trainingLinks = screen.getAllByText('Training').map(el => el.closest('a'));
    expect(trainingLinks[0]).toHaveAttribute('href', '/advanced/training/module-1');
  });
});
