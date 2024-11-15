'use client';
import { Typography } from '@mui/material';
import ProjectCarousel from '../project_carousel/ProjectCarousel';
import { ProjectContainer } from './CarouselContainer.styles';

export default function ProjectsCarouselContainer({ projects }) {
  return (
    <ProjectContainer>
      <Typography
        variant='h3'
        color='primary'
        fontWeight={700}
        sx={{ marginBottom: '20px' }}>
        My Projects / Work:
      </Typography>
      <ProjectCarousel projects={projects} />
    </ProjectContainer>
  );
}
