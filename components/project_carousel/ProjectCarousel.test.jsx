import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCarousel from './ProjectCarousel';

describe('ProjectCarousel Component', () => {
  const mockProjects = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Project 1',
      description: 'Description 1',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Project 2',
      description: 'Description 2',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Project 3',
      description: 'Description 3',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Project 4',
      description: 'Description 4',
    },
  ];

  it('renders the ProjectCarousel component', () => {
    render(<ProjectCarousel projects={mockProjects} />);

    // Check if the ProjectCarousel is in the document
    const carouselElement = screen.getByTestId('project-carousel');
    expect(carouselElement).toBeInTheDocument();
  });

  it('renders the correct number of ProjectCard components', () => {
    render(<ProjectCarousel projects={mockProjects} />);

    // Check if the correct number of project cards are rendered
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards.length).toBe(mockProjects.length);
  });

  it('renders the left and right navigation buttons', () => {
    render(<ProjectCarousel projects={mockProjects} />);
    const prevButton = screen.getByRole('button', { name: 'Previous Project' });
    const nextButton = screen.getByRole('button', { name: 'Next Project' });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates to the next card on clicking the next button', () => {
    render(<ProjectCarousel projects={mockProjects} />);
    const nextButton = screen.getByRole('button', { name: 'Next Project' });
    const firstCard = screen.getByText('Project 1');
    expect(firstCard).toBeInTheDocument();

    fireEvent.click(nextButton);
    const secondCard = screen.getByText('Project 2');
    expect(secondCard).toBeInTheDocument();
  });

  it('navigates to the previous card on clicking the prev button', () => {
    render(<ProjectCarousel projects={mockProjects} />);
    const nextButton = screen.getByRole('button', { name: 'Next Project' });
    const prevButton = screen.getByRole('button', { name: 'Previous Project' });

    fireEvent.click(nextButton);
    const secondCard = screen.getByText('Project 2');
    expect(secondCard).toBeInTheDocument();

    fireEvent.click(prevButton);
    const firstCard = screen.getByText('Project 1');
    expect(firstCard).toBeInTheDocument();
  });
});
