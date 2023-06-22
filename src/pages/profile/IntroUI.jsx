import React from "react";
import styled from "styled-components";
import ButtonLineIcon from "../../components/common/ButtonLineIcon";

export default function IntroUI({ profileData, setIsEditing }) {
  // 프로필 수정 버튼 이벤트
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  return (
    <>
      <IntroWrap>
        <img src={BASE_URL + profileData.user.image} alt="유저 프로필 이미지" />
        <strong>{profileData.user.username}</strong>
        <p>{profileData.user.accountname}</p>
      </IntroWrap>

      <BtnWrap>
        <ButtonLineIcon
          text="프로필 수정하기"
          onClick={handleEditClick}
          basic="true"
        />
      </BtnWrap>

      <p>{profileData.user.intro || "아직 소개글이 없어요!"}</p>
    </>
  );
}

const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    margin-bottom: 18px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
  }

  strong {
    font-family: var(--font--semibold);
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-family: var(--font--Regular);
    font-size: 18px;
    color: var(--gray400-color);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
