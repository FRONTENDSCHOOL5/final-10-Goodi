import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo_black.svg";

export default function Header() {
  return (
    <HeaderLayout>
      <h1>
        <LogoLink to="/">
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

const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 9rem;
    vertical-align: middle;
  }
`;

const HeaderLayout = styled.header`
  position: fixed;
  width: calc(100% - 5rem);
  padding: 0.6rem 5rem 0.6rem 3.75rem;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .following_wrap {
    display: flex;
    gap: 0.75rem;
  }
`;

// const HeaderLayout = styled.header`
//   background-color: white;
//   width: 100%;
//   height: 5rem;
//   padding: 0.6rem 5rem 0.6rem 9.5rem;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #e7e7ff;
//   position: fixed;

//   .following_wrap {
//     display: flex;
//     gap: 0.75rem;
//   }
// `;

const LogoLink = styled(StyledLink)``;

const FollowingIcon = styled(StyledLink)`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #cccccc;
  border-radius: 50%;
`;
