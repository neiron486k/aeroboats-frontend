import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import setupTheme from './config/theme';
import Landing from './pages/Landing';
import Product from './pages/Product/Product';

const theme = setupTheme();

const App: FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
};

export default App;
