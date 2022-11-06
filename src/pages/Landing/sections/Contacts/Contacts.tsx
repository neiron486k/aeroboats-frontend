import { Box } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Map from './Map';

const Contacts: FC = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Title text="Наши контакты" />
      <Map />
    </Box>
  );
};

export default Contacts;
