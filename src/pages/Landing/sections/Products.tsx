import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import Product from '../../../components/Product/Product';
import Title from '../../../components/Title';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const pageSize = matches ? 4 : 10;
  const { data: products, isSuccess } = useGetProductsQuery(pageSize);
  let cellCount = 4;

  return (
    <Container>
      <Title text="Модели и комплектации" />
      <Grid container spacing={1}>
        {isSuccess &&
          products.results.map((product, index) => {
            const image = product.media.filter((item) => item.is_cover)[0] || '';
            const itemsCount = products.results.length;
            const appendix = products.results.length % 3;
            if (index === itemsCount - appendix && appendix > 1) {
              cellCount = 6;
            } else if (index === itemsCount - appendix && appendix === 1) {
              cellCount = 12;
            }

            return (
              <Grid item key={product.id} xs={12} sm={cellCount}>
                <Product name={product.name} price={product.price} image={image.path} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Products;
