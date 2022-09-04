import { Box } from '@mui/material';
import React, { FC } from 'react';

import ProductProps from '../interfaces/ProductProps';

const Product: FC<ProductProps> = ({ name, description, price }) => {
  return <Box sx={{ height: '100%' }}>{name}</Box>;
};

export default Product;
