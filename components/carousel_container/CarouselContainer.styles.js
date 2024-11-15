'use client';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SkillsContainer = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  zIndex: 3,
  transform: 'translate(0, -80px)',
}));

export const ProjectContainer = styled(Box)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
}));
