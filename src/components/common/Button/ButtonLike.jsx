import React, { useState } from "react";
import styled from "styled-components";

import nonLikeIcon from "../../../assets/non-like-btn.svg";
import likeIcon from "../../../assets/like-btn.svg";
import Toast from "../Toast";

// 기능 구현된거 없어요!!
function ButtonLike() {
  const [liked, setLiked] = useState(false);
  const [toast, setToast] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setToast(liked ? "좋아요 해제" : "좋아요");
  };

  return (
    <>
      {toast && (
        <Toast setToast={setToast} text={toast} />
      )}
      <Button liked={liked} onClick={handleLike} />
    </>
  );
}

export default ButtonLike;

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
