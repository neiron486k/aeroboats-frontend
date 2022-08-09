import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React, { FC } from 'react';

interface TitleProps {
  children: React.ReactNode;
  variant: Variant;
}

const Title: FC<TitleProps> = ({ children, variant }) => {
  return (
    <Typography variant={variant} sx={{ mb: 1, width: '100%', textAlign: 'center' }}>
      {children}
    </Typography>
  );
};

export default Title;
