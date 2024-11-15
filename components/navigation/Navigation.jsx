'use client';
import ButtonList from '../button_list/ButtonList';
import { StyledAppBar, StyledToolBar } from './Navigation.styles';

const buttonData = [
  {
    label: 'About Me',
    variant: 'text',
    color: 'navigation',
    onClick: () => alert('About Me Clicked'),
  },
  {
    label: 'My Projects',
    variant: 'text',
    color: 'navigation',
    onClick: () => alert('My Projects clicked'),
  },
  {
    label: 'Certs',
    variant: 'text',
    color: 'navigation',
    onClick: () => alert('Certs clicked'),
  },
];

export default function Navigation(props) {
  return (
    <StyledAppBar position='static'>
      <StyledToolBar>
        <ButtonList buttons={buttonData} />
      </StyledToolBar>
    </StyledAppBar>
  );
}
