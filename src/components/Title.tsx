import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography
        color="common.white"
        sx={{
          mb: 4,
          fontSize: '2rem',
          position: 'relative',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Title;
