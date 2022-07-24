import React, { FC } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Menu from './Menu';

const Header: FC = () => {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      <Toolbar>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
