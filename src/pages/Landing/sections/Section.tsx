import React, { FC, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import SectionEnum from '../../../enums/SectionEnum';
import { useAppSelector } from '../../../hooks/redux';

interface SectionProps {
  id: SectionEnum;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, children }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { section } = useAppSelector((state) => state.landing);

  useEffect(() => {
    if (id === section) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, section]);

  return (
    <Box
      ref={ref}
      sx={{
        height: '100%',
        scrollSnapAlign: 'start',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
