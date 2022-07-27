import React, {FC} from 'react';
import {CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/Product";
import Landing from "./pages/Landing";

const App: FC = () => (
    <div>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/products/:id" element={<Product/>} />
        </Routes>
    </div>
)

export default App;
