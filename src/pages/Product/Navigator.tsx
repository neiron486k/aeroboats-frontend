import { Box } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import ProductImageInterface from '../../contracts/ProductImageInterface';

interface NavigatorProps {
  images: ProductImageInterface[];
}

const Navigator: FC<NavigatorProps> = ({ images }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [bottomSlider, setBottomSlider] = useState<Slider>();
  const [topSlider, setTopSlider] = useState<Slider>();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box flexGrow={1}>
        <Slider asNavFor={bottomSlider} ref={(slider) => setTopSlider(slider || undefined)}>
          {images.map((image) => {
            return (
              <Box
                key={image.id}
                sx={{
                  height: `calc(100vh - 115px)`,
                  background: `url(${image.path}) center center / cover no-repeat`,
                }}
              />
            );
          })}
        </Slider>
      </Box>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Slider
          asNavFor={topSlider}
          slidesToShow={images.length < 4 ? images.length : 4}
          focusOnSelect
          ref={(slider) => setBottomSlider(slider || undefined)}
        >
          {images.map((image) => {
            return (
              <Box key={image.id}>
                <Box
                  sx={{
                    height: 100,
                    background: `url(${image.path}) center center / cover no-repeat`,
                  }}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Navigator;
