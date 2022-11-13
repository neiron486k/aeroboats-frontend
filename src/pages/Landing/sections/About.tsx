import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../components/Title';

const About: FC = () => {
  return (
    <Box sx={{ background: `linear-gradient(to top, transparent, #111), #000}` }}>
      <Container>
        <Title>Мы</Title>
        <Typography color="common.white">
          Работаем уже более 7 лет и за это время мы исправили все недочеты, встречающиеся на других аэролодках, смогли
          учесть все пожелания наших клиентов, и сделали лучшую бюджетную лодку, но на этом не останавливаемся и всё
          продолжаем работать над аэролодками что-бы они становились ещё лучше.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
