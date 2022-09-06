import { ImageList, ImageListItem } from '@mui/material';
import React, { useState } from 'react';

import Product from '../../../components/Product';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const [page, setPage] = useState(1);
  const { data: products, isSuccess } = useGetProductsQuery(page);

  return (
    <ImageList sx={{ height: '100%' }} cols={3} gap={2}>
      {isSuccess &&
        products.results.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </ImageList>
  );
};

export default Products;
