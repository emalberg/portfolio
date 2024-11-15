import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from './ProjectCard';
import { expect } from '@storybook/test';

describe('Project Card Component', () => {
  const mockProps = {
    image: 'https://via.placeholder.com/150',
    name: 'Sample Project',
    description: 'This is a description of the sample project.',
  };
  it('renders card component', async () => {
    render(<ProjectCard {...mockProps} />);

    // Check if the AppBar is in the document
    const cardElement = await screen.findByTestId('Project-Card');
    expect(cardElement).toBeInTheDocument();
  });
  it('renders the project image with the correct alt text', async () => {
    render(<ProjectCard {...mockProps} />);
    const projectImage = await screen.findByRole('img', {
      name: /sample project image/i,
    });
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute('src', mockProps.image);
  });
  it('renders the project name', async () => {
    render(<ProjectCard {...mockProps} />);
    const projectName = await screen.findByRole('heading', {
      name: /sample project/i,
    });
    expect(projectName).toBeInTheDocument();
  });
  it('renders the project description', async () => {
    render(<ProjectCard {...mockProps} />);
    const projectDescription = await screen.findByRole('paragraph');
    expect(projectDescription).toHaveTextContent(
      /this is a description of the sample project./i
    );
  });
  it('renders the hover overlay', async () => {
    render(<ProjectCard {...mockProps} />);
    const overlayElement = await screen.getByTestId('Hover-Overlay');
    expect(overlayElement).toBeInTheDocument();
  });

  it('renders the "Code" and "Demo" buttons', async () => {
    render(<ProjectCard {...mockProps} />);
    const codeButton = screen.getByRole('button', { name: /code/i });
    const demoButton = screen.getByRole('button', { name: /demo/i });
    expect(codeButton).toBeInTheDocument();
    expect(demoButton).toBeInTheDocument();
  });
});
