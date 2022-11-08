import { Box } from '@mui/material';
import React, { FC } from 'react';

import Header from '../../components/Header';
import Contacts from './sections/Contacts/Contacts';
import Hero from './sections/Hero';
import Products from './sections/Products';

const Landing: FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Products />
      <Contacts />
    </Box>
  );
};

export default Landing;
