import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({ name, price, image }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
