import React, { FC } from 'react';
import Header from '../../components/Header';
import Home from './sections/Home';
import Catalog from './sections/Catalog';
import About from './sections/About';
import Contacts from './sections/Contacts';

const Landing: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Catalog />
      <About />
      <Contacts />
    </>
  );
};

export default Landing;
