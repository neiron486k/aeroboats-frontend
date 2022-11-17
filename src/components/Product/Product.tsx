import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ProductProps {
  name: string;
  short_description: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({ name, short_description, price, image }) => {
  return (
    <Grid container columnSpacing={6} height="100%">
      <Grid item sm={8} sx={{ background: `url(${image}) center center / cover no-repeat` }} />
      <Grid item sm={4}>
        <Paper sx={{ height: '100%', p: 2 }}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography>От {price}p</Typography>
          <Typography>{short_description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Product;
