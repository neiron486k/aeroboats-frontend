import React, { FC } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Burger from './Navigation/Burger';

const Header: FC = () => {
  return (
    <AppBar elevation={0} position="fixed" sx={{ background: `rgba(0, 0, 0, 0)` }}>
      <Toolbar>
        <Burger />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
