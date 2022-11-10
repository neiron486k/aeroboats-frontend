import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import Phone from '../../../../components/Phone';
import Map from './Map';

const Contacts: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ background: '#f1f1f1', pt: 10, pb: matches ? 0 : 10 }}>
      <Container sx={{ padding: matches ? 0 : 2 }}>
        <Grid container>
          <Grid item sm={3} xs={6} sx={{ padding: matches ? 2 : 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Часы работы:
            </Typography>
            <Typography color="text.secondary">пн - пт 09:00 - 19:00</Typography>
            <Typography color="text.secondary">сб 10:00 - 19:00</Typography>
            <Typography color="text.secondary">вс 10:00 - 19:00</Typography>
          </Grid>
          <Grid item sm={3} xs={6} sx={{ display: 'flex', flexDirection: 'column', padding: matches ? 2 : 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Контакты:
            </Typography>
            <Phone value="+79046001624" sx={{ color: 'text.secondary' }} />
            <Phone value="+79046001624" sx={{ color: 'text.secondary' }} />
          </Grid>
          <Grid item sm={6} xs={12} height="30vh" pt={matches ? 2 : 0}>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
