'use client';
import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';

export const Carousel = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  width: '95%',
  marginTop: 'auto',
  marginBottom: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },
}));

export const PreviousButton = styled(IconButton)(({}) => ({
  position: 'absolute',
  left: '-15px',
  zIndex: 2,
}));

export const NextButton = styled(IconButton)(({}) => ({
  position: 'absolute',
  right: '-15px',
  zIndex: 2,
}));

export const CardsContainer = styled(Box)(
  ({ currentindex, cardwidth, cardspacing, duplicatedprojects }) => ({
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${currentindex * (cardwidth + cardspacing)}px)`,
    width: `${duplicatedprojects.length * (cardwidth + cardspacing)}px`,
    marginTop: 5,
    marginBottom: 5,
  })
);

export const CardContainer = styled(Box)(
  ({ cardwidth, cardspacing, duplicatedprojects, index }) => ({
    minWidth: `${cardwidth}px`,
    marginRight: index < duplicatedprojects.length - 1 ? `${cardspacing}px` : 0,
  })
);
