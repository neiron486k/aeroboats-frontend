import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Jura', 'Roboto', 'Arial', 'sans-serif'].join(','),
    },
  });

export default setupTheme;
