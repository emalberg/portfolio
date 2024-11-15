'use client';
import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ProjectCard from '../project_card/ProjectCard';
import {
  CardContainer,
  CardsContainer,
  Carousel,
  NextButton,
  PreviousButton,
} from './ProjectCarousel.styles';

export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(345);
  const [cardSpacing, setCardSpacing] = useState(16);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    if (isSmallScreen) {
      setVisibleCards(1);
      setCardWidth(240);
      setCardSpacing(12);
    } else if (isMediumScreen) {
      setVisibleCards(2);
      setCardWidth(300);
      setCardSpacing(14);
    } else if (isLargeScreen) {
      setVisibleCards(4);
      setCardWidth(345);
      setCardSpacing(16);
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  // Duplicate the projects array for infinite scrolling
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedProjects.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicatedProjects.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <Carousel
      data-testid='project-carousel'
      visiblecards={visibleCards}
      cardwidth={cardWidth}
      cardspacing={cardSpacing}>
      <PreviousButton
        onClick={handlePrev}
        aria-label='Previous Project'
        color='secondary'
        size='large'>
        <ChevronLeft fontSize='large' />
      </PreviousButton>
      <CardsContainer
        currentindex={currentIndex}
        cardwidth={cardWidth}
        cardspacing={cardSpacing}
        duplicatedprojects={duplicatedProjects}>
        {duplicatedProjects.map((project, index) => (
          <CardContainer
            data-testid='project-card'
            key={index}
            cardwidth={cardWidth}
            cardspacing={cardSpacing}
            duplicatedprojects={duplicatedProjects}
            index={index}>
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
            />
          </CardContainer>
        ))}
      </CardsContainer>
      <NextButton
        onClick={handleNext}
        aria-label='Next Project'
        color='secondary'
        size='large'>
        <ChevronRight fontSize='large' />
      </NextButton>
    </Carousel>
  );
}
