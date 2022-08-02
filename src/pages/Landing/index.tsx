import React, { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import VerticalNavigation from '../../components/Navigation/VerticalNavigation';
import sections from '../../routes/sections';

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
      {sections.map((section) => (
        <section.component key={section.key} />
      ))}
    </Box>
  );
};

export default Landing;
