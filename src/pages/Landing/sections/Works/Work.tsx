import { Box } from '@mui/material';
import React, { FC } from 'react';

import WorkInterface from '../../../../contracts/WorkInterface';

interface WorkProps {
  item: WorkInterface;
  onClick: (item: WorkInterface) => void;
}

const Work: FC<WorkProps> = ({ item, onClick }) => {
  return (
    <Box p={1} onClick={() => onClick(item)}>
      <Box
        sx={{
          height: '30vh',
          background: `url(${item.image}) center center / cover no-repeat`,
        }}
      />
    </Box>
  );
};

export default Work;
