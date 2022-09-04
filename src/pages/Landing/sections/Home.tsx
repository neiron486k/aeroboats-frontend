import { Box } from '@mui/material';
import React, { FC } from 'react';

import Carousel from '../../../components/Carousel';
import { useGetSlidesQuery } from '../../../services/carousel';

const Home: FC = () => {
  const { data: carousel, isSuccess } = useGetSlidesQuery(1);

  return <Box sx={{ height: '100vh' }}>{isSuccess && <Carousel slides={carousel} />}</Box>;
};

export default Home;
