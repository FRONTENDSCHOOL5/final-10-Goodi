import React, { useState } from 'react'
import styled from 'styled-components';
import IntroUI from '../userProfile/IntroUI';
import FollowUI from '../userProfile/FollowUI';

export default function ProfileLeftUI({ profileData, setProfileData }) {
  return (
    <ProfileLeft>
      <IntroUI
        profileData={profileData}
      />
      <FollowUI
        profileData={profileData}
        setProfileData={setProfileData}
      />
    </ProfileLeft>
  )
}

const ProfileLeft = styled.section`
  min-width: 370px;
  height: fit-content;
  padding: 60px 24px 45px;
  background-color: #fff;
  border: 1px solid var(--gray300-color);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  & > p {
    text-align: center;
    color: var(--gray500-color);
    font-size: 16px;
    font-family: var(--font--Regular);
    line-height: 1.3;
    text-align: justify;
  }
`;