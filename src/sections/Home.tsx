import React, {FC} from 'react';
import {Box} from "@mui/material";
import Carousel from "../components/Carousel";
import Slide from "../components/Carousel/models/Slide";

const slides: Slide[] = [
    {
        image: 'https://st18.stpulscen.ru/images/product/325/898/871_big.jpg',
        leftContent: 'Have a nice boats with us',
        centerContent: 'We are the best developers of boats',
        rightContent: 'We hava a lot of experience in building boats'
    },
    {
        image: 'https://1687772.ssl.1c-bitrix-cdn.ru/upload/iblock/b25/b2583ef8a81270d9d54520532221e0e7.jpg?162497169160190',
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