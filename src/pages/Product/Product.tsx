import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../services/product';
import Navigator from './Navigator';

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));

  return (
    <Grid container sx={{ background: 'white', height: '100vh' }}>
      <Grid item md={6}>
        {isSuccess && <Navigator images={product.images} />}
      </Grid>
      <Grid item md={6}>
        content
      </Grid>
    </Grid>
  );
};

export default Product;
