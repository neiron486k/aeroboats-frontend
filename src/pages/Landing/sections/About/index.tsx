import { Grid } from '@mui/material';
import React, { FC } from 'react';

import SectionEnum from '../../../../enums/SectionEnum';
import { useAppSelector } from '../../../../hooks/redux';
import AboutItem from './AboutItem';

const aboutItems = [
  {
    id: 1,
    title: 'O нас',
    text: 'Какое-то описание о том, что мы самые лучшие и в нужно иметь дель и покупать у нас лодки',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Чем занимаемся',
    text: 'Какое-то описание о том, что мы сделаем',
    image: 'https://picsum.photos/300/400',
  },
];

const About: FC = () => {
  const { section } = useAppSelector((state) => state.landing);
  const show = section === SectionEnum.ABOUT;
  const timeout = 1000;
  const rowHeight = `${100 / aboutItems.length}%`;

  return (
    <Grid container sx={{ position: 'relative', height: '100%' }}>
      {aboutItems.map((item, index) => {
        return (
          <AboutItem
            rightImage={index % 2 !== 0}
            key={item.id}
            {...item}
            show={show}
            height={rowHeight}
            timeout={timeout}
          />
        );
      })}
    </Grid>
  );
};

export default About;
