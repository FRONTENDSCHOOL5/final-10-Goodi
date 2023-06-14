import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 이미지 파일
import SearchIcon from "../assets/icon_search_black.svg";
import MypageIcon from "../assets/icon_mypage_active.svg";
import HeartIcon from "../assets/icon_heart_active.svg";
import CartIcon from "../assets/icon_cart_active.svg";
import ChatIcon from "../assets/icon_chat_active.svg";
import LogoutIcon from "../assets/icon_logout_active.svg";
import PostIcon from "../assets/icon_post_active.svg";
import HomeIcon from "../assets/icon_home_active.svg";

export default function Navigation() {
  const navigate = useNavigate();
  const icons = [
    { name: "Search", image: SearchIcon, nav: "/join" },
    { name: "Home", image: HomeIcon, nav: "/main" },
    { name: "My page", image: MypageIcon, nav: "/profile" },
    { name: "Cart", image: CartIcon, nav: "/login" },
    { name: "Chat", image: ChatIcon, nav: "/login" },
    { name: "Post", image: PostIcon, nav: "/login" },
    { name: "Logout", image: LogoutIcon, nav: "/login" },
  ];

  return (
    <NavigationLayout>
      {icons.map((el, i) => {
        const a = "dkssud";
        return (
          <NavList key={i} onClick={() => navigate(el.nav)}>
            <img src={el.image} alt={el.name} />
            <p className={i === 0 ? "a11y-hidden" : ""}>{el.name}</p>
          </NavList>
        );
      })}
    </NavigationLayout>
  );
}

const NavList = styled.button`
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
  position: relative;
  z-index: 100;
  cursor: pointer;

  img {
    width: 28px;
    display: block;
  }

  &:hover {
    background-color: #f0ffed;
    transition: all 0.3s;
    color: var(--sub-color);
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
  button:nth-child(1) {
    margin-bottom: 32px;
  }
`;
