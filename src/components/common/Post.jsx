import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import ProfileUI from "./ProfileUI";
import PostLikeBtn from "./PostLikeBtn";

import postMenu from "../../assets/post_menu.svg";
import nonLikeIcon from "../../assets/empty_likeBtn.svg";
import likeIcon from "../../assets/post_fullLikeBtn.svg";
import { useRecoilValue } from "recoil";
import accountname from "../../recoil/accountname";


const getElapsedTime = (createdAt) => {
  const currentTime = new Date();
  const createdDateTime = new Date(createdAt);
  const elapsedMilliseconds = currentTime - createdDateTime;

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;

  const days = Math.floor(elapsedMilliseconds / msInDay);
  const hours = Math.floor((elapsedMilliseconds % msInDay) / msInHour);
  const minutes = Math.floor((elapsedMilliseconds % msInHour) / msInMinute);
  const seconds = Math.floor((elapsedMilliseconds % msInMinute) / msInSecond);

  let elapsedTimeString = "";
  if (days > 0) {
    elapsedTimeString += `${days}일 `;
  }
  if (hours > 0) {
    elapsedTimeString += `${hours}시간 `;
  }
  if (minutes > 0) {
    elapsedTimeString += `${minutes}분 `;
  }
  if (seconds > 0) {
    elapsedTimeString += `${seconds}초`;
  }

  return elapsedTimeString;
};

export default function Post({
  username,
  profileImage,
  email,
  content,
  image,
  createdAt,
  postId,
  hearted,
  heartCount,
  updateHeartCount,
}) {
  const elapsedTimeString = getElapsedTime(createdAt);
  const [heartValue, setHeartValue] = useState(heartCount);

  const getHeartData = () => {
    setHeartValue(prev => prev += 1);
  };
  const cancleHeartData = () => {
    setHeartValue(prev => prev -= 1);
  };

  const myaccount_name = useRecoilValue(accountname);
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  const temp = useParams();
  const account_name = temp.account_name ? temp.account_name : myaccount_name;

  return (
    <PostOuter>
      <PostTop>
        <ProfileUI
          user_profile={BASE_URL + profileImage}
          user_name={username}
          user_email={email}
          mainprofile={true}
          card={true}
          account_name={account_name}
        />
        <button>
          <img src={postMenu} alt="게시글 삭제 및 신고 메뉴" />
        </button>
      </PostTop>
      <PostContent>
        <div className="p_box">
          <p>{content}</p>
        </div>
        <img src={image} alt="" />
        <div>
          <span>{elapsedTimeString}</span>
          <div className="like_wrap">
            <span>{heartValue}</span>
            <PostLikeBtn postId={postId} getHeartData={getHeartData} cancleHeartData={cancleHeartData} />
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
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  span {
    font-family: var(--font-Regular);
    color: var(--gray400-color);
    margin-right: 5px;
    font-size: 1rem;
  }
  .p_box {
    min-height: 80px;
    display: flex;
    align-items: flex-start;
  }
  p {
    font-family: var(--font-Regular);
    color: var(--gray500-color);
    font-size: 1rem;
    line-height: 1.4rem;
    display: inline;

    /* margin-bottom: 16px; */
    /* text-align: justify; */

    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; */
  }
`;
