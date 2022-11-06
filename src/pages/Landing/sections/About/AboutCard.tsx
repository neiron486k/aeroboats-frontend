import { Box, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

interface AboutCardProps {
  image: string;
  title: string;
  text: string;
}

const AboutCard: FC<AboutCardProps> = ({ image, title, text }) => {
  const [hover, setHover] = useState<boolean>(false);
  const height = hover ? '100%' : '0%';

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        height: '100%',
        border: 1,
        borderColor: 'primary.main',
        background: `url(${image}) center center/cover no-repeat`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          background: (theme) => theme.palette.primary.dark,
          color: (theme) => theme.palette.primary.contrastText,
          p: 1,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          overflow: 'hidden',
          background: `rgba(0, 0, 0, .8)`,
          top: 0,
          width: '100%',
          transition: 'height .3s',
          height: `${height}`,
        }}
      >
        <Typography variant="body2" color="primary.contrastText" p={2}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutCard;