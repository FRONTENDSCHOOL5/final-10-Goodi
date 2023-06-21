import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import styled from 'styled-components';
import ProfileRightUI from './ProfileRightUI';
import ProfileLeftUI from './ProfileLeftUI';
import ProfileSkeleton from '../style/skeletonUI/skeletonPage/ProfileSkeleton';
import { useRecoilValue } from 'recoil';
import loginToken from '../recoil/loginToken';
import profileAPI from '../api/profile';

export default function ProfileTest() {
  // 리코일 값 불러오기
  const token = useRecoilValue(loginToken);

  // 프로필 정보 불러오기
  const [profileData, setProfileData] = useState(null);

  const [loading, setLoading] = useState(true);

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

  return (
    <Layout reduceTop="true">
      <ProfileWrap>
        {loading ? (
          <ProfileSkeleton />
        ) : (
          <>
            <ProfileLeftUI
              setLoading={setLoading}
              profileData={profileData}
              setProfileData={setProfileData}
            />
            <ProfileRightUI />
          </>
        )}
      </ProfileWrap>
    </Layout>
  )
}

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.4fr auto;
  grid-template-rows: auto;
  gap: 30px;

  padding: 90px 60px 0 80px;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: #000;
  }
`