import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import loginToken from "../../recoil/loginToken";
import Layout from "../../layout/Layout";
import accountname from "../../recoil/accountname";
import accountProfileAPI from "./../../api/accountProfile";
import ProfileSkeleton from "../../style/skeletonUI/skeletonPage/ProfileSkeleton";
import ProfileLeftUI from "../userProfile/ProfileLeftUI";
import ProfileRightUI from "../userProfile/ProfileRightUI";

export default function UserProfileTest() {
  const { account_name } = useParams();
  const navigate = useNavigate();

  const navigateMyProfile = () => {
    navigate("/profile");
  };

  // 리코일 값 불러오기
  const token = useRecoilValue(loginToken);
  const accountName = useRecoilValue(accountname);

  // 프로필 정보 불러오기
  const [profileData, setProfileData] = useState(null);

  const [loading, setLoading] = useState(true);

  // 프로필 정보 불러오기
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await accountProfileAPI(account_name, token);
        setProfileData(response);
        setLoading(false);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };

    fetchProfileData();
  }, [account_name]);
  console.log(profileData);

  return (
    <Layout reduceTop="true">
      <ProfileWrap>
        {loading ? (
          <ProfileSkeleton />
        ) : account_name === accountName ? (
          navigateMyProfile()
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
