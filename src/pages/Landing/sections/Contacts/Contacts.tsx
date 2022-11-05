import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Map from './Map';

const Contacts: FC = () => {
  return (
    <Box>
      <Title text="Наши контакты" />
      <Map />
      <Typography>copyright</Typography>
    </Box>
  );
};

export default Contacts;
