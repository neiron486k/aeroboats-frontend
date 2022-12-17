import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { plural } from './config/keywords';
import setupTheme from './config/theme';
import Landing from './pages/Landing';
import Product from './pages/Product/Product';

const theme = setupTheme();

const App: FC = () => {
  return (
    <HelmetProvider>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <Helmet>
              <meta charSet="utf-8" />
              <title>AeroGlissers - Аэролодки с повышенной проходимостью</title>
              <meta name="description" content="Аэролодки с повышенной проходимостью" />
              <meta name="keywords" content={plural.join(',')} />
              <meta property="og:title" content="Аэролодки с повышенной проходимостью" />
            </Helmet>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products/:id" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </HelmetProvider>
  );
};

export default App;
