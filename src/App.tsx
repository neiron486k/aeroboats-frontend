import React, { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Landing from './pages/Landing';
import setupTheme from './theme';

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
