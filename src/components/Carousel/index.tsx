import React, {FC, useEffect, useState} from 'react';
import Slide from "../../models/Slide";
import {Box} from "@mui/material";
import Point from "./Point";

interface CarouselProps {
    slides: Slide[]
}

const Carousel: FC<CarouselProps> = ({slides}) => {
    const [current, setCurrent] = useState<number>(0);
    const [play, setPlay] = useState<boolean>(true);

    useEffect(() => {
        const autoPlay = () => {
            const pages = slides.length - 1;

            if (current < pages) {
                setCurrent(current + 1);
            } else if (current === pages) {
                setCurrent(0);
            }
        }

        if (play) {
            const timeout = +(process.env.REACT_APP_CAROUSEL_TIMEOUT || 1000);
            setTimeout(autoPlay, timeout);
        }
    }, [current, play, slides.length]);

    return (
        <Box
            sx={{height: '100%'}}
            display="flex"
            onMouseEnter={() => setPlay(false)}
            onMouseLeave={() => setPlay(true)}
        >
            {slides.map((slide, index) => {
                const opacity = current === index ? 1 : 0;

                return (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transition: '0.5s ease',
                            opacity: opacity
                        }}
                    >
                        {current === index && <Box
                            sx={{
                                height: '100%',
                                background: `url(${slide.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />}
                    </Box>
                )
            })}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    width: '100%',
                    padding: '5px'
                }}
                justifyContent="center"
            >
                {slides.map((slide, index) => {
                    return (
                        <Point key={index} active={current === index} onClick={() => setCurrent(index)}/>
                    )
                })}
            </Box>
        </Box>
    );
};

export default Carousel;