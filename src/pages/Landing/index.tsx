import { Box } from '@mui/material';
import React, { FC } from 'react';

import Header from '../../components/Header';
import Section from '../../components/Section';
import sections from '../../routes/sections';

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
