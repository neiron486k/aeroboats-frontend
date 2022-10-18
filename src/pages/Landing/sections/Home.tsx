import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

import jumbo from '../../../assets/images/jumbo.jpg';

const Home: FC = () => {
  const theme = useTheme();

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
          color: theme.palette.primary.contrastText,
          padding: theme.spacing(1),
          background: theme.palette.primary.main,
        }}
      >
        Аэролодки с повышенной проходимостью
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: theme.spacing(1),
          color: theme.palette.primary.contrastText,
          padding: theme.spacing(1),
          background: theme.palette.primary.main,
        }}
      >
        Снег, лед, вода – не имеет значения!
      </Typography>
      <Button color="secondary" variant="contained" size="large" sx={{ mt: theme.spacing(1) }}>
        Заказать
      </Button>
    </Box>
  );
};

export default Home;
