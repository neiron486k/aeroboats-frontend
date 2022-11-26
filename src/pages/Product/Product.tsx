import { Box, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import Title from '../../components/Title';
import { useGetProductQuery } from '../../services/product';
import ProductAvatar from './ProductAvatar';
import ProductSpecification from './ProductSpecification';

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));

  return (
    <Box sx={{ background: 'white', height: '100vh' }}>
      {isSuccess && (
        <Grid container>
          <Grid item xs={12} md={6}>
            <ProductAvatar height="50vh" images={product.images} />
          </Grid>
          <Grid item xs={12} md={6} height="50vh" p={2}>
            <Typography variant="h4" align="center" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              {product.price}
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              Характеристики
            </Typography>
            {product.specifications.map((specification) => {
              return <ProductSpecification {...specification} />;
            })}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Product;
