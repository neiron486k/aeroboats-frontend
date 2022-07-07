import React, {FC} from 'react';
import Header from "./components/Header";
import {CssBaseline} from "@mui/material";
import Catalog from "./sections/Catalog";

const App: FC = () => (
    <div>
        <CssBaseline/>
        <Header/>
        <Catalog/>
    </div>
)

export default App;
