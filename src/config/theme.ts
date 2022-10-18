import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#99d066',
        main: '#689f38',
        dark: '#387002',
        contrastText: '#fff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowX: 'hidden',
            overflowY: 'scroll',
          },
        },
      },
    },
  });

export default setupTheme;
