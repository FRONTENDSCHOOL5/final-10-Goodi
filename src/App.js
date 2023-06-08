import React from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join'
import Detail from './pages/Detail';
import Setprofile from './pages/Setprofile';

function App() {
  return (
    <BrowserRouter>
      <Link to="/login"></Link>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/setprofile" element={<Setprofile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
