import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileUI from "./ProfileUI";
import PostLikeBtn from "./PostLikeBtn";
import profileImgDef from "../../assets/profile_img_def.svg";
import postMenu from "../../assets/post_menu.svg";
import postImg from "../../assets/post_image2.svg";

export default function Post({ 
    username,
    profileImage,
    email,
    content,
    image,
    createdAt
}) {
  return (
    <PostOuter>
      <PostTop>
        <ProfileUI
          user_profile={profileImage}
          user_name={username}
          user_email={email}
          mainprofile={true}
          card={true}
        />
        <button>
          <img src={postMenu} alt="게시글 삭제 및 신고 메뉴" />
        </button>
      </PostTop>
      <PostContent>
        <p>{content}</p>
        <img src={image} alt="" />
        <div>
          <span>{createdAt}</span>
          <div className="like_wrap">
            <span>3</span>
            <PostLikeBtn />
          </div>
        </div>
      </PostContent>
    </PostOuter>
  );
}

const StyledLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;

const PostOuter = styled.div`
  width: 100%;
`;
const PostTop = styled.div`
  display: flex;
  button {
    height: 56px;
    cursor: pointer;
  }
`;
const PostContent = styled.div`
  width: 100%;
  /* margin-bottom: 16px; */
  & > div {
    /* padding: 10px 0; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .like_wrap {
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
  span {
    font-family: var(--font-Regular);
    color: var(--gray400-color);
    margin-right: 5px;
    font-size: 1rem;
  }
  p {
    font-family: var(--font-Regular);
    color: var(--gray500-color);
    font-size: 1rem;
    line-height: 1.4rem;
    margin-bottom: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
