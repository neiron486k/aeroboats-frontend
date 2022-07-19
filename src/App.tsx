import React, {FC, useEffect} from 'react';
import Header from "./components/Header";
import {Box, CssBaseline} from "@mui/material";
import Catalog from "./sections/Catalog";
import Home from "./sections/Home";
import {useScrollDirection} from "./hooks/mouse";

const App: FC = () => {
    const scrollDirection = useScrollDirection();

    useEffect(() => {
    }, [scrollDirection])

    return (
        <Box>
            <CssBaseline/>
            <Header/>
            <Home/>
            <Catalog/>
        </Box>
    );
};

export default App;
