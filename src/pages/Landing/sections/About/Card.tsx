import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

export enum CardPosition {
  Left = 'left',
  Right = 'right',
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  position: CardPosition;
}

const Card: FC<CardProps> = ({ image, title, description, position }) => {
  return (
    <Grid container>
      <Grid
        item
        sm={5}
        sx={{ background: `url(${image}) center center / cover no-repeat`, height: '20vh' }}
        order={position === CardPosition.Left ? 1 : 2}
      />
      <Grid item sm={7} order={position === CardPosition.Left ? 2 : 1} sx={{ pl: 2, pr: 2 }}>
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
