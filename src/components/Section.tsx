import { Box } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useDispatch } from 'react-redux';

import SectionEnum from '../enums/SectionEnum';
import { setSection } from '../store/reducers/ActionCreators';

interface SectionProps {
  id: SectionEnum;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, children }) => {
  const [ref, { entry }] = useIntersectionObserver({ threshold: 0.7 });
  const isVisible = entry && entry.isIntersecting;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      dispatch(setSection(id));
    }
  }, [isVisible, id, dispatch]);

  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        height: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
