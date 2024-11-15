import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Socials from './Socials';

describe('Socials Component', () => {
  it('renders the Socials component', () => {
    render(<Socials />);

    // Check if the Socials component is in the document
    const socialsElement = screen.getByRole('button', { name: 'Linked In' });
    expect(socialsElement).toBeInTheDocument();
  });

  it('renders LinkedIn and Email icons', () => {
    render(<Socials />);

    // Check if the LinkedIn icon is rendered
    const linkedInButton = screen.getByRole('button', { name: 'Linked In' });
    expect(linkedInButton).toBeInTheDocument();

    // Check if the Email icon is rendered
    const emailButton = screen.getByRole('button', { name: 'Email' });
    expect(emailButton).toBeInTheDocument();
  });

  it('has correct aria-labels for icons', () => {
    render(<Socials />);

    // Check aria-label for LinkedIn icon
    const linkedInButton = screen.getByRole('button', { name: 'Linked In' });
    expect(linkedInButton).toHaveAttribute('aria-label', 'Linked In');

    // Check aria-label for Email icon
    const emailButton = screen.getByRole('button', { name: 'Email' });
    expect(emailButton).toHaveAttribute('aria-label', 'Email');
  });
});
