import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import SectionEnum from '../../enums/SectionEnum';

export interface MenuItemProps {
  to: SectionEnum;
  title: string;
  active: boolean;
  handleSection: (section: SectionEnum) => void;
}

const MenuItem: FC<MenuItemProps> = ({ to, title, active, handleSection }) => {
  return (
    <Box>
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
        <Link to={to} smooth duration={500} onClick={() => handleSection(to)}>
          {title}
        </Link>
      </Typography>
    </Box>
  );
};

export default MenuItem;
