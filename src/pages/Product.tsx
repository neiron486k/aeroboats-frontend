import { Box, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../components/Title';
import ProductInterface from '../contracts/ProductInterface';
import { useGetProductQuery } from '../services/product';

const productInner = (product: ProductInterface) => {
  return (
    <Grid container height="100vh">
      <Grid
        item
        sm={5}
        sx={{
          background: `url(${product.image}) center center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          color="primary.contrastText"
          variant="h2"
          sx={{
            writingMode: 'vertical-rl',
            p: 1,
            background: (theme) => theme.palette.primary.main,
            mixBlendMode: 'overlay',
          }}
        >
          {product.name}
        </Typography>
      </Grid>
      <Grid item sm={7}>
        <Title text={product.name} />
        <Typography variant="body1" sx={{ ml: 2, mr: 2 }}>
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));

  return <Box>{isSuccess && productInner(product)}</Box>;
};

export default Product;
