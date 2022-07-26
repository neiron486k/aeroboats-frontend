import React, { FC, useEffect, useState } from 'react';
import { Box, Container, Slide as SlideAnimation, Typography } from '@mui/material';
import Item from './models/Item';
import Point from './Point';

interface CarouselProps {
  items: Item[];
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<Item>(items[0]);
  const autoPlay: string = process.env.REACT_APP_CAROUSEL_AUTOPLAY;
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    const playTimeout = +(process.env.REACT_APP_CAROUSEL_TIMEOUT || 1000);

    const doPlay = () => {
      const pages = items.length - 1;
      const currentItemPosition = items.indexOf(currentItem);

      if (currentItemPosition < pages) {
        setCurrentItem(items[currentItemPosition + 1]);
      } else if (currentItemPosition === pages) {
        setCurrentItem(items[0]);
      }
    };

    const playInterval = setInterval(doPlay, playTimeout);

    if (!play || autoPlay === 'no') {
      clearInterval(playInterval);
    }

    return () => clearInterval(playInterval);
  }, [currentItem, play, autoPlay, items]);

  return (
    <Box
      component="div"
      sx={{ height: '100%' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseOver={() => setPlay(false)}
      onMouseLeave={() => setPlay(true)}
    >
      {items.map((item) => {
        const opacity = currentItem.id === item.id ? 1 : 0;
        const timeout = 1000;

        return (
          <Box
            key={item.id}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: '0.5s ease',
              opacity,
            }}
          >
            {currentItem.id === item.id && (
              <Box
                sx={{
                  height: '100%',
                  background: `url(${item.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: `brightness(0.7)`,
                }}
                justifyContent="center"
                display="flex"
                alignItems="center"
              />
            )}
            <Container
              sx={{
                position: 'absolute',
                overflow: 'hidden',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Box>
                <SlideAnimation direction="right" in={currentItem.id === item.id} timeout={timeout}>
                  <Typography color="white" variant="h5">
                    {item.leftContent}
                  </Typography>
                </SlideAnimation>
              </Box>
              <Box justifyContent="center" display="flex">
                <SlideAnimation direction="up" in={currentItem.id === item.id} timeout={timeout}>
                  <Typography color="white" variant="h2">
                    {item.centerContent}
                  </Typography>
                </SlideAnimation>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <SlideAnimation direction="left" in={currentItem.id === item.id} timeout={timeout}>
                  <Typography color="white" variant="h5">
                    {item.rightContent}
                  </Typography>
                </SlideAnimation>
              </Box>
            </Container>
          </Box>
        );
      })}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          width: '100%',
          padding: '5px',
        }}
        justifyContent="center"
      >
        {items.map((item) => {
          return <Point key={item.id} active={currentItem.id === item.id} onClick={() => setCurrentItem(item)} />;
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
