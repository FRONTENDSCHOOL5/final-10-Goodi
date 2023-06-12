import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileUI from "./ProfileUI";
import PostLikeBtn from "./PostLikeBtn";
import userDummy from "../../mock/userDummy";
import profileImgDef from "../../assets/profile_img_def.svg";
import postMenu from "../../assets/post_menu.svg";
import postImg from "../../assets/post_image2.svg";
import myProfileImg from "../../assets/myProfile-image.svg";
import {InputBox} from "./Input";

export default function Post({ profile, name, email }) {
  const data = userDummy[1];

  return (
    <PostOuter>
      <PostTop>
        <ProfileUI
          user_profile={profileImgDef}
          user_name={data.name}
          user_email={data.email}
          mainprofile={true}
          card={true}
        />
        <button>
          <img src={postMenu} alt="게시글 삭제 및 신고 메뉴" />
        </button>
      </PostTop>
      <PostContent>
        <img src={postImg} />
        <div>
          <PostLikeBtn />
          <span>3일 전 게시물</span>
        </div>
        <p>
          두 줄 까지만 되지롱 두 줄 까지만 되지롱 두 줄 까지만 되지롱 두 줄
          까지만 되지롱 두 줄 까지만 되지롱 두 줄 까지만 되지롱 두 줄 까지만
          되지롱 두 줄 까지만 되지롱 두 줄 까지만 되지롱
        </p>
      </PostContent>
      <PostInput>
        <img src={myProfileImg} alt="내 프로필 사진" />
        <InputBox 
        width="100%" 
        height="48px"
        onChange={() => {}}
        type="text"
        placeholder="댓글 작성하기"></InputBox>
      </PostInput>
    </PostOuter>
  );
}
const StyledLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;

const PostOuter = styled.div`
  margin-top: 15px;
  width: 40%;
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
  margin-bottom: 16px;
  div {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
  span {
    font-family: var(--font-Regular);
    color: var(--gray400-color);
    margin-left: 10px;
    font-size: 1rem;
  }
  p {
    font-family: var(--font-Regular);
    color: var(--gray500-color);
    font-size: 1rem;
    line-height: 1.4rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const PostInput = styled.div`
  display: flex;
  margin-top: 16px;
  img {
    cursor: pointer;
    margin-right: 24px;
    vertical-align: top;
  }
`;
