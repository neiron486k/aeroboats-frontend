import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import { single } from '../../config/keywords';
import { useGetProductQuery } from '../../services/product';
import ProductAvatar from './ProductAvatar';

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ background: 'white' }} height={matches ? '100vh' : '100vh'}>
      <Header dark />
      {isSuccess && (
        <Helmet>
          <title>{`AeroGlissers - ${product.name}`}</title>
          <meta name="description" content={product.short_description} />
          <meta name="keywords" content={single.concat([product.name]).join(',')} />
          <meta property="og:title" content={product.name} />
          <meta property="og:image" content={product.image} />
        </Helmet>
      )}
      {isSuccess && (
        <>
          <Container sx={{ mt: theme.spacing(matches ? 5 : 10), mb: theme.spacing(matches ? 5 : 10) }}>
            <Typography sx={{ lineHeight: 1 }} variant="overline" component="div" color="text.secondary">
              Аэролодка
            </Typography>
            <Typography sx={{ lineHeight: 0.8 }} variant="h4" component="div">
              {product.name}
            </Typography>
          </Container>
          <ProductAvatar height="50vh" images={product.images} />
          <Container sx={{ mt: theme.spacing(matches ? 5 : 10), mb: theme.spacing(matches ? 5 : 10) }}>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
          </Container>
        </>
      )}
    </Box>
  );
};

export default Product;
