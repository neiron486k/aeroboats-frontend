import React, { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import Home from './sections/Home';
import Catalog from './sections/Catalog';
import About from './sections/About';
import Contacts from './sections/Contacts';
import VerticalNavigation from '../../components/VerticalNavigation';

const Landing: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Header />
      <VerticalNavigation />
      <Home />
      <Catalog />
      <About />
      <Contacts />
    </Box>
  );
};

export default Landing;
