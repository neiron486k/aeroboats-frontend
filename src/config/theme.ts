import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
      secondary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflow: 'hidden',
          },
        },
      },
    },
  });

export default setupTheme;
