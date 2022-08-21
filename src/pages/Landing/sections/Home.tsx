import { Box, Button } from '@mui/material';
import React, { FC } from 'react';

import Carousel from '../../../components/Carousel';
import Item from '../../../components/Carousel/models/Item';

const items: Item[] = [
  {
    id: 1,
    image: 'https://st18.stpulscen.ru/images/product/325/898/871_big.jpg',
    title: 'We are the best developers of boats',
    text: 'We hava a lot of experience in building boats',
  },
  {
    id: 2,
    image:
      'https://1687772.ssl.1c-bitrix-cdn.ru/upload/iblock/b25/b2583ef8a81270d9d54520532221e0e7.jpg?162497169160190',
    title: 'Buy asap awesome a boat!',
    text: 'Have a good evening',
  },
  {
    id: 3,
    image:
      'https://1687772.ssl.1c-bitrix-cdn.ru/upload/iblock/b25/b2583ef8a81270d9d54520532221e0e7.jpg?162497169160190',
    title: 'Buy asap awesome a boat!',
    text: (
      <Box>
        <Button variant="contained" color="success" sx={{ width: '10%' }}>
          test
        </Button>
      </Box>
    ),
  },
];

const Home: FC = () => <Carousel items={items} />;

export default Home;
