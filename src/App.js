import React from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import CardProduct from './components/common/CardProduct';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<CardProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
