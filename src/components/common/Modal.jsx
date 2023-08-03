import styled from "styled-components";
import Button from "./Button/Button";
import CloseButton from "../../assets/close-button.svg";
import { useState, useEffect } from "react";
import LogoutHandler from "../Logout";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { productDeleteAPI } from "../../api/product";
import { postDeleteAPI } from "../../api/post";
import { checkDeletePost } from "../../recoil/checkChange";

export default function Modal({
  text,
  buttonText1,
  buttonText2,
  showCloseButton,
  showModal,
  setShowModal,
  handleModal,
  postId,
  ...props
}) {
  // const handleLogout = LogoutHandler().handleLogout;
  const token = useRecoilValue(loginToken);
  const { handleLogout } = LogoutHandler();
  const [checkDelete, setCheckDelete] = useRecoilState(checkDeletePost);

  const handleClick = async (e) => {
    if (e.target.innerText === "삭제하겠습니다") {
      const response = await postDeleteAPI(postId, token);
      setCheckDelete((prev) => !prev);
      return response;
    } else if (e.target.innerText === "상품을 삭제하겠습니다") {
      const response = await productDeleteAPI(postId, token);
      setCheckDelete((prev) => !prev);
      return response;
    } else {
      handleLogout();
    }
    handleLogout();
  };

  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    disableScroll();
    // modal 닫히면 다시 스크롤 가능하도록 함
    return () => enableScroll();
  }, []);

  // 스크롤 막는 함수
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // 스크롤 가능하게 하는 함수
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <ModalBgDark showModal={showModal} onClick={handleModal}>
        <ModalBgWhite showModal={showModal} onClick={handleModal}>
          <ModalInner>
            <span>{text}</span>
            <div>
              <Button width="100%" text={buttonText1} onClick={handleClick} />
              <Button
                width="100%"
                bg="white"
                color="black"
                onClick={handleModal}
                text={buttonText2}
              />
            </div>
          </ModalInner>
          {showCloseButton && (
            <button onClick={handleModal}>
              <img src={CloseButton} alt="닫기 버튼" />
            </button>
          )}
        </ModalBgWhite>
      </ModalBgDark>
    </>
  );
}

const ModalBgDark = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const ModalBgWhite = styled.div`
  width: 378px;
  background-color: white;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  & > button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
  & img {
    cursor: pointer;
  }
`;
const ModalInner = styled.div`
  max-width: 305px;
  margin: 0 auto;
  padding-bottom: 32px;
  padding-top: 60px;
  & span {
    display: block;
    font-size: 19px;
    margin-bottom: 30px;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & > div > button {
    font-size: 14px;
    font-family: var(--font--semibold);
    border-radius: 4px;
  }

  & > div > button:first-child {
    margin-bottom: 16px;
  }
`;
