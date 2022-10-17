import { Box } from '@mui/material';
import React, { FC } from 'react';

import Header from '../../components/Header';
import Section from '../../components/Section';
import sections from '../../routes/sections';

const Landing: FC = () => {
  return (
    <Box>
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
