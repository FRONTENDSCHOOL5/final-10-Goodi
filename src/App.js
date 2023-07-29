import React, { lazy, Suspense } from 'react';
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './pages/Login';
import Join from './pages/Join'
import Setprofile from './pages/Setprofile';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectRoute from './pages/ProtectRoute';

function App() {

  const Main = lazy(() => import("./pages/Main"))
  const Detail = lazy(() => import("./pages/Detail"))
  const Profile = lazy(() => import("./pages/Profile"))
  const Chat = lazy(() => import("./pages/Chat"))
  const ProductUpload = lazy(() => import("./pages/ProductUpload"))
  const PostUpload = lazy(() => import("./pages/PostUpload"))
  const PostUpdate = lazy(() => import("./pages/PostUpdate"))
  const ProductUpdate = lazy(() => import("./pages/ProductUpdate"))
  const Cart = lazy(() => import("./pages/Cart"))

  return (
    <BrowserRouter basename='/final-10-Goodi'>
      <Suspense fallback={<div>로딩중.. </div>}>
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
            <Route path="/profile/:accountname" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/postproduct" element={<ProductUpload />} />
            <Route path="/postposting" element={<PostUpload />} />
            <Route path="/product/:product_id" element={<ProductUpdate />} />
            <Route path="/uploadPosting/:posting_id" element={<PostUpdate />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;