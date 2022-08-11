import { Fade, Grid, Slide, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const matches = useMediaQuery<boolean>(theme.breakpoints.down('md'));

  return (
    <>
      <Grid
        item
        md={8}
        xs={6}
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
        <Slide in={show} timeout={timeout} direction={rightImage ? 'left' : 'right'}>
          <Typography
            variant={matches ? 'h5' : 'h3'}
            component="div"
            sx={{
              mixBlendMode: 'screen',
              background: '#fff',
              p: 2,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              width: matches ? '100%' : 'auto',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        </Slide>
      </Grid>
      <Grid item md={4} xs={6} p={2} order={rightImage ? 1 : 2}>
        <Fade in={show} timeout={timeout}>
          <Typography>{text}</Typography>
        </Fade>
      </Grid>
    </>
  );
};

export default AboutItem;
