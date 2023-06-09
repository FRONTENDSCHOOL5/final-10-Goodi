import React from "react";
import styled from "styled-components";
import ProfileUI from "./common/ProfileUI";
import followers from "../assets/Followers.svg";
import following from "../assets/Following.svg";
import followSymbol from "../assets/follow_symbol.svg";
import ButtonFollow from "./common/ButtonFollow";
import checkImageUrl from "./common/checkImageUrl";

export default function Follow(props) {
  const { followerData, followingData, activeFollow } = props;

  return (
    <FollowWrap>
      {activeFollow === 1 ? (
        <h2>
          <img src={followers} alt="" />
        </h2>
      ) : (
        <h2>
          <img src={following} alt="" />
        </h2>
      )}

      {activeFollow === 1 && followerData && followerData?.length > 0 ? (
        followerData.map((follow) => (
          <BtnWrap key={follow._id}>
            <ProfileUI
              user_profile={checkImageUrl(follow.image, 'profile')}
              user_name={follow.username}
              user_email={follow.accountname}
              // followerData 에는 email이 없어서 accountname으로 대체하여 삽입
              account_name={follow.accountname}
              follow="true"
            />
            <ButtonFollow
              isFollow={follow.isfollow}
              accountName={follow.accountname}
            />
          </BtnWrap>
        ))
      ) : activeFollow === 2 && followingData && followingData?.length > 0 ? (
        followingData.map((follow) => (
          <BtnWrap key={follow._id}>
            <ProfileUI
              user_profile={checkImageUrl(follow.image, 'profile')}
              user_name={follow.username}
              user_email={follow.accountname}
              // followerData 에는 email이 없어서 accountname으로 대체하여 삽입
              account_name={follow.accountname}
              follow="true"
            ></ProfileUI>
            <ButtonFollow
              isFollow={follow.isfollow}
              accountName={follow.accountname}
            />
          </BtnWrap>
        ))
      ) : (
        <FollowNull>
          <img src={followSymbol} alt="" />
          아직 유저가 존재하지 않습니다.
        </FollowNull>
      )}
    </FollowWrap>
  );
}

const FollowWrap = styled.article`
  width: 100%;

  h2 {
    height: 33px;
    margin-bottom: 30px;

    & > img {
      width: 50%;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  & > a {
    width: 60%;
    margin-bottom: 0;
  }
`;

const FollowNull = styled.div`
  font-size: 16px;
  color: var(--gray400-color);
  text-align: center;

  img {
    width: 80px;
    display: block;
    margin: 0 auto 10px;
  }
`;
