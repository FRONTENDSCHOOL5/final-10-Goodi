import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트
import ProfileUI from "./ProfileUI";
import ButtonFollow from "./ButtonFollow";

// 이미지
import followSymbol from "../../assets/follow_symbol.svg";
import DefProfileImg from "../../assets/profile_img_def.svg";

export default function SearchResult({ searchResult, isFollowing }) {
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  return (
    <ResultWrap>
      <ResultTitle>
        <h3>검색 결과</h3>
        <p>{!searchResult ? 0 : searchResult?.length} 명</p>
      </ResultTitle>
      <UsersWrap>
        {searchResult?.length > 0 ? (
          searchResult.map((el) => (
            <User>
              <ProfileUI
                key={el._id}
                user_profile={
                  el.image.includes("null")
                    ? BASE_URL + "1687455865316.jpg"
                    : el.image && el.image.includes("http")
                    ? el.image
                    : BASE_URL + el.image
                }
                user_name={el.username}
                user_email={el.accountname}
                account_name={el.accountname}
              />
              <ButtonFollow
                isFollow={el.isfollow}
                accountName={el.accountname}
              />
            </User>
          ))
        ) : (
          <UserNull>
            <img src={followSymbol} alt="더미 이미지" />
            <p>존재하는 유저가 없습니다.</p>
          </UserNull>
        )}
      </UsersWrap>
    </ResultWrap>
  );
}

const ResultWrap = styled.section`
  margin-top: 72px;
`;
const ResultTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-family: var(--font--Bold);
    font-size: 18px;
    margin-right: 12px;
  }

  p {
    color: var(--dark-sub-color);
  }
`;

const UsersWrap = styled.div`
  padding-bottom: 60px;
  box-sizing: border-box;
  margin-top: 24px;
  height: 43vh;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  & > a {
    width: 60%;
    margin-bottom: 0;
  }
`;

const UserNull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 60%;
  padding: 12px 0 18px 0;
  box-sizing: border-box;
  margin: 40px auto 0 auto;

  img {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
  p {
    color: var(--gray300-color);
    font-size: 18px;
    text-align: center;
  }
`;
