import { Box, Typography } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';

import ProductProps from '../interfaces/ProductProps';

const Product: FC<ProductProps> = ({ name, description, price, media }) => {
  const cover = media.filter((item) => item.is_cover)[0] || '';
  const titleRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('auto');
  const [showDesc, setShowDesc] = useState<boolean>(false);

  const getTitleHeight = (): number => titleRef.current?.clientHeight || 0;

  useEffect(() => setHeight(`${getTitleHeight()}px`), []);

  const handleMouseEnter = () => {
    setHeight('100%');
  };

  const handleMouseLeave = () => {
    const titleHeight = getTitleHeight();

    setHeight(`${titleHeight}px`);
  };

  return (
    <Box
      sx={{
        height: '100%',
        background: `url(${cover.path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
        ':hover': {
          cursor: 'pointer',
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height,
          background: `rgba(0, 0, 0, .7)`,
          transition: 'height .5s',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            width: '100%',
            padding: 2,
          }}
          variant="h5"
          ref={titleRef}
        >
          {name}
        </Typography>
        {showDesc && (
          <Typography sx={{ color: 'white' }} variant="body1">
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Product;
