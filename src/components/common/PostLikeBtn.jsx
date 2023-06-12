import React, { useState } from "react";
import styled from "styled-components";

import nonLikeIcon from "../../assets/empty_likeBtn.svg";
import likeIcon from "../../assets/post_fullLikeBtn.svg";

// 기능 구현된거 없어요!!
function PostLikeBtn() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Button liked={liked} onClick={handleLike} />
    </>
  );
}

export default PostLikeBtn;

const Button = styled.button`
  width: 48px;
  height: 48px;
  background: ${(props) =>
    props.liked ? `url(${likeIcon})` : `url(${nonLikeIcon})`};
  border: none;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
`;
