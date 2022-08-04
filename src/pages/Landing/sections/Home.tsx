import { Box, Button } from '@mui/material';
import React, { FC } from 'react';

import Carousel from '../../../components/Carousel';
import Item from '../../../components/Carousel/models/Item';
import SectionEnum from '../../../enums/SectionEnum';
import Section from './Section';

const items: Item[] = [
  {
    id: 1,
    image: 'https://st18.stpulscen.ru/images/product/325/898/871_big.jpg',
    leftContent: 'Have a nice boats with us',
    centerContent: 'We are the best developers of boats',
    rightContent: 'We hava a lot of experience in building boats',
  },
  {
    id: 2,
    image:
      'https://1687772.ssl.1c-bitrix-cdn.ru/upload/iblock/b25/b2583ef8a81270d9d54520532221e0e7.jpg?162497169160190',
    leftContent: 'Have a nice fishing',
    centerContent: 'Buy asap awesome a boat!',
    rightContent: 'Have a good evening',
  },
  {
    id: 3,
    image:
      'https://1687772.ssl.1c-bitrix-cdn.ru/upload/iblock/b25/b2583ef8a81270d9d54520532221e0e7.jpg?162497169160190',
    leftContent: 'Have a nice fishing',
    centerContent: 'Buy asap awesome a boat!',
    rightContent: (
      <Box>
        <Button variant="contained" color="success" sx={{ width: '10%' }}>
          test
        </Button>
      </Box>
    ),
  },
];

const Home: FC = () => (
  <Section id={SectionEnum.HOME}>
    <Carousel items={items} />
  </Section>
);

export default Home;
