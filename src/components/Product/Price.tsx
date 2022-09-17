import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface PriceProps {
  price: number;
}

const Price: FC<PriceProps> = ({ price }) => {
  const theme = useTheme();
  const styles = {
    background: theme.palette.primary.dark,
    p: theme.spacing(0.5),
    color: theme.palette.primary.contrastText,
    borderRadius: '0px 0px 5px 5px',
    boxShadow: 1,
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography sx={styles} variant="subtitle2">
        {price} р
      </Typography>
    </Box>
  );
};

export default Price;
