import React from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import CardProduct from './components/common/CardProduct';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Link to="/login"></Link>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardtest" element={<CardProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
