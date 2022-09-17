import { Box, Rating, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface ProductContentProps {
  name: string;
  toggleShowContent: () => void;
}

const ProductFooter: FC<ProductContentProps> = ({ name, toggleShowContent }) => {
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
      onMouseEnter={() => toggleShowContent()}
      onMouseLeave={() => toggleShowContent()}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        {name}
      </Typography>
      <Rating precision={1} value={5} readOnly />
    </Box>
  );
};

export default ProductFooter;
