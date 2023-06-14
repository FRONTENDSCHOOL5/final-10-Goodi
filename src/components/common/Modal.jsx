import styled from "styled-components";
import Button from "./Button";
import CloseButton from "../../assets/close-button.svg";
import { useState } from "react";

export default function Modal({ text,buttonText1, buttonText2, showCloseButton, ...props }) {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalBgDark showModal={showModal} onClick={closeModal}>
      <ModalBgWhite onClick={handleModalClick}>
        <ModalInner>
          <span>{text}</span>
          <div>
            <Button width="100%" text={buttonText1}/>
            <Button width="100%" bg="white" color="black" onClick={closeModal} text={buttonText2} />
          </div>
        </ModalInner>
        {showCloseButton &&
        <button onClick={closeModal}>
          <img src={CloseButton} alt="닫기 버튼" />
        </button>}
      </ModalBgWhite>
    </ModalBgDark>
  );
}

const ModalBgDark = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  position: relative;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;
const ModalBgWhite = styled.div`
  width: 378px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
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
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  & div button:first-child {
    margin-bottom: 16px;
  } 
`;
