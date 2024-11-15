'use client';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SocialsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(${theme.palette.primary.main
    .replace('#', '')
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .join(', ')}, 0.3)`,
}));
