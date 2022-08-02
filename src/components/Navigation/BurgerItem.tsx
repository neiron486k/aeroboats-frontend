import React, { FC } from 'react';
import { Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface BurgerItemProps {
  active: boolean;
  text: string;
  handleClick: () => void;
}

const BurgerItem: FC<BurgerItemProps> = ({ active, text, handleClick }) => {
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
      {text}
    </Typography>
  );
};

export default BurgerItem;
