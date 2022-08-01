import React, { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import SectionEnum from '../enums/SectionEnum';
import Point from './Carousel/Point';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSection } from '../store/reducers/ActionCreators';
import { useScrollDirection } from '../hooks/useScrollDirection';

const navigationList = [SectionEnum.HOME, SectionEnum.ABOUT, SectionEnum.CATALOG, SectionEnum.CONTACTS];

const VerticalNavigation: FC = () => {
  const { isUp, isDown } = useScrollDirection();
  const { section } = useAppSelector((state) => state.landing);
  const dispatch = useAppDispatch();

  const handleSection = (selectedSection: SectionEnum) => {
    dispatch(setSection(selectedSection));
  };

  useEffect(() => {
    // @todo implement logic here for change section and move sections to parameters
  }, [isUp, isDown]);

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
      {navigationList.map((item) => {
        return <Point active={item === section} onClick={() => handleSection(item)} key={item} />;
      })}
    </Box>
  );
};

export default VerticalNavigation;
