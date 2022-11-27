import { Box } from '@mui/material';
import React, { FC } from 'react';

import Header from '../../components/Header';
import About from './sections/About';
import Benefits from './sections/Benefits/Benefits';
import Contacts from './sections/Contacts/Contacts';
import Hero from './sections/Hero';
import Products from './sections/Products/Products';

const Landing: FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Contacts />
    </Box>
  );
};

export default Landing;
