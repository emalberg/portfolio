import React, { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Divider from '../divider/Divider';
import IconButton from '../icon_button/iconButton';
import TypographyBlock from '../typography_block/typographyblock';
import { ctaSliderPropTypes } from './CTASlider.propTypes';
import topImage from '../../../assets/topbar.png';

const CTASlider = ({
  logos,

  transitionTime = 5000,

  width = '100%',

  sliderText,
}) => {
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

  useEffect(() => {
    const interval = setInterval(nextLogo, transitionTime);

    return () => clearInterval(interval); // Clear interval on unmount to prevent memory leaks
  }, [currentIndex, transitionTime]);

  const visibleLogoCount = isSmallScreen
    ? 2
    : isBelowMediumScreen
    ? 2
    : isLargeScreen
    ? 5
    : 3;

  const visibleLogos = [];

  for (let i = 0; i < visibleLogoCount; i++) {
    const index = (currentIndex + i) % logos.length;

    visibleLogos.push(logos[index]);
  }

  return (
    <Box
      sx={{
        borderRadius: '20px',

        boxShadow: '0px 0px 26px 0px #0000001A',

        overflow: 'hidden',

        border: '1px solid #ccc',

        position: 'relative',

        maxWidth: '100%',

        height: '263px',

        width: { xs: '86%', sm: '86%', md: '86%', lg: '65%' },

        background:
          'linear-gradient(270deg, #D9E3F0 0%, #EBEEF2 25.5%, #FFFFFF 52%, #EBEEF2 77.5%, #D9E3F0 100%)',
      }}>
      <Box
        sx={{
          backgroundColor: 'blue',

          m: '0px',

          padding: '0px',

          '& hr': { margin: '0px', borderRadius: '10px, 10px, 0px, 0px' },
        }}>
        <Divider backgroundImage={topImage} height='22px' />
      </Box>

      <Box textAlign='center' py={2}>
        <TypographyBlock
          headerChildren={sliderText}
          headerVariant='h5'
          headerFontWeight='700'
          headerColor='#00305E'
          headerFontFamily='Raleway'
        />
      </Box>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        py={2}
        px={4}
        sx={{
          backgroundColor:
            'linear-gradient(270deg, #D9E3F0 0%, #EBEEF2 25.5%, #FFFFFF 52%, #EBEEF2 77.5%, #D9E3F0 100%)',
        }}
        position='relative'>
        {/* Left Arrow Button */}

        <Box
          sx={{
            backgroundColor: 'secondary',

            borderRadius: '50%',

            height: '60px',

            width: '60px',

            display: 'flex',

            justifyContent: 'center',

            alignItems: 'center',

            position: 'absolute',

            top: '50%',

            left: 0, // Align with the left edge

            transform: 'translate(-45%, -55%)', // Move halfway out of the view

            zIndex: 1,

            '& svg': {
              ml: '24px',
            },
          }}>
          <IconButton
            backgroundColor='secondary'
            color='#FFFFFF'
            hasBackground
            height='68px'
            onClick={prevLogo}
            shape='circle'
            size='small'
            type='backarrow'
            width='68px'
          />
        </Box>

        {/* Logos */}

        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
          mx={isSmallScreen ? 0 : 4}>
          {visibleLogos.map((logo, index) => (
            <Box key={index} mx={isSmallScreen ? 1 : 2.5}>
              <a href={logo.href} style={{ textDecoration: 'none' }}>
                <Box
                  component='img'
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    maxWidth: '150px', // Set a fixed width for each logo

                    height: '150px', // Set a fixed height for each logo

                    objectFit: 'contain', // Ensure the logo scales within the box

                    mx: 'auto', // Centers the logo inside its container

                    '@media (max-width: 550px)': {
                      width: '110px',

                      height: '150px',
                    },

                    '@media (max-width: 350px)': {
                      width: '90px',

                      height: '100px',
                    },
                  }}
                />
              </a>
            </Box>
          ))}
        </Box>

        {/* Right Arrow Button */}

        <Box
          sx={{
            backgroundColor: 'secondary',

            borderRadius: '50%',

            height: '60px',

            width: '60px',

            display: 'flex',

            justifyContent: 'center',

            alignItems: 'center',

            position: 'absolute',

            top: '50%',

            right: 0, // Align with the right edge

            transform: 'translate(45%, -55%)', // Move halfway out of the view

            zIndex: 1,

            '& svg': {
              mr: '24px',
            },
          }}>
          <IconButton
            backgroundColor='secondary'
            color='#FFFFFF'
            hasBackground
            height='68px'
            onClick={nextLogo}
            shape='circle'
            size='small'
            type='forwardarrow'
            width='68px'
          />
        </Box>
      </Box>
    </Box>
  );
};

CTASlider.propTypes = ctaSliderPropTypes;

export default CTASlider;
