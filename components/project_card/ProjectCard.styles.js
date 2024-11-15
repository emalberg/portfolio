'use client';
import styled from '@emotion/styled';
import { Card, Box, Button } from '@mui/material';

export const CardContainer = styled(Card)(({}) => ({
  maxWidth: '345px',
  position: 'relative',
  overflow: 'hidden',
}));

export const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(125deg, rgba(${theme.palette.primary.main
    .replace('#', '')
    .match(/.{2}/g)
    .map((c) => parseInt(c, 16))
    .join(',')}, 0.7), rgba(0, 0, 0, 0.7))`,
  opacity: 0,
  transition: 'opacity 0.8s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '&:hover': { opacity: 1 },
}));

export const OverlayButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  borderColor: theme.palette.common.white,
  color: theme.palette.common.white,
  transition: 'all 0.3s ease',
  '&:hover': {
    variant: 'contained',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderColor: theme.palette.secondary.main,
  },
}));
