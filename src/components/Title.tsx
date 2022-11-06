import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Typography color="primary" variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
      {text}
    </Typography>
  );
};

export default Title;
