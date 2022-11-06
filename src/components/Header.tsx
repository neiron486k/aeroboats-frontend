import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';

import logo from '../assets/images/logo.png';
import Email from './Email';
import Phone from './Phone';

const Header: FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const position = trigger ? 'fixed' : 'relative';
  const elevation = trigger ? 2 : 0;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar elevation={elevation} position={position} sx={{ background: '#fff', color: '#000' }}>
      <Container>
        <Toolbar>
          <Avatar src={logo} />
          <Typography sx={{ flexGrow: 1, ml: 1 }} variant={matches ? 'h6' : 'h4'}>
            AeroGlissers
          </Typography>
          <Phone value="+79213594494" sx={{ mr: matches ? 0 : 1 }} />
          {!matches && <Email value="info@aeroglissers.ru" />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
