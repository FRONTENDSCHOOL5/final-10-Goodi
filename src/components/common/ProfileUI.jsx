import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/profile_img_def.svg"

function ProfileUI(props) {
  const { user_profile, user_name, user_email, mainprofile, card, follow, account_name, children } = props;

  return (
    <UserProfile
      mainprofile={mainprofile}
      card={card}
      follow={follow}
      to={`/profile/${account_name}`}
      onClick={(e) => { console.log(e.target); }}
    >
      <img src={user_profile || defaultImage} alt="유저 프로필 이미지" />
      <div>
        <strong>{user_name}</strong>
        <p>{user_email}</p>
      </div>
      {children}
    </UserProfile>
  );
}

const UserProfile = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: var(--black-color);
  text-decoration: none;
  margin-bottom: ${(props) => (props.card ? "16px" : "18px")};

  & > img {
    width: ${(props) => (props.mainprofile ? "65px" : "56px")};
    width: ${(props) => (props.follow && "40px")};
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

    & > strong {
      font-family: var(--font--semibold);
      font-size: ${(props) => (props.mainprofile ? "20px" : "18px")};
      font-size: ${(props) => (props.follow && "15px")};
    }
    
    & > p {
      color: var(--gray400-color);
      font-size: ${(props) => (props.mainprofile ? "16px" : "14px")};
      font-size: ${(props) => (props.follow && "12px")};
    }
  }
`;


export default ProfileUI;