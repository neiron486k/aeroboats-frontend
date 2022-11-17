import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import water from '../../../assets/landing/images/products/water_background.jpeg';
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
        background: `linear-gradient(to top, transparent, #000), url(${water}) center center/cover no-repeat`,
      }}
    >
      <Container>
        <Title>Модели и комплектации</Title>
        {isSuccess &&
          products.results.map((product, index) => {
            const productsCount = products.results.length - 1;

            return (
              <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '40vh',
                    marginBottom: productsCount === index ? 0 : 10,
                  }}
                >
                  <Product {...product} alignImageLeft={index % 2 === 0} />
                </Box>
              </Link>
            );
          })}
      </Container>
    </Box>
  );
};

export default Products;
