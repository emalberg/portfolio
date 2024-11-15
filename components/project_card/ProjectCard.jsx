import { CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import {
  CardContainer,
  CardOverlay,
  OverlayButton,
} from './ProjectCard.styles';

export default function ProjectCard({ image, name, description }) {
  return (
    <CardContainer data-testid='Project-Card' elevation={5}>
      <CardMedia
        component='img'
        height='140'
        image={image}
        alt={`${name} image`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' color='text.secondary'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardOverlay data-testid='Hover-Overlay'>
        <OverlayButton variant='outlined' size='large'>
          Code
        </OverlayButton>
        <OverlayButton variant='outlined' size='large'>
          Demo
        </OverlayButton>
      </CardOverlay>
    </CardContainer>
  );
}
