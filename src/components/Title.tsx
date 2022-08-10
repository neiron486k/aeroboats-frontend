import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  variant: Variant;
}

const Title = React.forwardRef<HTMLDivElement, TitleProps>((props, ref) => {
  return (
    <Typography {...props} ref={ref} sx={{ mb: 1, width: '100%', textAlign: 'center' }}>
      {props.children}
    </Typography>
  );
});

export default Title;
