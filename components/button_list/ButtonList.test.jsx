import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonList from './ButtonList';

describe('ButtonList Component', () => {
  it('renders a list of buttons', async () => {
    render(<ButtonList />);

    // Check if the list is in the document
    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    // Check if the list contains 3 buttons
    const buttons = await screen.findAllByRole('button');
    expect(buttons).toHaveLength(3);

    // Check if the buttons have the correct text
    expect(buttons[0]).toHaveTextContent('Who I am');
    expect(buttons[1]).toHaveTextContent('My Skills');
    expect(buttons[2]).toHaveTextContent('My Work');
  });
});
