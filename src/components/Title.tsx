import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Typography color="text.primary" sx={{ mb: 4, textAlign: 'center', fontSize: '2rem', textTransform: 'uppercase' }}>
      {text}
    </Typography>
  );
};

export default Title;
