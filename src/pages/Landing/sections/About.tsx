import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';

import Title from '../../../components/Title';

const About: FC = () => {
  return (
    <Box sx={{ background: `linear-gradient(to top, transparent, #111), #000}` }}>
      <Container>
        <Title>Мы</Title>
        <Typography color="common.white" gutterBottom>
          Работаем уже более 7 лет и за это время мы исправили все недочеты, встречающиеся на других аэролодках, смогли
          учесть все пожелания наших клиентов, и сделали лучшую бюджетную лодку, но на этом не останавливаемся и всё
          продолжаем работать над аэролодками что-бы они становились ещё лучше.
        </Typography>
        <Typography color="common.white">
          Исзпользуем материялы только высокого качества. Ткань ПВХ MEHLER Valmex Boat Heavy 1100г - это лодочная ткань
          премиум класса производства немецкого завода Low & Bonar (ранее Mehler Texnologies), благодаря своей прочности
          и износостойкости материал используется для больших моторных лодок и лодок RIB. Защиту дна обеспечивает
          сверхвысокомолекулярный полиэтилен TIVAR 1000 antistatic производства Mitsubishi Chemical, что обеспечивает
          высокую ударную прочность, даже при низких температурах.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
