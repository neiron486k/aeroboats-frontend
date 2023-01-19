import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import { single } from '../../config/keywords';
import { useGetProductQuery } from '../../services/product';
import ProductAvatar from './ProductAvatar';

const Product: FC = () => {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number(id));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Header dark />
      {isSuccess && (
        <Helmet>
          <title>{`AeroGlissers - ${product.name}`}</title>
          <meta name="description" content={product.short_description} />
          <meta name="keywords" content={single.concat([product.name]).join(',')} />
          <meta property="og:title" content={product.name} />
          <meta property="og:image" content={product.image} />
        </Helmet>
      )}
      {isSuccess && (
        <>
          <Container sx={{ mt: theme.spacing(matches ? 5 : 10), mb: theme.spacing(matches ? 5 : 10) }}>
            <Typography sx={{ lineHeight: 1 }} variant="overline" component="div" color="text.secondary">
              Аэролодка
            </Typography>
            <Typography sx={{ lineHeight: 0.8 }} variant={matches ? 'h5' : 'h4'} component="div">
              {product.name}
            </Typography>
          </Container>
          <ProductAvatar height={matches ? '40vh' : '50vh'} images={product.images} />
          <Container sx={{ mt: theme.spacing(matches ? 1 : 10), mb: theme.spacing(matches ? 1 : 10) }}>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
            <Grid container spacing={0}>
              {product.videos.map((item, index) => {
                const cellsPerRow = 3;
                const appendix = product.videos.length % 3;
                let cells = 12 / cellsPerRow;

                if (cells - index + 1 <= appendix) {
                  cells = 12 / appendix;
                }

                return (
                  <Grid item key={item.id} md={cells}>
                    <video width="100%" controls>
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default Product;
