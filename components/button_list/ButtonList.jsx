'use client';
import { ListItem, Typography } from '@mui/material';
import { ListButtons, StyledList } from './ButtonList.styles';

export default function ButtonList({ buttons }) {
  if (!buttons || buttons.length === 0) {
    return (
      <Typography variant='h4' color='error' fontWeight={700}>
        No buttons available...
      </Typography>
    );
  }
  return (
    <StyledList aria-label='nav button list'>
      {buttons.map((button, index) => (
        <ListItem key={index}>
          <ListButtons
            variant={button.variant}
            color={button.color}
            onClick={button.onClick}>
            {button.label}
          </ListButtons>
        </ListItem>
      ))}
    </StyledList>
  );
}
