import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import Product from '../../../components/Product/Product';
import Title from '../../../components/Title';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const pageSize = matches ? 2 : 4;
  const { data: products, isSuccess } = useGetProductsQuery(pageSize);

  return (
    <Container>
      <Title text="Модели и комплектации" />
      <Grid container spacing={1}>
        {isSuccess &&
          products.results.map((product) => {
            const image = product.media.filter((item) => item.is_cover)[0] || '';

            return (
              <Grid item sm={4}>
                <Product name={product.name} price={product.price} image={image.path} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Products;
