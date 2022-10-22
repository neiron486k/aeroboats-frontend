import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({ name, price, image }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '200px',
        background: `url(${image}) center center/cover no-repeat`,
        '&:hover': {
          filter: 'brightness(0.9)',
          cursor: 'pointer',
        },
      }}
    >
      <Typography
        variant="caption"
        sx={{
          position: 'absolute',
          right: 0,
          p: 1,
          color: 'secondary.contrastText',
          background: (theme) => theme.palette.secondary.main,
        }}
      >
        {price}p
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          p: 1,
          color: 'secondary.contrastText',
          background: (theme) => theme.palette.primary.main,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Product;
