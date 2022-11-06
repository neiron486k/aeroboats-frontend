import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';

import CardInterface from './CardInterface';

const MobileCard: FC<CardInterface> = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" height="150px" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MobileCard;
