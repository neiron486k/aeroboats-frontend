import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../components/Title';

const About: FC = () => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 10,
        background: `linear-gradient(to top, transparent, #111), #000}`,
      }}
    >
      <Container>
        <Title>Мы</Title>
        <Typography color="common.white" gutterBottom>
          Работаем уже более 7 лет и за это время исправили все недочеты, встречающиеся в других аэролодках. Смогли
          учесть все пожелания наших клиентов и сделали лучшую бюджетную лодку, но на этом не останавливаемся и
          продолжаем работать, чтобы наши аэролодки становились ещё лучше.
        </Typography>
        <Typography color="common.white">Используем материалы только высокого качества.</Typography>
      </Container>
    </Box>
  );
};

export default About;
