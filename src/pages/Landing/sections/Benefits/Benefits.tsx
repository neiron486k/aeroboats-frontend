import { Box, Container, Grid } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Benefit from './Benefit';
import benefitItems from './benefitItems';

const Benefits: FC = () => {
  let cellCount = 3;

  return (
    <Box sx={{ pt: 10, background: '#d6e9ec' }}>
      <Container>
        <Title sx={{ color: '#000' }}>Наши преимущества</Title>
        <Grid container>
          {benefitItems.map((item, index) => {
            const itemsCount = benefitItems.length;
            const appendix = benefitItems.length % 4;

            if (index === itemsCount - appendix && appendix > 1) {
              cellCount = 4;
            } else if (index === itemsCount - appendix && appendix === 1) {
              cellCount = 12;
            }

            return (
              <Grid item height="30vh" sm={cellCount} key={item.key}>
                <Benefit {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
export default Benefits;
