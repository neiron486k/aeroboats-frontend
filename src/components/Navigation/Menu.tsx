import React from 'react';

import SectionEnum from '../../enums/SectionEnum';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import sections from '../../routes/sections';
import { setSection } from '../../store/reducers/ActionCreators';
import scrollToSection from '../../utils/scrollToSection';
import MenuItem from './MenuItem';

const Menu = () => {
  const { section } = useAppSelector((state) => state.landing);
  const dispatch = useAppDispatch();
  const prefixKey = Math.random();

  const handleClick = (sectionId: SectionEnum) => {
    scrollToSection(sectionId);
    dispatch(setSection(sectionId));
  };

  return (
    <>
      {sections.map((item, index) => {
        const active = item.key === section;
        const key = prefixKey + index;
        return <MenuItem key={key} label={item.title} active={active} onClick={() => handleClick(item.key)} />;
      })}
    </>
  );
};

export default Menu;
