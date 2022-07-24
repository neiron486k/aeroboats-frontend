import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { Box, Button, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import SectionEnum from '../../enums/SectionEnum';

interface MenuItem {
  to: SectionEnum;
  variant?: Variant;
  title: string;
}

const menuItems: MenuItem[] = [
  {
    to: SectionEnum.HOME,
    variant: 'h6',
    title: 'Aeroboats',
  },
  {
    to: SectionEnum.CATALOG,
    title: 'Каталог',
    variant: 'subtitle2',
  },
  {
    to: SectionEnum.ABOUT,
    title: 'О нас',
    variant: 'subtitle2',
  },
  {
    to: SectionEnum.CONTACTS,
    title: 'Контакты',
    variant: 'subtitle2',
  },
];

const Menu: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {menuItems.map((item) => (
        <Button color="inherit">
          <Link to={item.to} smooth duration={500} key={item.to}>
            <Typography variant={item.variant}>{item.title}</Typography>
          </Link>
        </Button>
      ))}
    </Box>
  );
};

export default Menu;
