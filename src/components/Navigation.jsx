import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../assets/icon_search_black.svg";
import MypageIcon from "../assets/icon_mypage_active.svg";
import HeartIcon from "../assets/icon_heart_active.svg";
import CartIcon from "../assets/icon_cart_active.svg";
import ChatIcon from "../assets/icon_chat_active.svg";

export default function Navigation() {
  return (
    <NavigationLayout>
      <NavList to="/" className="search">
        <img src={SearchIcon} alt="검색 돋보기 아이콘"></img>
      </NavList>

      <NavList to="/profile">
        <img src={MypageIcon} alt="사람 아이콘"></img>
        <p>My page</p>
      </NavList>

      <NavList to="/">
        <img src={HeartIcon} alt="하트 아이콘"></img>
        <p>Like</p>
      </NavList>

      <NavList to="/">
        <img src={CartIcon} alt="장바구니 아이콘"></img>
        <p>Cart</p>
      </NavList>

      <NavList to="/">
        <img src={ChatIcon} alt="말풍선 아이콘"></img>
        <p>Chat</p>
      </NavList>
    </NavigationLayout>
  );
}

const StyledLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
`;

const NavList = styled(StyledLink)`
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  text-align: center;
  color: var(--gray400-color);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  img {
    width: 32px;
    display: block;
  }
`;

const NavigationLayout = styled.article`
  background-color: #ffffff;
  width: 80px;
  height: 100vh;
  border-left: 1px solid var(--gray200-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 16px;
  box-sizing: border-box;
  position: fixed;
  right: 0;

  .search {
    margin-bottom: 16px;
  }
`;
