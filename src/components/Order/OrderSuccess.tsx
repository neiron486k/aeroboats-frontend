import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

const OrderSuccess: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Typography variant="h4" color="secondary.main" gutterBottom paragraph align="center">
        Ваш заказ оформлен.
      </Typography>
      <Typography variant="h6" align="center">
        С вами скоро свяжется наш специалист.
      </Typography>
    </Box>
  );
};

export default OrderSuccess;
