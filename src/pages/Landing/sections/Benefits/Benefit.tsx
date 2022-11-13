import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import BenefitInterface from './BenefitInterface';

const Benefit: FC<BenefitInterface> = ({ image, text }) => {
  return (
    <Box height="100%">
      <img src={image} alt="" width={75} />
      <Typography p={2}>{text}</Typography>
    </Box>
  );
};

export default Benefit;
