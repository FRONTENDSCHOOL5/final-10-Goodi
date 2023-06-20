import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import loginToken from '../recoil/loginToken';

import goodiLoading from "../assets/goodi_loading.svg";

import IntroUI from './IntroUI';
import FollowUI from './FollowUI';

import profileAPI from '../api/profile';
import UpdateProfile from './UpdateProfile';

export default function ProfileLeftUI() {
  // 리코일 값 불러오기
  const token = useRecoilValue(loginToken);

  // 프로필 정보 불러오기
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(profileData.user);

  // 프로필 정보 수정
  const [isEditing, setIsEditing] = useState(false);

  // 프로필 정보 불러오기
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await profileAPI(token);
        setProfileData(response);
        setLoading(false);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };

    fetchProfileData();
  }, []);

  // 로딩, 사용자 정보 없음 예외처리
  if (loading) {
    return (
      <LoadingStyle>
        <p>로딩중...</p>
      </LoadingStyle>
    );
  }

  if (!profileData) {
    return (
      <LoadingStyle>
        <p>사용자 정보를 불러올 수 없습니다.</p>
      </LoadingStyle>
    )
  }

  return (
    <>
      {
        isEditing ? (
          <ProfileLeft edit="true">
            <UpdateProfile
              profileData={profileData}
              setIsEditing={setIsEditing}
              setProfileData={setProfileData}
            />
          </ProfileLeft>
        ) :
          <ProfileLeft>
            <IntroUI
              profileData={profileData}
              setIsEditing={setIsEditing}
            />
            <FollowUI
              profileData={profileData}
              setIsEditing={setIsEditing}
              setProfileData={setProfileData}
            />
          </ProfileLeft>
      }
    </>
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

const LoadingStyle = styled.div`
  background: url(${goodiLoading}) 50% 40% / 30% no-repeat;
  height: 100vh;

  p {
    font-size: 38px;
    text-align: center;
    font-family: var(--font--Bold);
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`