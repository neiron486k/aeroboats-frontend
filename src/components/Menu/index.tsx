import React, { FC, useState } from 'react';
import { Box, IconButton, Modal, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SectionEnum from '../../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSection } from '../../store/reducers/ActionCreators';
import MenuItem from './MenuItem';

const menuItems = [
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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {menuItems.map((item, index) => {
            const slideDirection = index % 2 === 0 ? 'left' : 'right';
            const active = item.to === section;

            return (
              <Slide key={item.to} direction={slideDirection} in={open} timeout={500}>
                <div>
                  <MenuItem {...item} active={active} handleSection={handleSection} />
                </div>
              </Slide>
            );
          })}
        </Box>
      </Modal>
    </Box>
  );
};

export default Menu;
