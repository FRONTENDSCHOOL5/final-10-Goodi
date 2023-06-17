import React from 'react'
import styled from 'styled-components';
import Button from './common/Button';
import { InputBox } from './common/Input';

import ProfileImgDef from "../assets/profile_img_def.svg";
import PlusBtnImg from "../assets/add_button.svg";

export default function UpdateProfile({ handleSaveClick, editedProfileData, handleInputChange }) {

  return (
    <>
      <ProfileDiv>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
        // onChange={}	
        />
        <label htmlFor="fileInput">
          <img
            src={ProfileImgDef}
            alt="Upload"
            style={{ cursor: "pointer" }}
          />
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
            value={editedProfileData.username}
            onChange={handleInputChange}
            placeholder="변경할 닉네임을 입력해주세요"
          />
        </div>
        <div>
          <Label>소개 메세지</Label>
          <textarea
            placeholder="소개 글을 입력해주세요"
            name="intro"
            value={editedProfileData.intro}
            onChange={handleInputChange}
          ></textarea>
        </div>
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

const ProfileDiv = styled.div`
  position: relative;
  margin-bottom: 30px;
  .add_button_img {
    position: absolute;
    top: 67px;
    left: 67px;
  }
  cursor: pointer;
`;

const Form = styled.form`
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
    margin-top: 40px;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 9px;
  font-family: var(--font--Bold);
  font-weight: 700;
`;