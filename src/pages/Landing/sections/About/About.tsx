import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

import AboutCard from './AboutCard';

const items = [
  {
    image: 'https://api.lorem.space/image/movie?w=150&h=100',
    text: 'Конструируем высококачественную продукцию на собственном производстве.',
  },
  {
    image: 'https://api.lorem.space/image/game?w=150&h=100',
    text: 'Готовы проконсультировать по любым товарным вопросам и помочь сделать выбор.',
  },
  {
    image: 'https://api.lorem.space/image/book?w=150&h=100',
    text: 'Оказываем сервисные услуги.',
  },
  {
    image: 'https://api.lorem.space/image/book?w=150&h=100',
    text: 'Предоставляем гарантийный ремонт',
  },
];

const About: FC = () => {
  const lg = 12 / items.length;
  return (
    <Container sx={{ position: 'relative', mt: -10 }}>
      <Grid container spacing={2} height="30vh">
        {items.map((item) => (
          <Grid item lg={lg}>
            <AboutCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" mt={2}>
        Работаем уже более 7 лет и за это время мы исправили все недочеты, встречающиеся на других аэролодках, смогли
        учесть все пожелания наших клиентов, и сделали лучшую бюджетную лодку, но на этом не останавливаемся и всё
        продолжаем работать над аэролодками что-бы они становились ещё лучше.
      </Typography>
    </Container>
  );
};

export default About;
