import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ProductProps {
  name: string;
  short_description: string;
  price: number;
  image: string;
  alignImageLeft: boolean;
}

const Product: FC<ProductProps> = ({ name, short_description, price, image, alignImageLeft }) => {
  return (
    <Grid container height="100%">
      <Grid item sm={8} order={alignImageLeft ? 1 : 2} pr={alignImageLeft ? 3 : 0}>
        <Box
          sx={{
            background: `url(${image}) center center / cover no-repeat`,
            height: '100%',
          }}
        />
      </Grid>
      <Grid item sm={4} order={alignImageLeft ? 2 : 1} pr={alignImageLeft ? 0 : 3}>
        <Paper sx={{ height: '100%', p: 4, borderRadius: 0, position: 'relative' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#083f8a', fontWeight: 700 }}>
            {price} p
          </Typography>
          <Typography color="text.secondary">{short_description}</Typography>
          <Button fullWidth variant="contained">
            Подробнее
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Product;
