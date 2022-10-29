import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import setupTheme from './config/theme';
import Landing from './pages/Landing';
import Product from './pages/Product';

const theme = setupTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
