'use client';
import { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Carousel,
  DividerContainer,
  LeftButtonContainer,
  Logos,
  RightButtonContainer,
  StyledDivider,
  StyledIconButton,
} from './SkillsCarousel.styles';

export default function SkillsCarousel({ logos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isBelowMediumScreen = useMediaQuery(
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const prevLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const nextLogo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  const visibleLogos = [];

  const visibleLogoCount = isSmallScreen
    ? 2
    : isBelowMediumScreen
    ? 2
    : isLargeScreen
    ? 5
    : 3;

  for (let i = 0; i < visibleLogoCount; i++) {
    const index = (currentIndex + i) % logos.length;

    visibleLogos.push(logos[index]);
  }

  return (
    <Carousel elevation={5}>
      <DividerContainer>
        <StyledDivider />
      </DividerContainer>
      <Box textAlign='center' py={2}>
        <Typography variant='h5' fontWeight={700} color='secondary'>
          Skills:
        </Typography>
      </Box>
      <LeftButtonContainer>
        <StyledIconButton aria-label='Previous' size='small' onClick={prevLogo}>
          <ArrowBackIosNewIcon />
        </StyledIconButton>
      </LeftButtonContainer>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'>
        {visibleLogos.map((logo, index) => (
          <Box key={index} mx={{ xs: 1, lg: 2.5 }}>
            <Logos src={logo.src} alt={logo.alt} width={125} height={125} />
          </Box>
        ))}
      </Box>
      <RightButtonContainer>
        <StyledIconButton aria-label='Previous' size='small' onClick={nextLogo}>
          <ArrowForwardIosIcon />
        </StyledIconButton>
      </RightButtonContainer>
    </Carousel>
  );
}
