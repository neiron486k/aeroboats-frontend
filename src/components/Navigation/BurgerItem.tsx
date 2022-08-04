import { Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { FC } from 'react';

interface BurgerItemProps {
  active: boolean;
  title: string;
  handleClick: () => void;
}

const BurgerItem: FC<BurgerItemProps> = ({ active, title, handleClick }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      variant={matches ? 'h4' : 'h2'}
      component="div"
      color={active ? 'red' : 'white'}
      onClick={handleClick}
      sx={{
        textAlign: 'center',
        transition: 'color .4s',
        ':hover': {
          cursor: 'pointer',
          color: 'red',
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default BurgerItem;
