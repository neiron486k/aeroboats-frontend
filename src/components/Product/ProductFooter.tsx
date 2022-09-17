import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface ProductContentProps {
  name: string;
}

const ProductFooter: FC<ProductContentProps> = ({ name }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        background: `rgba(0, 0, 0, .7)`,
        p: theme.spacing(1),
        color: theme.palette.primary.contrastText,
      }}
    >
      <Typography variant="h6">{name}</Typography>
    </Box>
  );
};

export default ProductFooter;
