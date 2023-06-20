import React, { useState } from 'react'
import styled from 'styled-components';

import PlusBtnImg from "../assets/add_button.svg";

import { useRecoilValue } from 'recoil';
import loginToken from '../recoil/loginToken';

import { InputBox } from '../components/common/Input';
import Button from '../components/common/Button';

import PostImageAPI from '../api/UploadImage';
import updateProfile from '../api/updateProfile';


export default function UpdateProfile({ profileData, setIsEditing, setProfileData }) {
  // 리코일 값 불러오기
  const token = useRecoilValue(loginToken);

  // 프로필 이미지 업로드
  const [changeImageURL, setChangeImageURL] = useState("");

  // 이미지 fetch
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const imgSrc = await PostImageAPI(file);

    setChangeImageURL(BASE_URL + imgSrc);
  };

  console.log(changeImageURL); // 이미지 url

  // 저장 버튼 클릭 시 수정된 API에 데이터 전달
  const handleSaveClick = (e) => {
    e.preventDefault();

    const updatedProfileData = {
      ...profileData,
      user: {
        ...profileData.user,
        image: changeImageURL,
      },
    };

    setProfileData(updatedProfileData);
    updateProfile(profileData, token);
    setIsEditing(false);
  };

  // 프로필 수정 취소 이벤트
  const handleCancelClick = () => {
    setIsEditing(false);
    // 수정 취소를 눌렀는데 변경된 값이 화면에 렌더링됨 (값 저장은 X)
    // 수정 취소를 눌렀을 때 서버에서 받아온 초기값으로 돌림
  };

  // input 값 올바르게 받기
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  console.log(profileData);

  return (
    <>
      <ProfileDiv>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          accept="image/jpeg, image/png, image/svg"
          onChange={handleImageChange}
        />
        <label htmlFor="fileInput">
          <ProfileImgWrap>
            <img
              src={changeImageURL || profileData.user.image}
              alt="Upload"
            />
            {/* 이미지를 바꾸지 않고 저장 완료를 누를 시 이미지 null 이슈 */}
          </ProfileImgWrap>
          <img className="add_button_img"
            src={PlusBtnImg}
            alt="Upload"
            style={{ cursor: "pointer" }}
          />
        </label>
      </ProfileDiv>
      <Form onSubmit={handleSaveClick}>
        <div>
          <Label>닉네임</Label>
          <InputBox
            width="100%"
            height="48px"
            padding="15px"
            name="username"
            value={profileData.user.username}
            onChange={handleInputChange}
            placeholder="변경할 닉네임을 입력해주세요"
          />
        </div>
        <div>
          <Label>소개 메세지</Label>
          <textarea
            placeholder="소개 글을 입력해주세요"
            name="intro"
            value={profileData.user.intro}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <Button
          text="수정 취소"
          type="button"
          bg="white"
          color="black"
          width="100%"
          padding="14px 0"
          fontSize="16px"
          onClick={handleCancelClick}
        />
        <Button
          text="수정 완료"
          type="submit"
          bg="black"
          width="100%"
          padding="14px 0"
          fontSize="16px"
          br="none"
        />
      </Form>
    </>
  )
}

const ProfileImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1 / 1;
  & > img {
    width: 110px;
    aspect-ratio: 1/ 1;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const ProfileDiv = styled.div`
  position: relative;
  margin-bottom: 30px;
  .add_button_img {
    position: absolute;
    top: 70px;
    left: 70px;
  }
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;

  & > div:first-child {
    margin-bottom: 32px;
  } 
  
  textarea {
    resize: none;
    border: 1px solid var(--gray300-color);
    width: 100%;
    min-height: 130px;
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    outline-color: black;
    font-family: var(--font--Regular);
    font-size: 1rem;
    &::placeholder {
      color: var(--gray300-color);
      font-family: var(--font--Regular);
      font-size: 1rem;
    }
  }

  button {
    margin-top: 30px;

    &:last-child {
      margin-top: 15px;
    }
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 9px;
  font-family: var(--font--Bold);
  font-weight: 700;
`;