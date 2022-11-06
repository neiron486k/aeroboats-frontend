import { Box } from '@mui/material';
import React, { FC } from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: string;
}

const defaultProps = {
  background: '#fff',
};

const Section: FC<SectionProps> = ({ children, background = '' }) => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 10,
        background: `${background}`,
      }}
    >
      {children}
    </Box>
  );
};

Section.defaultProps = defaultProps;

export default Section;
