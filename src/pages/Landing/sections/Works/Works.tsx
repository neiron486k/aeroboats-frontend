import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Title from '../../../../components/Title';
import workItems from './workItems';

interface WorkItemProps {
  image: string;
}

const WorkItem: FC<WorkItemProps> = ({ image }) => {
  return (
    <Box p={1}>
      <Box
        sx={{
          height: '30vh',
          background: `url(${image}) center center / cover no-repeat`,
        }}
      />
    </Box>
  );
};

const Works: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <Box sx={{ pt: 10, pb: 10 }}>
      <Container>
        <Title>Наши работы</Title>
        <Slider {...settings}>
          {workItems.map((item) => {
            return <WorkItem {...item} />;
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default Works;
