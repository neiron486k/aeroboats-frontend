import { Box, Container } from '@mui/material';
import React from 'react';

import water from '../../../../assets/landing/images/products/water_background.jpeg';
import Title from '../../../../components/Title';
import { useGetProductsQuery } from '../../../../services/product';
import Product from './Product';

const Products = () => {
  const { data: products, isSuccess } = useGetProductsQuery(10);

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
              <Box
                key={product.id}
                sx={{
                  marginBottom: productsCount === index ? 0 : 5,
                }}
              >
                <Product {...product} alignImageLeft={index % 2 === 0} />
              </Box>
            );
          })}
      </Container>
    </Box>
  );
};

export default Products;
