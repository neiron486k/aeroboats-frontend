import React, {FC} from 'react';
import Header from "./components/Header";
import {CssBaseline} from "@mui/material";
import Carousel from "./sections/Carousel";

const App: FC = () => (
    <div>
        <CssBaseline/>
        <Header/>
        <Carousel/>
    </div>
)

export default App;
