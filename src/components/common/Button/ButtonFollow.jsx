import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";

// 컴포넌트
import Toast from "../Toast";

// API
import { followAPI } from "../../../api/follow";
import { unfollowAPI } from "../../../api/follow";

// Recoil
import loginToken from "../../../recoil/loginToken";
import accountname from "../../../recoil/accountname";
import { checkFollow } from "../../../recoil/checkChange";

export default function ButtonFollow({ isFollow, accountName, padding }) {
  const token = useRecoilValue(loginToken);
  const myAccountName = useRecoilValue(accountname);
  const [toast, setToast] = useState(false);
  const [checkFollowChange, setCheckFollowChange] = useRecoilState(checkFollow);

  // 화면상에서 UI 바로 변경되게 보여주기 위해 필요
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsFollowing(isFollow);
  }, [isFollow]);

  // 팔로우
  const handleFollow = async () => {
    try {
      const response = await followAPI(accountName, token);
      setIsFollowing(true);
      handleCart();
      setCheckFollowChange((prev) => !prev);
    } catch (error) {
      console.error("API 에러", error);
    }
  };

  // 팔로우 toast
  const handleCart = () => {
    setToast(true);
  };

  // 언팔로우
  const handleUnFollow = async () => {
    try {
      const response = await unfollowAPI(accountName, token);
      setIsFollowing(false);
      handleCart();
      setCheckFollowChange((prev) => !prev);
    } catch (error) {
      console.error("API 에러", error);
    }
  };

  return (
    <>
      {toast && isFollowing && (
        <Toast setToast={setToast} text="팔로우 되었습니다." />
      )}

      {toast && !isFollowing && (
        <Toast setToast={setToast} text="팔로우가 취소되었습니다." />
      )}

      {isFollowing ? (
        <FollowDelete padding={padding} type="button" onClick={handleUnFollow}>
          삭제
        </FollowDelete>
      ) : (
        <Follow
          padding={padding}
          type="button"
          onClick={handleFollow}
          className={myAccountName === accountName ? "a11y-hidden" : ""}
        >
          팔로우
        </Follow>
      )}
    </>
  );
}

const FollowDelete = styled.button`
  /* padding: 8px 24px; */
  padding: ${({ padding }) => (padding ? "18px 24px;" : "8px 24px")};
  border: 1px solid var(--gray300-color);
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--font--Medium);
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: var(--gray50-color);
  }
`;

const Follow = styled.button`
  padding: ${({ padding }) => (padding ? "18px 24px;" : "8px 24px")};
  /* padding: 8px 24px; */
  background-color: var(--main-color);
  color: white;
  border-radius: 50px;
  font-family: var(--font--Medium);
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: var(--sub-color);
  }
`;
