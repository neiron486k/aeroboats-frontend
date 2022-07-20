import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Catalog from './sections/Catalog';
import Home from './sections/Home';

const App: FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Home />
    <Catalog />
  </>
);

export default App;
