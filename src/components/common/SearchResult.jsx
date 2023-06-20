import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트
import ProfileUI from "./ProfileUI";
import FollowButton from "./FollowButton";

// 이미지
import followSymbol from "../../assets/follow_symbol.svg";

export default function SearchResult() {
  const [usersData, setUsersData] = useState([
    // {
    //   _id: "6476d74cb2cb2056632cff4a",
    //   username: "노태희",
    //   accountname: "weniv_rho",
    //   intro: "안녕하세요 저는 태희입니다.",
    //   image:
    //     "https://i.namu.wiki/i/07fsVOrgPi1C1giwZqDWuRThlwwYjMaAGDothJq6CcsvHmNAa5weXPPjiX7pBEONkcjIJCEjZY0HpgUPk7WqKg.webp",
    //   isfollow: false,
    //   following: ["6476d748b2cb2056632cff23", "6476d774b2cb2056632d000a"],
    //   follower: ["6476dea8b2cb2056632d05b6"],
    //   followerCount: 1,
    //   followingCount: 2,
    // },
    // {
    //   _id: "6476f1d7b2cb2056632d07e1",
    //   username: "노태희",
    //   accountname: "taehee",
    //   intro: "소개",
    //   image: "http://146.56.183.55:5050/Ellipse.png",
    //   isfollow: false,
    //   following: [],
    //   follower: [],
    //   followerCount: 0,
    //   followingCount: 0,
    // },
    // {
    //   _id: "648d6cbdb2cb205663380bb5",
    //   username: "노태희",
    //   accountname: "taeheerho",
    //   intro: "바보 태희입니다",
    //   image: "https://api.mandarin.weniv.co.kr/1686989953204.jpeg",
    //   isfollow: false,
    //   following: [],
    //   follower: [],
    //   followerCount: 0,
    //   followingCount: 0,
    // },
    // {
    //   _id: "648f0e5db2cb20566339d655",
    //   username: "노태희테스트",
    //   accountname: "shxogml",
    //   intro: "gdgd",
    //   image:
    //     "https://image1.marpple.co/files/u_29089/2023/2/original/46b93b262fce55fbf14c65c869d8970a117d0a071.jpeg?w=126",
    //   isfollow: false,
    //   following: [],
    //   follower: [],
    //   followerCount: 0,
    //   followingCount: 0,
    // },
    // {
    //   _id: "64770130b2cb2056632d0c60",
    //   username: "마산콩태희",
    //   accountname: "dannna",
    //   intro: "ㅎㅇㅎㅇ",
    //   image: "http://146.56.183.55:5050/Ellipse.png",
    //   isfollow: false,
    //   following: [],
    //   follower: [],
    //   followerCount: 0,
    //   followingCount: 0,
    // },
  ]);
  const [resultCount, setResultCount] = useState(usersData.length);

  return (
    <ResultWrap>
      <ResultTitle>
        <h3>검색 결과</h3>
        <p>{resultCount} 명</p>
      </ResultTitle>
      <UsersWrap>
        {usersData.length > 0 ? (
          usersData.map((el) => (
            <User>
              <ProfileUI
                key={el._id}
                user_profile={el.image}
                user_name={el.username}
                user_email={el.accountname}
              />
              <FollowButton />
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

// usersData.map((el, i) => {
//   return (
//     <User>
//       <ProfileUI
//         key={el._id}
//         user_profile={el.image}
//         user_name={el.username}
//         user_email={el.accountname}
//       />
//       <FollowButton />
//     </User>
//   );
// })

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
