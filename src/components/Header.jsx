import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo_black.svg";

export default function Header() {
  return (
    <HeaderLayout>
      <h1>
        <LogoLink to="/main">
          <img src={Logo} alt="goodi 로고 이미지" />
        </LogoLink>
      </h1>
      <div className="following_wrap">
        <FollowingIcon to="/"></FollowingIcon>
        <FollowingIcon to="/"></FollowingIcon>
        <FollowingIcon to="/"></FollowingIcon>
        <FollowingIcon to="/"></FollowingIcon>
      </div>
    </HeaderLayout>
  );
}

const StyledLink = styled(Link)``;

const HeaderLayout = styled.header`
  position: fixed;
  width: calc(100% - 80px);
  padding: 16px 60px 16px 80px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  .following_wrap {
    display: flex;
    gap: 12px;
  }
`;

const LogoLink = styled(StyledLink)`
  display: block;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 160px;
    vertical-align: middle;
  }
`;

const FollowingIcon = styled(StyledLink)`
  display: block;
  width: 40px;
  height: 40px;
  background-color: #cccccc;
  border-radius: 50%;
`;