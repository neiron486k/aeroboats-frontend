import { Box, Container, Grid } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Map from './Map';

const Contacts: FC = () => {
  return (
    <Box sx={{ pt: 10, background: '#f1f1f1' }}>
      <Title text="Наши контакты" />
      <Container sx={{ pt: 10 }}>
        <Grid container>
          <Grid item sm={6}>
            1
          </Grid>
          <Grid item sm={6}>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
