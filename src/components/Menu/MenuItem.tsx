import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import SectionEnum from '../../enums/SectionEnum';

export interface MenuItemProps {
  to: SectionEnum;
  title: string;
  active: boolean;
  handleSection: (section: SectionEnum) => void;
}

const MenuItem: FC<MenuItemProps> = ({ to, title, active, handleSection }) => {
  return (
    <Box onClick={() => handleSection(to)}>
      <Typography
        color={active ? 'red' : 'white'}
        variant="h4"
        sx={{
          textAlign: 'center',
          transition: 'color .5s ease',
          ':hover': {
            color: 'red',
            cursor: 'pointer',
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MenuItem;
