import React, { useState } from "react";
import styled from "styled-components";

import nonLikeIcon from "../../assets/non-like-btn.svg";
import likeIcon from "../../assets/like-btn.svg";

// 기능 구현된거 없어요!!
function LikeBtn() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return <Button liked={liked} onClick={handleLike} />;
}

export default LikeBtn;

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
