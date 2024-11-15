'use client';
import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({}) => ({
  width: '100vw',
  background:
    'linear-gradient(270deg, #267373 0%, #388B8B 25.5%, #4CA3A3 52%, #388B8B 77.5%, #267373 100%)',
  margin: 0,
}));

export const StyledToolBar = styled(Toolbar)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
}));
