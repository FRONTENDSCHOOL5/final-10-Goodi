import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProfileUI({ user_profile, user_name, user_email }) {
  return (
    <UserProfile>
      <img className="user_img" src={user_profile} alt="유저 프로필 이미지" />
      <div className="profile_text_wrap">
        <h3>{user_name}</h3>
        <p>{user_email}</p>
      </div>
    </UserProfile>
  );
}

const StyledLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;
const UserProfile = styled(StyledLink)`
  display: flex;
  background-color: white;
  width: 100%;

  .user_img {
    width: 56px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile_text_wrap {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
  }

  .profile_text_wrap h3 {
    font-family: var(--font--semibold);
    font-size: 18px;
  }

  .profile_text_wrap p {
    color: var(--gray400-color);
    font-size: 14px;
  }
`;
