import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

interface AboutItemProps {
  content: React.ReactNode;
  image: string;
  right: boolean;
}

const AboutItem: FC<AboutItemProps> = ({ content, image, right }) => {
  const imageOrder = right ? 1 : 2;
  const contextOrder = right ? 2 : 1;
  const contextPadding = right ? { pl: 1 } : { pr: 1 };

  return (
    <Grid container>
      <Grid
        order={imageOrder}
        item
        md={4}
        xs={12}
        sx={{
          minHeight: 200,
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Grid item md={8} xs={12} order={contextOrder} sx={contextPadding}>
        <Typography>{content}</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutItem;
