'use client';
import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export const HeroContainer = styled(Box)(({}) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  backgroundColor: 'black',
}));

export const HeroImage = styled(Image)(({}) => ({
  objectFit: 'cover',
}));

export const ContentContainer = styled(Container)(({}) => ({
  paddingTop: 4,
  paddingBottom: 4,
  marginLeft: 20,
  marginRight: 20,
  zIndex: 1,
}));

export const StyledHeader = styled(Typography)(({}) => ({
  mb: 2,
  background: 'linear-gradient(75deg, #26a69a, #00695c, #00796b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '4px 4px 8px rgba(255, 255, 255, 0.3)',
}));

export const ParagraphsContainer = styled(Box)(({ theme, isSmallScreen }) => ({
  display: 'flex',
  flexDirection: isSmallScreen ? 'column' : 'row',
  justifyContent: 'flex-start',
  alignItems: isSmallScreen ? 'center' : 'center',
  gap: isSmallScreen ? '20px' : '50px',
  width: isSmallScreen ? '100%' : '75vw',
  paddingLeft: isSmallScreen ? '0' : '5px',
  paddingBottom: '100px',

  '& .MuiDivider-root': {
    backgroundColor: 'white',
    borderRightWidth: isSmallScreen ? 0 : 5,
    borderBottomWidth: isSmallScreen ? 2 : 0,
    [theme.breakpoints.down('lg')]: {
      marginLeft: isSmallScreen ? 0 : 25,
      marginRight: isSmallScreen ? 0 : 30,
    },
  },
}));
