import { Button } from '@mui/material';
import React, { FC } from 'react';

interface MenuItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ label, active, onClick }) => {
  const color = active ? 'inherit' : `rgba(255, 255, 255, .5)`;

  return (
    <Button sx={{ color: `${color}` }} onClick={onClick}>
      {label}
    </Button>
  );
};

export default MenuItem;
