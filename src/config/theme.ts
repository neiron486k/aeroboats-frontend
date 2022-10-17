import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        light: '#5e92f3',
        main: '#1565c0',
        dark: '#003c8f',
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
