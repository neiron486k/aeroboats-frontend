import React, {FC} from 'react';
import {Box} from "@mui/material";
import Carousel from "../components/Carousel";
import Slide from "../components/Carousel/models/Slide";

const slides: Slide[] = [
    {
        image: 'https://cont.ws/uploads/pic/2020/11/59_putorana.jpg',
        leftContent: 'Have a nice boats with us',
        centerContent: 'We are the best developers of boats',
        rightContent: 'We hava a lot of experience in building boats'
    },
    {
        image: 'https://cont.ws/uploads/pic/2020/11/59_putorana.jpg',
        leftContent: 'Have a nice fishing',
        centerContent: 'Buy asap awesome a boat!',
        rightContent: 'Have a good evening'
    }
]


const Home: FC = () => {
    return (
        <Box sx={{height: '100vh'}}>
            <Carousel slides={slides}/>
        </Box>
    );
};

export default Home;