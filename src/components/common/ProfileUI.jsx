import React, { Children } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProfileUI(props) {
  const { user_profile, user_name, user_email, mainprofile, children } = props;

  return (
    <UserProfile mainprofile={mainprofile}>
      <img src={user_profile} alt="유저 프로필 이미지" />
      <div>
        <h3>{user_name}</h3>
        <p>{user_email}</p>
      </div>
      {children}
    </UserProfile>
  );
}

const StyledLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;

const UserProfile = styled(StyledLink)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: var(--black-color);
  text-decoration: none;
  margin-bottom: 32px;

  & > img {
    width: ${(props) => (props.mainprofile ? "80px" : "56px")};
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
  }
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    margin-left: 16px;

    & > h3 {
      font-family: var(--font--semibold);
      font-size: ${(props) => (props.mainprofile ? "24px" : "18px")};
    }
    
    & > p {
      color: var(--gray400-color);
      font-size: ${(props) => (props.mainprofile ? "20px" : "14px")};
    }
  }
`;


export default ProfileUI;