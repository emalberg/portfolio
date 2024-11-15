'use client';
import styled from '@emotion/styled';
import { Box, Divider, IconButton, Paper } from '@mui/material';
import Image from 'next/image';

export const Carousel = styled(Paper)(({}) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid #ccc',
  position: 'relative',
  maxWidth: '100%',
  height: '220px',
  background:
    'linear-gradient(270deg, #D9E3F0 0%, #EBEEF2 25.5%, #FFFFFF 52%, #EBEEF2 77.5%, #D9E3F0 100%)',
}));

export const DividerContainer = styled(Box)(({}) => ({
  backgroundColor: 'blue',
  margin: '0px',
  padding: '0px',
  '& hr': { margin: '0px', borderRadius: '10px, 10px, 0px, 0px' },
}));

export const StyledDivider = styled(Divider)(({}) => ({
  border: 'none',
  background:
    'linear-gradient(270deg, #267373 0%, #388B8B 25.5%, #4CA3A3 52%, #388B8B 77.5%, #267373 100%)',
  height: '22px',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  margin: '8px 0',
  alignSelf: 'flex-start',
}));

export const LeftButtonContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '65%',
  left: 0,
  transform: 'translate(-45%, -55%)',
  zIndex: 1,
  '& svg': {
    marginLeft: '14px',
  },
}));

export const RightButtonContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '65%',
  right: 0,
  transform: 'translate(45%, -55%)',
  zIndex: 1,
  '& svg': {
    marginRight: '14px',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  width: '60px',
  height: '60px',
}));

export const Logos = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  margin: '0 auto 0 auto',

  [theme.breakpoints.down('sm')]: {
    width: '110px',
    height: '150px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '90px',
    height: '100px',
  },
}));
