import { Box } from '@mui/material';
import React, { FC } from 'react';

import WorkInterface from '../../../../contracts/WorkInterface';

const Work: FC<WorkInterface> = ({ image }) => {
  return (
    <Box p={1}>
      <Box
        sx={{
          height: '30vh',
          background: `url(${image}) center center / cover no-repeat`,
        }}
      />
    </Box>
  );
};

export default Work;
