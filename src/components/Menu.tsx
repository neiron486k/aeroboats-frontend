import React, { FC, useState } from 'react';
import { Link } from 'react-scroll';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import MenuIcon from '@mui/icons-material/Menu';
import SectionEnum from '../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSection } from '../store/reducers/ActionCreators';

interface MenuItem {
  to: SectionEnum;
  variant?: Variant;
  title: string;
}

const menuItems: MenuItem[] = [
  {
    to: SectionEnum.HOME,
    title: 'Домой',
    variant: 'subtitle2',
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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          height: '100vh',
          background: 'black',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <>
          {menuItems.map((item) => (
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
          ))}
        </>
      </Modal>
    </Box>
  );
};

export default Menu;
