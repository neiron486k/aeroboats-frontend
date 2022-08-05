import { Grid } from '@mui/material';
import React, { FC } from 'react';

const About: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        image
      </Grid>
      <Grid item xs={12} md={5}>
        lorem ipsum
      </Grid>
    </Grid>
  );
};

export default About;
