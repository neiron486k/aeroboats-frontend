import { AppBar, Avatar, Container, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import logo_black from '../assets/landing/images/logo_black.png';
import logo_white from '../assets/landing/images/logo_white.png';
import Email from './Email';
import Phone from './Phone';

interface HeaderProps {
  dark: boolean;
}

const Header: FC<HeaderProps> = ({ dark }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const position = trigger ? 'fixed' : 'relative';
  const elevation = trigger ? 2 : 0;
  const logo = dark ? logo_white : logo_black;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      elevation={elevation}
      position={position}
      sx={{ background: dark ? '#000' : '#fff', color: dark ? '#fff' : '#000' }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: theme.spacing(2),
          pb: theme.spacing(2),
        }}
      >
        <Link
          to="/"
          style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Avatar src={logo} sx={{ mr: theme.spacing(1) }} />
          <Typography variant={matches ? 'h6' : 'h4'}>AeroGlissers</Typography>
        </Link>
        <Phone value="+79046001624" sx={{ mr: matches ? 0 : theme.spacing(1) }} />
        {!matches && <Email value="boss.kletsin1@mail.ru" />}
      </Container>
    </AppBar>
  );
};

export default Header;
