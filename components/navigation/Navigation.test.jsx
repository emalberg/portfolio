import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders the AppBar', async () => {
    render(<Navigation />);

    // Check if the AppBar is in the document
    const appBarElement = await screen.findByRole('banner');
    expect(appBarElement).toBeInTheDocument();
  });

  it('renders the ButtonList in the AppBar', async () => {
    render(<Navigation />);

    // Check if the list is in the document
    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    // Check if the buttons are in the document
    const buttons = await screen.findAllByRole('button');
    expect(buttons).toHaveLength(3); // Expecting 3 buttons: Who I am, My Skills, My Work
  });
});
