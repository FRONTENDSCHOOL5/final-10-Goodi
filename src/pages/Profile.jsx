import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import loginToken from "../recoil/loginToken";
import profileAPI, { accountProfileAPI } from "../api/profile";
import { checkFollow } from "../recoil/checkChange";
import ProfileLeftUI from "../layout/profileLayout/ProfileLeftUI";
import ProfileRightUI from "../layout/profileLayout/ProfileRightUI";
import Layout from "../layout/Layout";
import accountname from "../recoil/accountname";
import { useNavigate, useParams } from "react-router-dom";
import ProfileSkeleton from './../style/skeletonUI/skeletonPage/ProfileSkeleton';

import account_name from '../recoil/accountname'

export default function Profile() {
  const { accountname } = useParams();
  const [loading, setLoading] = useState(true);

  const [myProfile, setMyProfile] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const token = useRecoilValue(loginToken);
  const myAccount = useRecoilValue(account_name);


  useEffect(() => {
    setMyProfile(myAccount === accountname);
    const getProfileData = async () => {
      const res = await accountProfileAPI(accountname, token);
      setProfileData(res);
      setLoading(false);
    }
    getProfileData()
  }, [accountname])

  console.log(accountname);
  console.log(profileData);
  console.log(myProfile);


  // // 유저 프로필
  // const navigate = useNavigate();

  // const navigateMyProfile = () => {
  //   navigate("/profile");
  // };

  // // 리코일 값 불러오기
  // const token = useRecoilValue(loginToken);
  // const accountName = useRecoilValue(accountname);

  // // 프로필 정보 불러오기
  // const [profileData, setProfileData] = useState(null);


  // // 프로필 정보 불러오기
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await accountProfileAPI(account_name, token);
  //       setProfileData(response);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Account API 에러가 발생했습니다", error);
  //     }
  //   };

  //   fetchProfileData();
  // }, [account_name]);


  // // 프로필 정보 불러오기
  // const token = useRecoilValue(loginToken);
  // const [profileData, setProfileData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [fetchProfile, setFetchProfile] = useState(true);
  // const checkFollowChange = useRecoilValue(checkFollow);

  // // 프로필 정보 불러오기
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await profileAPI(token);
  //       setProfileData(response);
  //       setLoading(false);
  //       setFetchProfile(false);
  //     } catch (error) {
  //       console.error("Profile API 에러가 발생했습니다", error);
  //     }
  //   };
  //   if (fetchProfile) {
  //     setFetchProfile(false);
  //     fetchProfileData();
  //   }
  // }, [
  //   setFetchProfile,
  //   fetchProfile,
  //   setProfileData,
  //   setLoading,
  //   checkFollowChange,
  // ]);

  // const getProfileData = async () => {
  //   const res = await profileAPI(token)
  //   setProfileData(res)
  // }

  // useEffect(() => {
  //   getProfileData();
  // }, [])


  return (
    <Layout reduceTop="true">
      <ProfileWrap>
        {loading ? (
          <ProfileSkeleton />
        ) : (
          <>
            <ProfileLeftUI
              // setLoading={setLoading}
              // profileData={profileData}
              setProfileData={setProfileData}
              // setFetchProfile={setFetchProfile}
              myProfile={myProfile}
              accountname={accountname}
              profileData={profileData}
            />
            <ProfileRightUI
              accountname={accountname}
            />
          </>
        )}
      </ProfileWrap>
    </Layout>
  );
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: #000;
  }
`;
