'use client';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: '#009687',
    },
    secondary: {
      main: '#FF9800',
    },
    warning: {
      main: '#FFB300',
    },
    info: {
      main: '#039BE5',
    },
    success: {
      main: '#43a047',
    },
    navigation: {
      main: '#FAF9F6',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
  },
});
export default theme;
