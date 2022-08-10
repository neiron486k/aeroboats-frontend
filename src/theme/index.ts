import { createTheme } from '@mui/material';

const setupTheme = () =>
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    },
  });

export default setupTheme;
