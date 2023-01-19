import { Box } from '@mui/material';
import React, { FC, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ProductImageInterface from '../../contracts/ProductImageInterface';
import AvatarNavigator from './AvatarNavigator';

interface ProductAvatarProps {
  height: string;
  images: ProductImageInterface[];
}

const ProductAvatar: FC<ProductAvatarProps> = ({ images, height }) => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef<Slider>(null);

  return (
    <Box sx={{ position: 'relative', height, overflow: 'hidden' }}>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image) => {
          return (
            <Box
              key={`productImage${image.id}`}
              sx={{
                height,
                background: `url(${image.image}) center center / cover no-repeat`,
              }}
            />
          );
        })}
      </Slider>
      <AvatarNavigator prev={() => sliderRef?.current?.slickPrev()} next={() => sliderRef?.current?.slickNext()} />
    </Box>
  );
};
export default ProductAvatar;
