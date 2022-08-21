import { Box, Container, Slide as SlideAnimation, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Point from '../Navigation/Point';
import Item from './models/Item';

interface CarouselProps {
  items: Item[];
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<Item>(items[0]);
  const autoPlay: string = process.env.REACT_APP_CAROUSEL_AUTOPLAY;
  const [play, setPlay] = useState<boolean>(true);
  const theme = useTheme();
  const smViewDown = useMediaQuery(theme.breakpoints.down('sm'));
  const pages = items.length - 1;
  const currentItemPosition = items.indexOf(currentItem);

  const slideLeft = useCallback(() => {
    if (currentItemPosition < pages) {
      setCurrentItem(items[currentItemPosition + 1]);
    } else {
      setCurrentItem(items[0]);
    }
  }, [items, currentItemPosition, pages]);

  const slideRight = useCallback(() => {
    if (currentItemPosition > 0 && currentItemPosition <= pages) {
      setCurrentItem(items[currentItemPosition - 1]);
    } else {
      setCurrentItem(items[pages]);
    }
  }, [items, currentItemPosition, pages]);

  const handlers = useSwipeable({
    onSwipedLeft: () => slideLeft(),
    onSwipedRight: () => slideRight(),
  });

  useEffect(() => {
    const playTimeout = +(process.env.REACT_APP_CAROUSEL_TIMEOUT || 1000);

    const doPlay = () => {
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
  }, [currentItemPosition, items, pages, play, autoPlay]);

  return (
    <Box
      {...handlers}
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
              <SlideAnimation direction="down" in={currentItem.id === item.id} timeout={timeout}>
                <Typography
                  textAlign="center"
                  color="white"
                  variant={smViewDown ? 'h4' : 'h2'}
                  component="div"
                  sx={{ mb: 1.2 }}
                >
                  {item.title}
                </Typography>
              </SlideAnimation>
              <SlideAnimation direction="up" in={currentItem.id === item.id} timeout={timeout}>
                <Typography textAlign="center" color="white" variant={smViewDown ? 'body1' : 'h5'} component="div">
                  {item.text}
                </Typography>
              </SlideAnimation>
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
