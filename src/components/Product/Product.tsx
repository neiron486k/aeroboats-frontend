import { Box } from '@mui/material';
import React, { FC } from 'react';

import ProductProps from '../../interfaces/ProductProps';
import ProductFooter from './ProductFooter';
import ProductPrice from './ProductPrice';

const Product: FC<ProductProps> = ({ name, description, price, media }) => {
  const cover = media.filter((item) => item.is_cover)[0] || '';
  const styles = {
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
  };

  return (
    <Box sx={styles}>
      <ProductPrice price={price} />
      <ProductFooter name={name} />
    </Box>
  );
};

export default Product;
