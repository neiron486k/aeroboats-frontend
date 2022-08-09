import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';

const About: FC = () => {
  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid
        item
        md={8}
        sx={{
          background: 'url(https://picsum.photos/200/300)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '50%',
        }}
      />
      <Grid item md={4} p={2}>
        <Title variant="h4">О нас</Title>
        <Typography>
          Какое-то описание тут о том кто мы и наши достижения, что с нами хорошо работать и заказывать у нас лодки
        </Typography>
      </Grid>
      <Grid item md={4} p={2}>
        <Title variant="h4">Что мы делаем</Title>
        <Typography>Какое-то описание тут о том что мы делаем</Typography>
      </Grid>
      <Grid
        item
        md={8}
        sx={{
          background: 'url(https://picsum.photos/200/300)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '50%',
        }}
      />
    </Grid>
  );
};

export default About;
