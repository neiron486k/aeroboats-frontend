import React, {FC} from 'react';
import Header from "./components/Header";
import {CssBaseline} from "@mui/material";
import Catalog from "./sections/Catalog";
import Carousel from "./components/Carousel";
import Slide from "./models/Slide"

const slides: Slide[] = [
    {
        image: 'https://cont.ws/uploads/pic/2020/11/59_putorana.jpg'
    },
    {
        image: 'https://avatars.mds.yandex.net/get-zen_doc/1852544/pub_5d06a5332189030db3bcf236_5d06a53a20f7430dda23b1f0/scale_1200'
    },
    {
        image: 'https://traveltimes.ru/wp-content/uploads/2021/06/viewImage-1.jpg'
    }
]

const App: FC = () => (
    <div>
        <CssBaseline/>
        <Header/>
        <Carousel slides={slides} />
        <Catalog/>
    </div>
)

export default App;
