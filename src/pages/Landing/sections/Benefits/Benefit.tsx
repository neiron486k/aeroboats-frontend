import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import BenefitInterface from './BenefitInterface';

const Benefit: FC<BenefitInterface> = ({ image, title, text }) => {
  return (
    <Box height="100%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={image} alt="" width={75} />
      <Box p={2}>
        <Typography align="center" variant="h6" component="div" gutterBottom sx={{ textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Typography align="center" color="text.secondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Benefit;
