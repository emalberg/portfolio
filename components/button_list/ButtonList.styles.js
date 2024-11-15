'use client';
import styled from '@emotion/styled';
import { Button, List } from '@mui/material';

export const StyledList = styled(List)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  margin: 0,
}));

export const ListButtons = styled(Button)(({}) => ({
  width: '100px',
  textWrap: 'nowrap',
}));
