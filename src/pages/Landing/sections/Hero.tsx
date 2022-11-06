import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import jumbo from '../../../assets/images/jumbo.jpg';

const Hero: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

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
        variant="h2"
        sx={{
          color: 'primary.contrastText',
          p: 1,
          background: theme.palette.primary.main,
          fontSize: matches ? '2rem' : '3rem',
        }}
      >
        Аэролодки с повышенной проходимостью
      </Typography>
      <Typography
        sx={{
          mt: 1,
          color: 'primary.contrastText',
          p: 1,
          background: theme.palette.primary.main,
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
