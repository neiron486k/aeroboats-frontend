import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ProductInterface from '../../../../contracts/ProductInterface';

interface ProductProps extends ProductInterface {
  alignImageLeft: boolean;
}

const Product: FC<ProductProps> = ({ id, name, short_description, price, image, alignImageLeft }) => {
  let orderImage = alignImageLeft ? 1 : 2;
  let orderContent = alignImageLeft ? 2 : 1;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const buttonStyle = matches
    ? {}
    : {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        p: 4,
      };

  if (matches) {
    orderImage = 1;
    orderContent = 2;
  }

  return (
    <Grid container height="100%">
      <Grid item md={8} sm={6} xs={12} order={orderImage}>
        <Box
          sx={{
            background: `url(${image}) center center / cover no-repeat`,
            height: matches ? '200px' : '350px',
          }}
        />
      </Grid>
      <Grid
        item
        md={4}
        sm={6}
        xs={12}
        order={orderContent}
        sx={{
          background: '#fff',
          p: 4,
          position: 'relative',
        }}
      >
        <Typography gutterBottom variant={matches ? 'h6' : 'h5'} component="div" sx={{ textTransform: 'uppercase' }}>
          {name}
        </Typography>
        <Typography gutterBottom variant={matches ? 'body1' : 'h6'} component="div" sx={{ color: '#083f8a' }}>
          {price} руб.
        </Typography>
        <Typography color="text.secondary" gutterBottom={matches} paragraph={matches}>
          {short_description}
        </Typography>
        <Link to={`/products/${id}`}>
          <Box sx={buttonStyle}>
            <Button fullWidth variant="contained">
              Подробнее
            </Button>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Product;
