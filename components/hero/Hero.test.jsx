import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  const mockProps = {
    name: 'Erich Malberg',
    bgImage: '/test-image.jpg', // Mock URL for the image
    about1: 'This is the professional about me section.',
    about2: 'This is the non-professional about me section.',
  };

  it('renders the hero component', async () => {
    render(<Hero {...mockProps} />);
    const heroElement = await screen.findByTestId('Hero');
    expect(heroElement).toBeInTheDocument();
  });

  it('renders the background image', async () => {
    render(<Hero {...mockProps} />);
    const backgroundImage = await screen.findByRole('img', {
      name: 'Background',
    });
    expect(backgroundImage).toBeInTheDocument();
  });

  it('renders the title with the correct text', async () => {
    render(<Hero {...mockProps} />);
    const title = await screen.findByRole('heading', {
      name: mockProps.name,
    });
    expect(title).toBeInTheDocument();
  });

  it('renders the professional about section text', async () => {
    render(<Hero {...mockProps} />);
    const professionalText = await screen.findByText(mockProps.about1);
    expect(professionalText).toBeInTheDocument();
  });

  it('renders the non-professional about section text', async () => {
    render(<Hero {...mockProps} />);
    const nonProfessionalText = await screen.findByText(mockProps.about2);
    expect(nonProfessionalText).toBeInTheDocument();
  });
});
