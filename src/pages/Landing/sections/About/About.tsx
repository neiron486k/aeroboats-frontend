import { Container, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';
import AboutCard from './AboutCard';

const items = [
  {
    key: 'developing',
    image: 'https://api.lorem.space/image/movie?w=150&h=100',
    title: 'Производство',
    text: 'Конструируем высококачественную продукцию на собственном производстве.',
  },
  {
    key: 'consultation',
    image: 'https://api.lorem.space/image/game?w=150&h=100',
    title: 'Консультация',
    text: 'Готовы проконсультировать и помочь сделать выбор.',
  },
  {
    key: 'support',
    image: 'https://api.lorem.space/image/book?w=150&h=100',
    title: 'Сервис',
    text: 'Оказываем сервисные услуги.',
  },
  {
    key: 'guarantee',
    image: 'https://api.lorem.space/image/book?w=150&h=100',
    title: 'Гарантия',
    text: 'Предоставляем гарантийное обслуживание и ремонт',
  },
];

const About: FC = () => {
  const lg = 12 / items.length;

  return (
    <Container sx={{ position: 'relative', mt: -10 }}>
      <Grid container spacing={1} height="150px">
        {items.map((item) => (
          <Grid key={item.key} item lg={lg}>
            <AboutCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Title text="О нас" />
      <Typography variant="body1" mt={2}>
        Работаем уже более 7 лет и за это время мы исправили все недочеты, встречающиеся на других аэролодках, смогли
        учесть все пожелания наших клиентов, и сделали лучшую бюджетную лодку, но на этом не останавливаемся и всё
        продолжаем работать над аэролодками что-бы они становились ещё лучше.
      </Typography>
    </Container>
  );
};

export default About;
