import { Avatar, Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import ProductSpecificationInterface from '../../contracts/ProductSpecificationInterface';

const ProductSpecification: FC<ProductSpecificationInterface> = ({ name, image, value }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pb: 1,
      }}
    >
      <Avatar src={image} />
      <Typography variant="overline" sx={{ fontWeight: 700 }} pl={1}>
        {name}:
      </Typography>
      <Typography pl={1}>{value}</Typography>
    </Box>
  );
};

export default ProductSpecification;
