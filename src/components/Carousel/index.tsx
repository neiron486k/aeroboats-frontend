import React, { FC, useEffect, useState } from "react";
import Item from "./models/Item";
import {
  Box,
  Container,
  Slide as SlideAnimation,
  Typography,
} from "@mui/material";
import Point from "./Point";

interface CarouselProps {
  slides: Item[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const autoPlay: string = process.env.REACT_APP_CAROUSEL_AUTOPLAY;
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    const playTimeout = +(process.env.REACT_APP_CAROUSEL_TIMEOUT || 1000);

    const doPlay = () => {
      const pages = slides.length - 1;

      if (currentItemIndex < pages) {
        setCurrentItemIndex(currentItemIndex + 1);
      } else if (currentItemIndex === pages) {
        setCurrentItemIndex(0);
      }
    };

    if (play && autoPlay === "yes") {
      const playInterval = setInterval(doPlay, playTimeout);

      return () => clearInterval(playInterval);
    }
  }, [currentItemIndex, slides.length, play, autoPlay]);

  return (
    <Box
      component="div"
      sx={{ height: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseOver={() => setPlay(false)}
      onMouseLeave={() => setPlay(true)}
    >
      {slides.map((slide, index) => {
        const opacity = currentItemIndex === index ? 1 : 0;
        const timeout = 1000;

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "0.5s ease",
              opacity: opacity,
            }}
          >
            {currentItemIndex === index && (
              <Box
                sx={{
                  height: "100%",
                  background: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: `brightness(0.7)`,
                }}
                justifyContent="center"
                display="flex"
                alignItems="center"
              />
            )}
            <Container
              sx={{
                position: "absolute",
                overflow: "hidden",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Box>
                <SlideAnimation
                  direction="right"
                  in={currentItemIndex === index}
                  timeout={timeout}
                >
                  <Typography color="white" variant="h5">
                    {slide.leftContent}
                  </Typography>
                </SlideAnimation>
              </Box>
              <Box justifyContent="center" display="flex">
                <SlideAnimation
                  direction="up"
                  in={currentItemIndex === index}
                  timeout={timeout}
                >
                  <Typography color="white" variant="h2">
                    {slide.centerContent}
                  </Typography>
                </SlideAnimation>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <SlideAnimation
                  direction="left"
                  in={currentItemIndex === index}
                  timeout={timeout}
                >
                  <Typography color="white" variant="h5">
                    {slide.rightContent}
                  </Typography>
                </SlideAnimation>
              </Box>
            </Container>
          </Box>
        );
      })}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          width: "100%",
          padding: "5px",
        }}
        justifyContent="center"
      >
        {Array.from({ length: slides.length }).map((_, index) => {
          return (
            <Point
              key={index}
              active={currentItemIndex === index}
              onClick={() => setCurrentItemIndex(index)}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
