import { AppBar, Box, Toolbar, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { FC } from 'react';

import Burger from './Navigation/Burger';
import Menu from './Navigation/Menu';

const Header: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AppBar elevation={0} position="fixed" sx={{ background: `rgba(0, 0, 0, 0)` }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>Aeroglister</Box>
        {matches ? <Menu /> : <Burger />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
