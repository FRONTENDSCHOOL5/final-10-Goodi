import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import ProfileUI from "../ProfileUI";
import ButtonPostLike from "../common/Button/ButtonPostLike";

import postMenu from "../../assets/post_menu.svg";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import LocalNav from "../common/LocalNav";
import Modal from "../common/Modal";
import checkImageUrl from "../common/checkImageUrl";

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
    elapsedTimeString += `${days}일 전`;
  } else if (hours > 0) {
    elapsedTimeString += `${hours}시간 전`;
  } else if (minutes > 0) {
    elapsedTimeString += `${minutes}분 전`;
  } else {
    elapsedTimeString += `${seconds}초 전`;
  }

  return elapsedTimeString;
};

export default function PostCard({
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
  const handleClick = useRef();
  const elapsedTimeString = getElapsedTime(createdAt);
  const [heartValue, setHeartValue] = useState(heartCount);
  const [isHidden, setIsHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getHeartData = () => {
    setHeartValue((prev) => (prev += 1));
  };
  const cancleHeartData = () => {
    setHeartValue((prev) => (prev -= 1));
  };

  const handleLocalNav = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const localNavElement = document.getElementById("localNavElement");

      if (
        localNavElement &&
        !localNavElement.contains(event.target) &&
        !handleClick.current.contains(event.target)
      ) {
        setIsHidden(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const myaccount_name = useRecoilValue(accountname);
  const temp = useParams();
  const account_name = temp.account_name ? temp.account_name : myaccount_name;

  return (
    <PostOuter>
      <PostTop>
        <ProfileUI
          user_profile={checkImageUrl(profileImage, "profile")}
          user_name={username}
          user_email={email}
          mainprofile={false}
          card={true}
          account_name={account_name}
        />
        {account_name === myaccount_name && (
          <button onClick={handleLocalNav}>
            <img
              src={postMenu}
              alt="게시글 삭제 및 신고 메뉴"
              ref={handleClick}
            />
          </button>
        )}
        <LocalNavWrap>
          {isHidden ? (
            <LocalNav
              handleModal={handleModal}
              width="120px"
              fontSize="14px"
              lists={[
                { name: "게시글 수정", nav: `/uploadPosting/${postId}` },
                { name: "게시글 삭제", nav: "" },
              ]}
            />
          ) : (
            false
          )}
        </LocalNavWrap>
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
            <ButtonPostLike
              postId={postId}
              getHeartData={getHeartData}
              cancleHeartData={cancleHeartData}
              liked={hearted}
            />
          </div>
        </div>
      </PostContent>
      {showModal && (
        <Modal
          postId={postId}
          showModal={showModal}
          setShowModal={setShowModal}
          handleModal={handleModal}
          text="게시물을 정말 삭제하시겠습니까?"
          buttonText1="삭제하겠습니다"
          buttonText2="아니요, 삭제하지 않습니다"
          showCloseButton={false}
        />
      )}
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
  position: relative;
  display: flex;
  & > button {
    height: 40px;
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
  }
  strong {
    font-size: 16px;
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
    height: 85px;
    display: flex;
    align-items: flex-start;
  }
  p {
    font-family: var(--font-Regular);
    color: var(--gray500-color);
    font-size: 1rem;
    line-height: 1.4rem;
    display: inline;
  }
`;
const LocalNavWrap = styled.div`
  position: absolute;
  top: 43px;
  right: 0;
`;
