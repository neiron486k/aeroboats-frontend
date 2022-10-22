import { AppBar, Avatar, Container, Link, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { FC } from 'react';

import logo from '../assets/images/logo.png';

const Header: FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const position = trigger ? 'fixed' : 'relative';
  const elevation = trigger ? 2 : 0;

  return (
    <AppBar elevation={elevation} position={position} sx={{ background: '#fff', color: '#000' }}>
      <Container>
        <Toolbar>
          <Avatar src={logo} />
          <Typography sx={{ flexGrow: 1, ml: 1 }} variant="h4">
            AeroGlisser
          </Typography>
          <Link href="tel: +79110388737" underline="none" variant="body1">
            +79110388737
          </Link>
          <Link
            href="mailto: info@aeroglissers.ru"
            underline="none"
            variant="body1"
            sx={{
              ml: 1,
              mr: 2,
            }}
          >
            info@aeroglissers.ru
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
