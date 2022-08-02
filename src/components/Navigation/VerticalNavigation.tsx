import React, { FC } from 'react';
import { Box } from '@mui/material';
import SectionEnum from '../../enums/SectionEnum';
import Point from './Point';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSection } from '../../store/reducers/ActionCreators';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import sections from '../../routes/sections';

const VerticalNavigation: FC = () => {
  const { isUp, isDown } = useScrollDirection();
  const { section } = useAppSelector((state) => state.landing);
  const dispatch = useAppDispatch();

  const handleSection = (nextSection: SectionEnum) => {
    dispatch(setSection(nextSection));
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5px',
        bottom: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      {sections.map((item) => {
        return <Point key={item.key} active={item.key === section} onClick={() => handleSection(item.key)} />;
      })}
    </Box>
  );
};

export default VerticalNavigation;
