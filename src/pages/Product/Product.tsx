import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../services/product';
import ProductAvatar from './ProductAvatar';

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ background: 'white' }} height={matches ? '100%' : '100vh'}>
      {isSuccess && (
        <Grid container>
          <Grid item xs={12} md={6}>
            <ProductAvatar height="50vh" images={product.images} />
          </Grid>
          <Grid item xs={12} md={6} p={2} height={matches ? '100%' : '50vh'}>
            <Typography variant="h4" align="center" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              {product.price}p
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Product;
