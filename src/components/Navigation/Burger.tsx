import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Modal, Slide } from '@mui/material';
import React, { FC, useState } from 'react';

import SectionEnum from '../../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import sections from '../../routes/sections';
import { setSection } from '../../store/reducers/ActionCreators';
import BurgerItem from './BurgerItem';

const Burger: FC = () => {
  const { section } = useAppSelector((state) => state.landing);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const scrollToElement = (id: SectionEnum) => {
    document.getElementById(id)?.scrollIntoView();
  };

  const handleSection = (selectedSection: SectionEnum) => {
    dispatch(setSection(selectedSection));
    setOpen(false);
    scrollToElement(selectedSection);
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
          {sections.map((item, index) => {
            const slideDirection = index % 2 === 0 ? 'left' : 'right';
            const active = item.key === section;

            return (
              <Slide key={item.key} direction={slideDirection} in={open} timeout={500}>
                <div>
                  <BurgerItem active={active} title={item.title} handleClick={() => handleSection(item.key)} />
                </div>
              </Slide>
            );
          })}
        </Box>
      </Modal>
    </Box>
  );
};

export default Burger;