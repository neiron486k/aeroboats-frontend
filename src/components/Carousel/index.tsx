import React, {FC, useState} from 'react';
import {Box} from "@mui/material";
import Slide from "../../models/Slide";
import Point from "./Point";

interface CarouselProps {
    slides: Slide[]
}

const Carousel: FC<CarouselProps> = ({slides}) => {
    const [position, setPosition] = useState(0);
    const slide = slides[position];

    const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft' && position !== 0) {
            setPosition(position - 1);
        } else if (e.key === 'ArrowRight' && position < slides.length - 1) {
            setPosition(position + 1);
        }
    }

    const flip = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault();
        const firstTouch = event.touches[0];
        console.log(firstTouch);
    }

    return (
        <Box
            sx={{
                height: '100%',
                background: `url(${slide.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            tabIndex={0}
            onTouchEnd={flip}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%'
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