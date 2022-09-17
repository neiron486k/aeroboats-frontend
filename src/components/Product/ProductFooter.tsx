import { Box, Rating, Typography, useTheme } from '@mui/material';
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
        background: `rgba(0, 0, 0, .7)`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" onClick={() => handleShowContent()} sx={{ flexGrow: 1 }}>
        {name}
      </Typography>
      <Rating precision={1} value={5} />
    </Box>
  );
};

export default ProductFooter;
