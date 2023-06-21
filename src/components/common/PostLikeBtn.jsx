import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { likedState } from '../../recoil/like';
import likeAPI from "../../api/likeBtn";
import cancleLikeAPI from "../../api/cancleLikeBtn"
import postingAPI from "../../api/posting";
import loginToken from "../../recoil/loginToken";

import nonLikeIcon from "../../assets/empty_likeBtn.svg";
import likeIcon from "../../assets/post_fullLikeBtn.svg";

// 기능 구현된거 없어요!!
function PostLikeBtn({ postId, getHeartData, cancleHeartData }) {
  const initialHearted = localStorage.getItem(`hearted_${postId}`) === "true";
  const [token] = useRecoilState(loginToken);
  // const [liked, setLiked] = useRecoilState(likedState);
  const [liked, setLiked] = useState(false);
  const [heartCount, setHeartCount] = useState(0); 
  const [hearted, sethearted] = useState(initialHearted);
  const [heartValue, setHeartValue] = useState(0);
  

  const handleLike = async () => {
    try {
      if (hearted) {
        // 이미 하트를 누른 경우, 좋아요 취소
        const response = await cancleLikeAPI(token, postId);
        if (response) {
          setLiked(false);
          setHeartCount(response.post.heartCount);
          sethearted(response.post.hearted);
          cancleHeartData();
          localStorage.removeItem(`hearted_${postId}`);
        }
      } else {
        // 하트를 누르지 않은 경우, 좋아요
        const response = await likeAPI(token, postId);
        if (response) {
          setLiked(true);
          setHeartCount(response.post.heartCount);
          sethearted(response.post.hearted);
          localStorage.setItem(`hearted_${postId}`, response.post.hearted);
          getHeartData();
        }
      }
    } catch (error) {
      console.log("좋아요 API 에러가 발생했습니다", error);
    }
  }

  // useEffect(() => {
  //   sethearted(hearted);
  // }, [hearted]);

  // useEffect(() => {
  //   setHeartCount(heartCount);
  // }, [hearted]);
  useEffect(() => {
    sethearted(initialHearted);
  }, [initialHearted]);

  return (
    <Button liked={hearted} onClick={handleLike} >
  </Button>
  );
  }
export default PostLikeBtn;
const Button = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
  background: ${(props) =>
    props.liked ? `url(${likeIcon})` : `url(${nonLikeIcon})`};
`; 
// const Img = styled.img`
//   content: ${(props) =>
//     props.liked ? `url(${likeIcon})` : `url(${nonLikeIcon})`};
// `;