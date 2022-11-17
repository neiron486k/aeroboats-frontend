import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Product from '../../../components/Product/Product';
import Title from '../../../components/Title';
import { useGetProductsQuery } from '../../../services/product';

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const pageSize = matches ? 4 : 10;
  const { data: products, isSuccess } = useGetProductsQuery(pageSize);

  return (
    <Box
      sx={{
        pt: 10,
        pb: 10,
      }}
    >
      <Container>
        <Title>Модели и комплектации</Title>
        {isSuccess &&
          products.results.map((product, index) => {
            const end = products.results.length - 1 === index;

            return (
              <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '40vh',
                    marginBottom: end ? 0 : 10,
                  }}
                >
                  <Product {...product} />
                </Box>
              </Link>
            );
          })}
      </Container>
    </Box>
  );
};

export default Products;
