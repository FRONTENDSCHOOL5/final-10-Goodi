import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { checkFollow } from "../../recoil/checkChange";
import UpdateProfile from '../../components/ProfileCommon/UpdateProfile';
import IntroUI from '../../components/ProfileCommon/IntroUI';
import FollowListUI from "../../components/ProfileCommon/FollowListUI";
import myAccountAtom from '../../recoil/accountname';
import { accountProfileAPI } from "../../api/profile";
import loginToken from "../../recoil/loginToken";
// import accountProfileAPI from "../../api/accountProfile";

export default function ProfileLeftUI({ profileData, setProfileData, myProfile }) {
  // // 프로필 정보 수정
  // const [isEditing, setIsEditing] = useState(false);
  // const checkFollowChange = useRecoilValue(checkFollow);



  // useEffect(() => {
  //   if (!isEditing) {
  //     setFetchProfile(true);
  //   }
  // }, [isEditing, setFetchProfile, checkFollowChange]);

  return (
    // <>
    //     {isEditing ? (
    //       <ProfileLeft edit="true">
    //         <h2 className="a11y-hidden">사용자 프로필 수정</h2>
    //         <UpdateProfile
    //           profileData={profileData}
    //           setIsEditing={setIsEditing}
    //           setProfileData={setProfileData}
    //         />
    //       </ProfileLeft>
    //     ) : (
    <ProfileLeft>
      <h2 className="a11y-hidden">사용자 프로필</h2>
      <IntroUI
        profileData={profileData}
        myProfile={myProfile}
      // setIsEditing={setIsEditing} 
      />
      <FollowListUI
        profileData={profileData}
        // setIsEditing={setIsEditing}
        setProfileData={setProfileData}
      />
    </ProfileLeft>
    //     )}
    // </>
  );

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

  & > button {
    margin: 0 auto;
  }

  & > p {
    text-align: center;
    color: var(--gray500-color);
    font-size: 16px;
    font-family: var(--font--Regular);
    line-height: 1.3;
    text-align: justify;
  }
`;
