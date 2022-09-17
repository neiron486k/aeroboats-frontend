import { ImageList } from '@mui/material';
import React from 'react';

import Product from '../../../components/Product/Product';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const pageSize = 4;
  const { data: products, isSuccess } = useGetProductsQuery(pageSize);

  return (
    <ImageList sx={{ height: '100%' }} cols={pageSize / 2} gap={1}>
      {isSuccess &&
        products.results.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </ImageList>
  );
};

export default Products;
