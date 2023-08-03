import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 리코일
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import loginToken from "../../recoil/loginToken";
import { checkProfile } from "../../recoil/checkChange";

// api
import { profileAPI } from "../../api/profile";
import { PostImageAPI } from "../../api/UploadImage";
import { updateProfile } from "../../api/profile";

// 컴포넌트
import { InputBox } from "../common/Input";
import Button from "../common/Button/Button";

// 이미지
import PlusBtnImg from "../../assets/add_button.svg";
// 이미지 검사
import checkImageUrl from "../common/checkImageUrl";

export default function UpdateProfile({
  profileData,
  setIsEditing,
  setProfileData,
}) {
  // 리코일
  const token = useRecoilValue(loginToken);

  // 수정 관련 state
  const [changeImageURL, setChangeImageURL] = useState(
    profileData.profile.image
  );
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [userName, setUserName] = useState(profileData.profile.username);
  const [intro, setIntro] = useState(profileData.profile.intro);
  const [checkProfileChange, setCheckProfileChange] =
    useRecoilState(checkProfile);
  const [postChangeImg, setPostChangeImg] = useState({
    user: {
      image: changeImageURL,
    },
  });

  // 이미지 fetch
  const handleImageChange = async (e) => {
    setIsImageUpload(true);
    const file = e.target.files[0];
    const imgSrc = await PostImageAPI(file);

    setChangeImageURL(imgSrc);
    setIsImageUpload(false);
  };

  // 저장 버튼 클릭 시 수정된 API에 데이터 전달
  const handleSaveClick = (e) => {
    e.preventDefault();

    const updatedProfileData = {
      ...profileData,
      user: {
        ...profileData.user,
        image: changeImageURL,
        username: userName,
        intro: intro,
      },
    };

    setProfileData(updatedProfileData);
    updateProfile(updatedProfileData, token);
    setIsEditing(false);
    setCheckProfileChange((prev) => !prev);
  };

  // 프로필 수정 취소 이벤트
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // input 값 올바르게 받기
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else {
      setIntro(value);
    }
  };

  useEffect(() => {
    const postImage = async (token) => {
      const response = await profileAPI(token);
    };

    if (postChangeImg) {
      postImage(postChangeImg, token);
    }
  }, [postChangeImg]);

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
            <img src={checkImageUrl(changeImageURL, "profile")} alt="Upload" />
          </ProfileImgWrap>
          <img
            className="add_button_img"
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
            required
            width="100%"
            height="48px"
            padding="15px"
            name="username"
            value={userName}
            onChange={handleInputChange}
            placeholder="변경할 닉네임을 입력해주세요"
          />
        </div>
        <div>
          <Label>소개 메세지</Label>
          <textarea
            placeholder="소개 글을 입력해주세요"
            name="intro"
            value={intro}
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
          disabled={isImageUpload}
        />
      </Form>
    </>
  );
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
`;

const Label = styled.label`
  display: block;
  margin-bottom: 9px;
  font-family: var(--font--Bold);
  font-weight: 700;
`;
