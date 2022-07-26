import React, { FC, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Box, Button, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import SectionEnum from '../../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSection } from '../../store/reducers/ActionCreators';

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
  const { section } = useAppSelector((state) => state.section);
  const dispatch = useAppDispatch();

  const handleSection = (selectedSection: SectionEnum) => {
    dispatch(setSection(selectedSection));
  };

  useEffect(() => {
    console.log(section);
  }, [section]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {menuItems.map((item) => (
        <Button color="inherit" key={item.to}>
          <Link
            to={item.to}
            smooth
            duration={500}
            key={item.to}
            onClick={() => handleSection(item.to)}
          >
            <Typography
              variant={item.variant}
              color={item.to === section ? 'red' : 'inherit'}
            >
              {item.title}
            </Typography>
          </Link>
        </Button>
      ))}
    </Box>
  );
};

export default Menu;
