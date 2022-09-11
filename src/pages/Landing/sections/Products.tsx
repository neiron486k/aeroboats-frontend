import { ImageList } from '@mui/material';
import React, { useState } from 'react';

import Product from '../../../components/Product';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const { data: products, isSuccess } = useGetProductsQuery(6);

  return (
    <ImageList sx={{ height: '100%' }} cols={3} gap={1}>
      {isSuccess &&
        products.results.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </ImageList>
  );
};

export default Products;
