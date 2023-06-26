import React, { useEffect, useState } from "react";

import styled from "styled-components";
import postAPI from "../api/post";
import ProfileUI from "./common/ProfileUI";
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";
import { useRecoilState, useRecoilValue } from "recoil";
import NoPostsUI from "../components/NoPostsUI";
import PostListSkeleton from "../style/skeletonUI/SkeletonItem";
import { useParams } from "react-router-dom";
import { checkDeletePost } from "../recoil/checkChange";
import { checkProfile } from "../recoil/checkChange";
import { Link } from "react-router-dom";
import PostLikeBtn from "./common/PostLikeBtn";
import ButtonFollow from "./common/ButtonFollow";
import Button from "./common/Button";

export default function PostList({ account, heartCount }) {
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkDelete = useRecoilValue(checkDeletePost);
  const checkProfileChange = useRecoilValue(checkProfile);
  const [heartValue, setHeartValue] = useState(heartCount);
  const temp = useParams();
  const account_name = account
    ? account
    : temp.account_name
    ? temp.account_name
    : myaccount_name;

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  // const updateHeartCount = (postId, count) => {
  //   setUserPostList((prevPosts) =>
  //     prevPosts.map((post) =>
  //       post.id === postId ? { ...post, heartCount: count } : post
  //     )
  //   );
  // };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await postAPI({
          token,
          accountname: account_name,
        });

        if (response.post) {
          setUserPostList(response.post);
        }

        setLoading(false);
      } catch (error) {
        // 오류 처리
        console.log(error);
        setLoading(false); // 오류 발생 시 로딩 상태 변경
      }
    };

    fetchPostData(); // fetchPostData 함수 호출

    // 의존성 배열에 account_name을 추가하여 account_name이 변경될 때마다 useEffect를 호출하도록 설정
  }, [account_name, checkDelete, checkProfileChange]);

  const handleMouseEnter = (postId) => {
    setUserPostList((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isHovered: true } : post
      )
    );
  };

  const handleMouseLeave = () => {
    setUserPostList((prevPosts) =>
      prevPosts.map((post) => ({ ...post, isHovered: false }))
    );
  };

  const getHeartData = () => {
    setHeartValue((prev) => (prev += 1));
  };
  const cancleHeartData = () => {
    setHeartValue((prev) => (prev -= 1));
  };

  return (
    <>
      {userPostList === null || userPostList.length === 0 ? (
        <NoPostsUI />
      ) : (
        <>
          {userPostList && userPostList.length > 0 && (
            <BottomWrap>
              <ProfileUI
                user_profile={BASE_URL + userPostList[0].author.image}
                user_name={userPostList[0].author.username}
                user_email={userPostList[0].author.accountname}
                mainprofile={false}
                card={true}
                account_name={account_name}
                style={{ margin: "20px" }}
              />
              <ButtonFollow padding={false}/>
            </BottomWrap>
          )}
          <PostListWrap hasPosts={userPostList.length > 0}>
            <Post>
              {Array.from(userPostList)
                .reverse()
                .map((post) => (
                  <li>
                    <BottomImgDiv
                      onMouseEnter={() => handleMouseEnter(post.id)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() =>
                        (window.location.href = `/profile/${post.author.accountname}`)
                      }
                    >
                      <a href={`/profile/${post.author.accountname}`}>
                        <BottomImg
                          src={BASE_URL + (post.image.split(",")[0] || "")}
                          alt=""
                          key={post.id}
                        />
                      </a>
                      {/* 좋아요 개수와 게시글 내용을 보여주는 요소 */}
                      {post.isHovered && (
                        <>
                          {/* <LikeDiv>
                            <PostLikeBtn
                              postId={userPostList}
                              getHeartData={getHeartData}
                              cancleHeartData={cancleHeartData}
                              PostLikeBtn
                              style={{
                                position: "absolute",
                                top: "40%",
                                left: "50%",
                                // transform: "translate(-50%, -50%)",
                                zIndex: 999,
                                }}
                            />
                          </LikeDiv> */}
                          <HoverContent>
                            <LikesCount>{post.heartCount}</LikesCount>
                            <PostContent>{post.content}</PostContent>
                          </HoverContent>
                        </>
                      )}
                    </BottomImgDiv>
                  </li>
                ))}
            </Post>
          </PostListWrap>
        </>
      )}
    </>
  );
}

const PostListWrap = styled.section`
  width: 100%;
  ${({ hasPosts }) =>
    hasPosts
      ? `
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      gap: 60px 20px;
      margin-bottom: 70px;
    `
      : ""}
`;

const BottomWrap = styled.div`
  display: flex;
  align-items: center;
`
const PopularProfile = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  & > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 10px;
  }
`;
const LikeDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
const Post = styled.ul`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }
`;
const BottomImgDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const BottomImg = styled.img`
  transition: all 0.3s;
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.02);
    background-color: black;
  }

  & :hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
`;
const HoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;
`;

const LikesCount = styled.span`
  font-size: 16px;
  margin-bottom: 14px;
`;

const PostContent = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  width: 90%;
`;
//postId={post.id}
// username={post.author.username}
// profileImage={post.author.image}
// email={post.author.accountname}
// content={post.content}
// image={BASE_URL + post.image.split(",")[0]}
// createdAt={post.createdAt}
// hearted={post.hearted}
// heartCount={post.heartCount}

// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// import ProfileUI from "./common/ProfileUI";
// import ButtonLineIcon from "./common/ButtonLineIcon";

// export default function PopularAuthorView({ data }) {
//   return (
//     <Section>
//       <ProfileUI
//         user_profile={data.profile}
//         user_name={data.name}
//         user_email={data.email}
//         mainprofile="true"
//       >
//         <ButtonLineIcon text="작가 팔로우" />
//       </ProfileUI>

//       <UL>
//         {data.img.map((item) => {
//           return (
//             <li key={item.id}>
//               <LinkStyle to={`/products/${item.id}`}>
//                 <img src={item.dummyImg} alt="" />
//               </LinkStyle>
//             </li>
//           );
//         })}
//       </UL>
//     </Section>
//   );
// }

// const Section = styled.section`
//   margin: 50px 0 60px;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const UL = styled.ul`
//   display: grid;
//   grid-template-columns: 2fr repeat(4, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   gap: 20px;

//   li:first-child {
//     grid-row: 1 / span 2;
//     grid-column: 1 / 2;
//   }
// `;

// const LinkStyle = styled(Link)`
//   width: 100%;
//   height: 100%;

//   img {
//     width: 100%;
//     height: 100%;
//     transition: all 0.3s;
//   }

//   &:hover > img {
//     transform: scale(1.02);
//   }
// `
