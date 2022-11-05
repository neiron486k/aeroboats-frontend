import { AppBar, Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Map from './Map';

const Contacts: FC = () => {
  return (
    <Box>
      <Title text="Наши контакты" />
      <Map />
      <AppBar position="relative" color="secondary">
        <Container>
          <Typography>Телефоны</Typography>
          <Typography>+79046001624</Typography>
          <Typography>+79046001135</Typography>
          <Typography>+79110388737</Typography>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Contacts;
