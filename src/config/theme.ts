import '@fontsource/play';
import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Play', 'Roboto', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#2e7d32',
        main: '#2e7d32',
        dark: '#005005',
        contrastText: '#fff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowX: 'hidden',
            overflowY: 'scroll',
            background: '#000',
          },
        },
      },
    },
  });

export default setupTheme;
