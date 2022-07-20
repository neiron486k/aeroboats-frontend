import React, { FC } from 'react';
import { Box } from '@mui/material';

interface SectionProps {
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <Box sx={{ height: '100vh' }}>{children}</Box>;
};

export default Section;
