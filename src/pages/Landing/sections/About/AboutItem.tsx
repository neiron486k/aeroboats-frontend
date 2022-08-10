import { Fade, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

interface AboutItemProps {
  show: boolean;
  image: string;
  title: string;
  text: string;
  timeout: number;
  height: string | number;
  rightImage: boolean;
}

const AboutItem: FC<AboutItemProps> = ({ show, image, title, text, timeout, height, rightImage }) => {
  return (
    <>
      <Grid
        item
        md={8}
        sx={{
          height,
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        order={!rightImage ? 1 : 2}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            mixBlendMode: 'screen',
            background: '#fff',
            p: 2,
            br: 3,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item md={4} p={2} order={rightImage ? 1 : 2}>
        <Fade in={show} timeout={timeout}>
          <Typography>{text}</Typography>
        </Fade>
      </Grid>
    </>
  );
};

export default AboutItem;
