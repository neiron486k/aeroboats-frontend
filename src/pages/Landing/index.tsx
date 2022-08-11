import { Box } from '@mui/material';
import React, { FC } from 'react';

import Header from '../../components/Header';
import sections from '../../routes/sections';
import Section from './sections/Section';

const Landing: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        scrollSnapType: 'y mandatory',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Header />
      {sections.map((item) => (
        <Section id={item.key} key={item.key}>
          <item.component />
        </Section>
      ))}
    </Box>
  );
};

export default Landing;
