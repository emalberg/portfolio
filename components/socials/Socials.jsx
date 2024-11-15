import { Box, Divider, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SocialsContainer } from './Socials.styles';

export default function Socials() {
  const theme = useTheme();

  return (
    <SocialsContainer>
      <IconButton size='large' color='secondary' aria-label='Linked In'>
        <LinkedInIcon fontSize='600px' />
      </IconButton>
      <Divider />
      <IconButton size='large' color='secondary' aria-label='Email'>
        <EmailIcon fontSize='600px' />
      </IconButton>
    </SocialsContainer>
  );
}
