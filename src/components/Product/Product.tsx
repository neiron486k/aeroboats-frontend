import { Box, useTheme } from '@mui/material';
import React, { FC, useState } from 'react';

import ProductProps from '../../interfaces/ProductProps';
import ProductDescription from './ProductDescription';
import ProductFooter from './ProductFooter';
import ProductPrice from './ProductPrice';

const Product: FC<ProductProps> = ({ name, description, price, media }) => {
  const theme = useTheme();
  const cover = media.filter((item) => item.is_cover)[0] || '';
  const [show, setShow] = useState<boolean>(false);
  const styles = {
    height: '100%',
    background: `url(${cover.path})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.contrastText,
  };

  const toggleShowContent = () => {
    setShow(!show);
  };

  return (
    <Box sx={styles}>
      <ProductPrice price={price} />
      <ProductDescription description={description} show={show} />
      <ProductFooter name={name} toggleShowContent={toggleShowContent} />
    </Box>
  );
};

export default Product;
