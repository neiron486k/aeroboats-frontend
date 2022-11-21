import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Title from '../../../../components/Title';
import { useGetWorksQuery } from '../../../../services/work';
import Work from './Work';

const Works: FC = () => {
  const { data, isSuccess } = useGetWorksQuery();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSuccess && data.length < 3 ? data.length : 3,
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
          {isSuccess &&
            data.map((item) => {
              return <Work key={item.id} {...item} />;
            })}
        </Slider>
      </Container>
    </Box>
  );
};

export default Works;
