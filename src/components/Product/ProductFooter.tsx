import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface ProductContentProps {
  name: string;
  handleShowContent: () => void;
}

const ProductFooter: FC<ProductContentProps> = ({ name, handleShowContent }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: theme.spacing(1),
        color: theme.palette.primary.contrastText,
      }}
    >
      <Typography variant="h6" onClick={() => handleShowContent()}>
        {name}
      </Typography>
    </Box>
  );
};

export default ProductFooter;
