import React, { FC } from 'react';
import { Box } from '@mui/material';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, children }) => {
  return (
    <Box
      id={id}
      sx={{
        height: '100vh',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
