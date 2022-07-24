import React, { FC, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Catalog from './sections/Catalog';
import Home from './sections/Home';
import About from './sections/About';
import Contacts from './sections/Contacts';

const App: FC = () => {
  useEffect(() => {});

  return (
    <>
      <CssBaseline />
      <Header />
      <Home />
      <Catalog />
      <About />
      <Contacts />
    </>
  );
};

export default App;
