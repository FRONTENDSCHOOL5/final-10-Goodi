import React from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join'
import Detail from './pages/Detail';
import Setprofile from './pages/Setprofile';
import Profile from './pages/profile/Profile';
import UserProfile from './pages/userProfile/UserProfile';
import Chat from './pages/Chat';
import ProductUpload from './pages/ProductUpload';
import PostUpload from './pages/PostUpload';
import NotFound from './pages/NotFound';
import PostUpdate from './pages/PostUpdate';
import ProductUpdate from './pages/ProductUpdate';
import Cart from './pages/Cart';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectRoute from './pages/ProtectRoute';

function App() {
  return (
    <BrowserRouter basename='/final-10-Goodi'>
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/setprofile" element={<Setprofile />} />
        <Route element={
          <ProtectRoute>
            <Outlet />
          </ProtectRoute>
        } >
          <Route path="/main" element={<Main />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:account_name" element={<UserProfile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/postproduct" element={<ProductUpload />} />
          <Route path="/postposting" element={<PostUpload />} />
          <Route path="/product/:product_id" element={<ProductUpdate />} />
          <Route path="/uploadPosting/:posting_id" element={<PostUpdate />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;