import React, {FC} from 'react';
import Header from "./components/Header";
import {CssBaseline} from "@mui/material";
import Catalog from "./sections/Catalog";
import Carousel from "./sections/Carousel";

const App: FC = () => (
    <div>
        <CssBaseline/>
        <Header/>
        <Carousel/>
        <Catalog/>
    </div>
)

export default App;
