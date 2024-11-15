'use client';
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Spiral from '../../public/assets/Spiral.png';
import {
  ContentContainer,
  HeroContainer,
  HeroImage,
  StyledHeader,
  ParagraphsContainer,
} from './Hero.styles';

export default function Hero({ name, bgImage = Spiral, about1, about2 }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <HeroContainer data-testid='Hero'>
      <HeroImage src={bgImage} alt='Background' quality={100} fill priority />
      <ContentContainer disableGutters>
        <StyledHeader variant='h1' fontWeight={700}>
          {name}
        </StyledHeader>
        <ParagraphsContainer isSmallScreen={isSmallScreen}>
          <Box
            sx={{
              width: isSmallScreen ? '100%' : '25vw',
              textAlign: isSmallScreen ? 'center' : 'left',
            }}>
            <Typography variant='body1' fontWeight={700} color='text.primary'>
              {about1}
            </Typography>
          </Box>
          <Divider
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            variant='middle'
            flexItem
            sx={{
              width: isSmallScreen ? '100%' : 'auto',
              margin: isSmallScreen ? '10px 0' : '0',
            }}
          />
          <Box
            sx={{
              width: isSmallScreen ? '100%' : '25vw',
              textAlign: isSmallScreen ? 'center' : 'left',
            }}>
            <Typography variant='body1' fontWeight={700} color='text.primary'>
              {about2}
            </Typography>
          </Box>
        </ParagraphsContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
