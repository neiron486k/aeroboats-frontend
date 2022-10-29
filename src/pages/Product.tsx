import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import ProductProps from '../interfaces/ProductProps';
import { useGetProductQuery } from '../services/product';

const productInner = (product: ProductProps) => {
  return (
    <>
      <Typography variant="h2">{product.name}</Typography>
      <Typography>{product.description}</Typography>
    </>
  );
};

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));

  return <Box>{isSuccess && productInner(product)}</Box>;
};

export default Product;
