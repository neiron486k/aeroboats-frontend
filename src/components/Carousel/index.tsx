import React, {FC, useState} from 'react';
import {Box, Container} from "@mui/material";
import Slide from "../../models/Slide";
import Navigation from "./Navigation";

interface CarouselProps {
    slides: Slide[]
}

const Carousel: FC<CarouselProps> = ({slides}) => {
    const [position, setPosition] = useState(0);
    const slide = slides[position];

    return (
        <Box
            sx={{
                height: '100vh',
                background: `url(${slide.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Box sx={{paddingTop: '64px'}}>
                <Container>
                    slider here
                </Container>
            </Box>
            <Navigation
                pages={slides.length}
                changePosition={setPosition}
                currentPosition={position}
            />
        </Box>
    );
};

export default Carousel;