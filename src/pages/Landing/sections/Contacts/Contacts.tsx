import { Box, Container, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

import Email from '../../../../components/Email';
import Phone from '../../../../components/Phone';
import Map from './Map';

const Contacts: FC = () => {
  return (
    <Box sx={{ position: 'relative', pb: 10, pt: 10 }}>
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', bottom: 0, zIndex: 1 }}>
        <Map />
      </Box>
      <Container
        sx={{
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'inline-block' }}>
          <Paper
            sx={{
              background: '#fff',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography gutterBottom variant="h6" component="div" align="center">
              Контакты
            </Typography>
            <Phone value="+79046001624" />
            <Email value="info@aeroglissers.ru" />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
