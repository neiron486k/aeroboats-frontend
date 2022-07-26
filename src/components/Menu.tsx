import React, { FC, useState } from 'react';
import { Link } from 'react-scroll';
import { Box, IconButton, Modal, Slide, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import MenuIcon from '@mui/icons-material/Menu';
import SectionEnum from '../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSection } from '../store/reducers/ActionCreators';

interface MenuItem {
  to: SectionEnum;
  variant: Variant;
  title: string;
}

const menuItems: MenuItem[] = [
  {
    to: SectionEnum.HOME,
    title: 'Начало',
    variant: 'h4',
  },
  {
    to: SectionEnum.CATALOG,
    title: 'Каталог',
    variant: 'h4',
  },
  {
    to: SectionEnum.ABOUT,
    title: 'О нас',
    variant: 'h4',
  },
  {
    to: SectionEnum.CONTACTS,
    title: 'Контакты',
    variant: 'h4',
  },
];

const Menu: FC = () => {
  const { section } = useAppSelector((state) => state.landing);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleSection = (selectedSection: SectionEnum) => {
    dispatch(setSection(selectedSection));
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!open && (
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
      )}
      <Modal
        open={open}
        sx={{
          height: '100vh',
          background: 'black',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          {menuItems.map((item, index) => {
            const slideDirection = index % 2 === 0 ? 'left' : 'right';

            return (
              <Slide key={item.to} direction={slideDirection} in={open} timeout={500}>
                <div>
                  <Typography
                    color={item.to === section ? 'red' : 'white'}
                    variant={item.variant}
                    sx={{
                      textAlign: 'center',
                      transition: 'color .5s ease',
                      ':hover': {
                        color: 'red',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Link to={item.to} smooth duration={500} onClick={() => handleSection(item.to)}>
                      {item.title}
                    </Link>
                  </Typography>
                </div>
              </Slide>
            );
          })}
        </div>
      </Modal>
    </Box>
  );
};

export default Menu;
