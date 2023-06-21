import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { likedState } from '../../recoil/like';
import likeAPI from "../../api/likeBtn";
import postingAPI from "../../api/posting";
import loginToken from "../../recoil/loginToken";

import nonLikeIcon from "../../assets/empty_likeBtn.svg";
import likeIcon from "../../assets/post_fullLikeBtn.svg";

// 기능 구현된거 없어요!!
function PostLikeBtn({ postId }) {
  const [token] = useRecoilState(loginToken);
  // const [liked, setLiked] = useRecoilState(likedState);
  const [liked, setLiked] = useState(false);
  
  const [heartCount, setHeartCount] = useState(0); 
  const [hearted, sethearted] = useState(postId)

  console.log(hearted)


  const handleLike = async () => {
    try {
      const response = await likeAPI(token,hearted);
      console.log("likeAPI 응답:", response);
      if (response) {
        setLiked(!liked);
        setHeartCount(response.post.heartCount); // heartCount 업데이트
        sethearted(response.post.hearted);
        console.log(response)
      }
    } catch (error) {
      console.log("좋아요 API 에러가 발생했습니다", error);
    }
  };

  useEffect(() => {
    sethearted(hearted);
  }, [hearted]);


  return (
    <Button liked={liked} onClick={handleLike} >
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

