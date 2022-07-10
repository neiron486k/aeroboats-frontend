import React, {FC} from 'react';
import Header from "../components/Header";
import Home from "../sections/Home";
import Catalog from "../sections/Catalog";

const Landing: FC = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Catalog/>
        </>
    );
};

export default Landing;