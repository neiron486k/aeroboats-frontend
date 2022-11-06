import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../../components/Title';

const About: FC = () => {
  return (
    <Container sx={{ pt: 10, pb: 10 }}>
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
