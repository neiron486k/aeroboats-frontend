import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

import CardInterface from './CardInterface';

export enum CardPosition {
  Left = 'left',
  Right = 'right',
}

interface CardProps extends CardInterface {
  image: string;
  title: string;
  description: string;
  position: CardPosition;
}

const Card: FC<CardProps> = ({ image, title, description, position }) => {
  const imageOrder = position === CardPosition.Left ? 1 : 2;
  const textOrder = position === CardPosition.Left ? 2 : 1;

  return (
    <Grid container>
      <Grid
        item
        sm={6}
        xs={12}
        sx={{ background: `url(${image}) center center / cover no-repeat`, height: '20vh' }}
        order={imageOrder}
      />
      <Grid item sm={6} xs={12} order={textOrder} sx={{ pl: 2, pr: 2 }}>
        <Typography variant="h5" align={position} pb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align={position}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Card;
