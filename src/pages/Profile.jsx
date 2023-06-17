import React, { useEffect } from "react";
import styled from "styled-components";

import pointEdgeProfile from "../assets/point-edge-profile.svg";
import authorProducts from "../assets/Author-Products.svg";
import goodiLoading from "../assets/goodi_loading.svg";
import CardProduct from "../components/common/CardProduct";
import ButtonLineIcon from "../components/common/ButtonLineIcon";
import Layout from "../layout/Layout";
import { useState } from "react";
import Follow from "../components/Follow";
import PostList from "../components/common/PostList";
import { useRecoilState } from "recoil";
import loginToken from "../recoil/loginToken";
import profileAPI from "../api/profile";
import accountname from './../recoil/accountname';
import followingAPI from "../api/following";
import followerAPI from "../api/follower";
import updateProfile from "../api/updateProfile";
import UpdateProfile from "../components/UpdateProfile";

export default function Profile(props) {
  // 상품 목록, 게시글 목록 탭
  const [activeTab, setActiveTab] = useState(1);
  // 팔로워, 팔로잉 탭
  const [activeFollow, setActiveFollow] = useState(1);

  // 상품 목록, 게시글 목록 활성화
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // 팔로워, 팔로잉 활성화
  const handleFollowClick = (followNumber) => {
    setActiveFollow(followNumber);
    fetchFollowerData(followNumber);
    fetchFollowingData(followNumber);
  };

  const [token, setToken] = useRecoilState(loginToken);
  const [accountName, setAccountName] = useRecoilState(accountname);

  // 프로필 정보 불러오기
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 팔로워, 팔로잉 불러오기
  const [followingData, setFollowingData] = useState(null);
  const [followerData, setFollowerData] = useState(null);

  // 프로필 정보 수정
  const { user_image, user_name, user_intro } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    image: user_image,
    username: user_name,
    intro: user_intro,
  });

  // 프로필 정보 API 연동
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

  // 팔로워, 팔로잉 API 연동
  useEffect(() => {
    fetchFollowingData(activeFollow);
  }, [activeFollow]);

  useEffect(() => {
    fetchFollowerData(activeFollow);
  }, [activeFollow]);

  const fetchFollowingData = async () => {
    try {
      const response = await followingAPI(accountName, token);
      setFollowingData(response);
    } catch (error) {
      console.error("Account API 에러가 발생했습니다", error);
    }
  };

  const fetchFollowerData = async () => {
    try {
      const response = await followerAPI(accountName, token);
      setFollowerData(response);
    } catch (error) {
      console.error("Account API 에러가 발생했습니다", error);
    }
  };

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

  console.table(profileData);
  console.table(followingData);
  console.log(token);

  // 프로필 수정 버튼 이벤트
  const handleEditClick = () => {
    setIsEditing(true);
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

  // 저장 버튼 클릭 시 수정된 API에 데이터 전달
  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedProfileData = {
      ...profileData,
      user: {
        ...profileData.user,
        ...editedProfileData
      }
    };
    updateProfile(updatedProfileData, token);
    setIsEditing(false);
  };

  return (
    <Layout reduceTop="true">
      <ProfileWrap>

        {
          isEditing ? (
            <ProfileLeft edit="true">
              <UpdateProfile
                handleSaveClick={handleSaveClick}
                editedProfileData={editedProfileData}
                handleInputChange={handleInputChange}
              />
            </ProfileLeft>
          ) : (
            <ProfileLeft>
              <IntroWrap>
                <img src={profileData.user.image} alt="" />
                <strong>{profileData.user.username}</strong>
                <p>{profileData.user.accountname}</p>
              </IntroWrap>

              <BtnWrap>
                {/* <ButtonLineIcon
                    text="작가랑 채팅하기"
                    basic="true"
                    bg="black"
                    color="white"
                  />
                  <ButtonLineIcon text="작가 팔로우" /> */}
                <ButtonLineIcon
                  text="프로필 수정하기"
                  onClick={handleEditClick}
                  basic="true"
                />
              </BtnWrap>

              <p>{profileData.user.intro || "아직 소개글이 없어요!"}</p>

              <FollowWrap>
                <FollowDiv
                  className={activeFollow === 1 ? 'followActive' : ''}
                  onClick={() => handleFollowClick(1)}
                >
                  <strong>{profileData.user.followerCount}</strong>
                  <p>팔로워</p>
                </FollowDiv>
                <FollowDiv
                  className={activeFollow === 2 ? 'followActive' : ''}
                  onClick={() => handleFollowClick(2)}
                >
                  <strong>{profileData.user.followingCount}</strong>
                  <p>팔로잉</p>
                </FollowDiv>
              </FollowWrap>

              <Follow
                followerData={followerData}
                followingData={followingData}
                activeFollow={activeFollow}
              />
            </ProfileLeft>
          )
        }

        <ProfileRight>
          <h2>
            <img src={authorProducts} alt="Follower Products" />
          </h2>

          <TabMenu>
            <TabBtn
              className={activeTab === 1 ? 'active' : ''}
              onClick={() => handleTabClick(1)}
            >
              상품 목록
            </TabBtn>
            <TabBtn
              className={activeTab === 2 ? 'active' : ''}
              onClick={() => handleTabClick(2)}
            >
              게시글 목록
            </TabBtn>
          </TabMenu>
          {activeTab === 1 && <CardProduct profile="true" />}
          {activeTab === 2 && <PostList />}
        </ProfileRight>
      </ProfileWrap>
    </Layout>
  )
}

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
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

const ProfileLeft = styled.section`
  width: 100%;
  max-height: ${(props) => props.edit ? "620px" : "900px"};;
  /* 페이지 네이션 추가 필요 */
  padding: 60px 24px 45px;
  background-color: #fff;
  border: 1px solid var(--gray300-color);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

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

const FollowWrap = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray300-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  gap: 10px;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 50%;
    width: 1px;
    height: calc(100% - 5px);
    display: inline-block;
    background-color: var(--gray200-color);
  }

  .followActive {
    background-color: #F4FFF3;
    border-radius: 4px;

    strong {
      color: var(--dark-sub-color);
    }
  }
`;

const FollowDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 5px;
  padding: 15px;
  cursor: pointer;

  strong {
    font-family: var(--font--semibold);
    font-size: 20px;
  }

  p {
    font-family: var(--font--Medium);
    font-size: 14px;
    color: var(--gray400-color);
    margin-top: 8px;
  }
`;

const ProfileRight = styled.section`
  & > h2 {
    position: relative;
    margin-left: 30px;
    margin-top: 168px;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: -35px;
      left: -34px;
      width: 95px;
      height: 40px;
      background: url(${pointEdgeProfile}) no-repeat center/contain;
      vertical-align: bottom;
    }
  }
`;

const TabMenu = styled.div`
  width: 220px;
  margin: 70px 0 30px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 70%;
    background-color: var(--gray300-color);
    position: absolute;
    top: 5px;
    left: 103px;
  }

  button.active {
    font-family: var(--font--semibold);
    color: black;
  }
`
const TabBtn = styled.button`
  padding: 8px 12px;
  color: var(--gray500-color);
  cursor: pointer;
`

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