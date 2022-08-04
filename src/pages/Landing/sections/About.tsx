import { Grid } from '@mui/material';
import React, { FC } from 'react';

import SectionEnum from '../../../enums/SectionEnum';
import Section from './Section';

const About: FC = () => {
  return (
    <Section id={SectionEnum.ABOUT}>
      <Grid container>
        <Grid item xs={12} md={6}>
          image
        </Grid>
        <Grid item xs={12} md={5}>
          lorem ipsum
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;
