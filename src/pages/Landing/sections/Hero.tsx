import { Box, Button, Typography } from '@mui/material';
import React, { FC } from 'react';

import jumbo from '../../../assets/images/jumbo.jpg';

const Hero: FC = () => {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${jumbo}) center center/cover no-repeat`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: 'primary.contrastText',
          padding: 1,
          background: (theme) => theme.palette.primary.main,
        }}
      >
        Аэролодки с повышенной проходимостью
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 1,
          color: 'primary.contrastText',
          padding: 1,
          background: (theme) => theme.palette.primary.main,
        }}
      >
        Снег, лед, вода – не имеет значения!
      </Typography>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: 1 }}>
        Заказать
      </Button>
    </Box>
  );
};

export default Hero;
