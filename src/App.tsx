import React, { FC } from "react";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import Catalog from "./sections/Catalog";
import Home from "./sections/Home";

const App: FC = () => (
  <div>
    <CssBaseline />
    <Header />
    <Home />
    <Catalog />
  </div>
);

export default App;
