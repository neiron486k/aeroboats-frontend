import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';

import setupTheme from './config/theme';
import Landing from './pages/Landing';

const theme = setupTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
};

export default App;
