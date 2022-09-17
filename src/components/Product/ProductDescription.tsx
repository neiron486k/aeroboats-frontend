import { Box, Fade, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ProductDescriptionProps {
  description: string;
  show: boolean;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ show, description }) => {
  const stylesWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  };
  const stylesContent = {
    padding: 1,
    borderRadius: 1,
    background: `rgba(0, 0, 0, .7)`,
  };

  return (
    <Box sx={stylesWrapper} color="inherit">
      <Fade in={show} timeout={500}>
        <Typography color="inherit" variant="body2" sx={stylesContent}>
          {description}
        </Typography>
      </Fade>
    </Box>
  );
};

export default ProductDescription;
