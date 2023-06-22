import React from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join'
import Detail from './pages/Detail';
import Setprofile from './pages/Setprofile';
import Profile from './pages/profile/Profile';
import UserProfile from './pages/userProfile/UserProfile';
import Chat from './pages/Chat';
import PostProduct from './pages/PostProduct';
import PostPosting from './pages/PostPosting';
import NotFound from './pages/NotFound';
import UpdatePostUI from './components/common/UpdatePostUI';
import UpdatePosting from './pages/UpdatePosting';

function App() {
  return (
    <BrowserRouter>
      <Link to="/login"></Link>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/setprofile" element={<Setprofile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:account_name" element={<UserProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/postproduct" element={<PostProduct />} />
        <Route path="/postposting" element={<PostPosting />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/product/:product_id" element={<UpdatePostUI />} />
        <Route path="/uploadPosting/:posting_id" element={<UpdatePosting />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;