import React, { FC, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import SectionEnum from '../../../enums/SectionEnum';
import useIntersection from '../../../hooks/useIntersection';
import { setSection } from '../../../store/reducers/ActionCreators';

interface SectionProps {
  id: SectionEnum;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersect = useIntersection(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isIntersect) {
      window.location.href = `#${id}`;
      dispatch(setSection(id));
    }
  }, [isIntersect, id, dispatch]);

  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        height: '100vh',
        scrollSnapAlign: 'start',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
