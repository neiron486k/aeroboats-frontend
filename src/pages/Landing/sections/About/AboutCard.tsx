import { Box, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface AboutCardProps {
  image: string;
  text: string;
}

const AboutCard: FC<AboutCardProps> = ({ image, text }) => {
  return (
    <Box height="100%" sx={{ border: 2, borderColor: 'primary.main' }}>
      <Box
        height="70%"
        sx={{
          background: `url(${image}) center center/cover no-repeat`,
        }}
      />
      <Typography
        variant="body2"
        sx={{
          height: '30%',
          color: 'text.secondary',
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default AboutCard;
