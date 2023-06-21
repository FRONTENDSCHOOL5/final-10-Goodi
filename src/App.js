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
<<<<<<< HEAD
import UserProfile from './pages/UserProfile';
import ProfileTest from './profileTest/ProfileTest';
import NotFound from './pages/NotFound';
=======
>>>>>>> 012494ebc43e86ce1a4871383040aeb933218b12

function App() {
  return (
    <BrowserRouter>
      <Link to="/login"></Link>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/setprofile" element={<Setprofile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:account_name" element={<UserProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/postproduct" element={<PostProduct />} />
        <Route path="/postposting" element={<PostPosting />} />
<<<<<<< HEAD
        <Route path="/profileTest" element={<ProfileTest />} />
        <Route path="/*" element={<NotFound />} />
=======
>>>>>>> 012494ebc43e86ce1a4871383040aeb933218b12
      </Routes>
    </BrowserRouter>
  );
}
export default App;
