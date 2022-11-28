import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import jumbo from '../../../assets/landing/images/jumbo.jpg';
import Order from '../../../components/Order';

const Hero: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: '60vh',
        background: `linear-gradient(to bottom, transparent, #111), url(${jumbo}) center center/cover no-repeat`,
      }}
    >
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'primary.contrastText',
            textTransform: 'uppercase',
            fontWeight: 500,
            fontSize: matches ? '2rem' : '3rem',
          }}
        >
          Аэролодки с повышенной проходимостью
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'primary.contrastText',
            p: 1,
          }}
        >
          Снег, лед, вода – не имеет значения!
        </Typography>
        <Order />
      </Container>
    </Box>
  );
};

export default Hero;
