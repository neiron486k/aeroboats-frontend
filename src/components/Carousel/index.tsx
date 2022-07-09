import React, {FC, useCallback, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Slide from "../../models/Slide";
import Point from "./Point";

interface CarouselProps {
    slides: Slide[]
}

const Carousel: FC<CarouselProps> = ({slides}) => {
    const [position, setPosition] = useState(0);
    const [play, setPlay] = useState<Boolean>(true);
    const slide = slides[position];
    const timeout: number = +(process.env.REACT_APP_CAROUSEL_TIMEOUT || 5000);

    const flip = useCallback(() => {
        const len = slides.length - 1;

        if (position < len) {
            setPosition(position + 1)
        } else if (position === len) {
            setPosition(0)
        }
    }, [position, slides.length])

    useEffect(() => {
        if (play) {
            setTimeout(flip, timeout);
        }
    }, [position, play])

    return (
        <Box
            sx={{
                height: '100%',
                background: `url(${slide.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            onMouseEnter={() => setPlay(false)}
            onMouseLeave={() => setPlay(true)}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '5px'
            }}
            >
                {slides.map((item, index) => (
                    <Point
                        key={index}
                        onClick={() => setPosition(index)}
                        active={position === index}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;