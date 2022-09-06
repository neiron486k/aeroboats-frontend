import { Box } from '@mui/material';
import React, { FC } from 'react';

import ProductProps from '../interfaces/ProductProps';

const Product: FC<ProductProps> = ({ name, description, price, media }) => {
  const cover = media.filter((item) => item.is_cover)[0] || '';

  return (
    <Box
      sx={{
        height: '100%',
        background: `url(${cover.path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
    </Box>
  );
};

export default Product;
