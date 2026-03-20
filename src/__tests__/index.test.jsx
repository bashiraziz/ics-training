import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  it('renders inside the Layout wrapper', () => {
    render(<Home />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders the hero title', () => {
    render(<Home />);
    expect(screen.getByText('Incurred Cost Submissions Training')).toBeInTheDocument();
  });

  it('renders the hero subtitle without em dashes', () => {
    render(<Home />);
    const sub = screen.getByText(/Master the annual incurred cost submission process/);
    expect(sub.textContent).not.toContain('—');
  });

  it('renders the Dashboard link', () => {
    render(<Home />);
    expect(screen.getByText('Go to Dashboard')).toBeInTheDocument();
  });

  it('renders the companion section text', () => {
    render(<Home />);
    expect(screen.getByText(/ICS is the third step/)).toBeInTheDocument();
  });

  it('renders FAR 31 Training companion link', () => {
    render(<Home />);
    expect(screen.getByText('FAR 31 Training — Cost Classification')).toBeInTheDocument();
  });

  it('renders Pool Rates Training companion link', () => {
    render(<Home />);
    expect(screen.getByText('Pool Rates Training — Indirect Rates')).toBeInTheDocument();
  });

  it('renders the "How it works" section', () => {
    render(<Home />);
    expect(screen.getByText('How it works')).toBeInTheDocument();
  });

  it('renders the three how-it-works steps', () => {
    render(<Home />);
    expect(screen.getByText('Choose your level')).toBeInTheDocument();
    expect(screen.getByText('Read, then study')).toBeInTheDocument();
    expect(screen.getByText('Practice and apply')).toBeInTheDocument();
  });

  it('renders the Training Modules section', () => {
    render(<Home />);
    expect(screen.getByText('Training Modules')).toBeInTheDocument();
  });

  it('renders all three level tabs', () => {
    render(<Home />);
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
  });

  it('Beginner tab is active by default', () => {
    render(<Home />);
    const beginnerTab = screen.getAllByText('Beginner').find(el => el.tagName === 'BUTTON');
    expect(beginnerTab).toHaveClass('lp-level-tab--active');
  });

  it('renders 8 module cards for beginner by default', () => {
    render(<Home />);
    const moduleNums = screen.getAllByText(/^Module \d+$/);
    expect(moduleNums).toHaveLength(8);
  });

  it('renders the first beginner module title', () => {
    render(<Home />);
    expect(screen.getByText('What Is an Incurred Cost Submission?')).toBeInTheDocument();
  });

  it('renders the beginner module description from modules.json', () => {
    render(<Home />);
    expect(screen.getByText(/Get a plain-English overview of what an Incurred Cost Submission is/)).toBeInTheDocument();
  });

  it('renders the beginner level description from modules.json', () => {
    render(<Home />);
    expect(screen.getByText(/Covers what ICS is, who must file/)).toBeInTheDocument();
  });

  it('renders the Start Beginner Module 1 link', () => {
    render(<Home />);
    expect(screen.getByText('Start Beginner Module 1')).toBeInTheDocument();
  });

  it('clicking Intermediate tab switches to intermediate modules', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByText('ICS Regulatory Foundation')).toBeInTheDocument();
  });

  it('Intermediate tab becomes active after clicking', () => {
    render(<Home />);
    const intTab = screen.getAllByText('Intermediate').find(el => el.tagName === 'BUTTON');
    fireEvent.click(intTab);
    expect(intTab).toHaveClass('lp-level-tab--active');
  });

  it('clicking Intermediate updates the start link', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByText('Start Intermediate Module 1')).toBeInTheDocument();
  });

  it('clicking Advanced tab switches to advanced modules', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Advanced'));
    expect(screen.getByText('Multi-Segment ICS Filings')).toBeInTheDocument();
  });

  it('clicking Advanced updates the start link', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Advanced'));
    expect(screen.getByText('Start Advanced Module 1')).toBeInTheDocument();
  });

  it('module cards link to the correct paths for beginner', () => {
    render(<Home />);
    const links = screen.getAllByText(/^Module \d+$/).map(el => el.closest('a'));
    expect(links[0]).toHaveAttribute('href', '/beginner/training/module-1');
    expect(links[7]).toHaveAttribute('href', '/beginner/training/module-8');
  });

  it('module cards link to correct paths after switching to intermediate', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Intermediate'));
    const links = screen.getAllByText(/^Module \d+$/).map(el => el.closest('a'));
    expect(links[0]).toHaveAttribute('href', '/intermediate/training/module-1');
  });
});
