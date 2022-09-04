import { Box } from '@mui/material';
import React from 'react';

import Product from '../../../components/Product';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const { data: products, isSuccess } = useGetProductsQuery(1);

  return <Box>{isSuccess && products.results.map((product) => <Product key={product.id} {...product} />)}</Box>;
};

export default Products;
