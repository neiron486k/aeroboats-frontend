import { Box, Container } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import Card, { CardPosition } from './Card';

const cards = [
  {
    key: 'own_production',
    image: 'https://picsum.photos/100/150',
    title: 'Свое производство',
    description:
      'Работаем более 10 лет на своем производстве,' +
      ' где упели исправиль все недочеты, встречающиеся в других аэролодках',
  },
  {
    key: 'own_production',
    image: 'https://picsum.photos/100/150',
    title: 'Свое производство',
    description:
      'Работаем более 10 лет на своем производстве,' +
      ' где упели исправиль все недочеты, встречающиеся в других аэролодках',
  },
  {
    key: 'own_production',
    image: 'https://picsum.photos/100/150',
    title: 'Свое производство',
    description:
      'Работаем более 10 лет на своем производстве,' +
      ' где упели исправиль все недочеты, встречающиеся в других аэролодках',
  },
  {
    key: 'own_production',
    image: 'https://picsum.photos/100/150',
    title: 'Свое производство',
    description:
      'Работаем более 10 лет на своем производстве,' +
      ' где упели исправиль все недочеты, встречающиеся в других аэролодках',
  },
];

const About: FC = () => {
  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Title text="О нас" />
      {cards.map((item, index) => {
        const position = index % 2 === 0 ? CardPosition.Left : CardPosition.Right;
        const paddingBottom = index === cards.length ? 0 : 2;

        return (
          <Box sx={{ pb: paddingBottom }}>
            <Card {...item} position={position} />
          </Box>
        );
      })}
    </Container>
  );
};

export default About;
