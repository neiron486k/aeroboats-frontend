import { AppBar, Box, Toolbar } from '@mui/material';
import React, { FC } from 'react';

import Burger from './Navigation/Burger';

const Header: FC = () => {
  return (
    <AppBar elevation={0} position="fixed" sx={{ background: `rgba(0, 0, 0, 0)` }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>logo</Box>
        <Burger />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
