import { AppBar, Box, Button, Container, Link, Toolbar, Typography, useScrollTrigger, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { FC } from 'react';

import Burger from './Navigation/Burger';
import Menu from './Navigation/Menu';

const Header: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
          <Typography sx={{ flexGrow: 1 }} variant="h4">
            Aero Glisser
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="tel:+79110388737" color="inherit" underline="none">
              <Button size="large">+79110388737</Button>
            </Link>
            <Button>Заказать звонок</Button>
          </Box>
          {matches ? <Menu /> : <Burger />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
