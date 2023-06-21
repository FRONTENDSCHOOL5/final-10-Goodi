import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import loginToken from '../../recoil/loginToken';
import accountname from '../../recoil/accountname';
import followingAPI from '../../api/following';
import followerAPI from '../../api/follower';
import Follow from '../../components/Follow';

export default function FollowUI({ profileData }) {
  // 리코일 값 불러오기
  const token = useRecoilValue(loginToken);
  const account_name = useRecoilValue(accountname);

  // 팔로워, 팔로잉 탭
  const [activeFollow, setActiveFollow] = useState(1);

  // 팔로워, 팔로잉 불러오기
  const [followingData, setFollowingData] = useState(null);
  const [followerData, setFollowerData] = useState(null);

  // 팔로워, 팔로잉 활성화
  const handleFollowClick = (followNumber) => {
    setActiveFollow(followNumber);
    followNumber === 1 ? fetchFollowerData() : fetchFollowingData();
  };

  // 팔로워, 팔로잉 API 연동
  useEffect(() => {
    fetchFollowingData();
    fetchFollowerData();
  }, [activeFollow]);

  const fetchFollowingData = async () => {
    try {
      const response = await followingAPI(account_name, token);
      setFollowingData(response);
    } catch (error) {
      console.error("Account API 에러가 발생했습니다", error);
    }
  };

  const fetchFollowerData = async () => {
    try {
      const response = await followerAPI(account_name, token);
      setFollowerData(response);
    } catch (error) {
      console.error("Account API 에러가 발생했습니다", error);
    }
  };

  return (
    <>
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
    </>
  )
}

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