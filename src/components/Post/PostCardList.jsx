import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 리코일
import { useRecoilValue } from "recoil";
import { checkDeletePost } from "../../recoil/checkChange";
import { checkProfile } from "../../recoil/checkChange";
import loginToken from "../../recoil/loginToken";

// api
import postAPI from "../../api/post";

// 컴포넌트
import PostCard from "./PostCard";
import NoPostsUI from "../NoPostsUI";

// 이미지 검사
import checkImageUrl from "../common/checkImageUrl";

export default function PostCardList({ accountname }) {
  const [userPostList, setUserPostList] = useState(null);
  const token = useRecoilValue(loginToken);
  const checkDelete = useRecoilValue(checkDeletePost);
  const checkProfileChange = useRecoilValue(checkProfile);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await postAPI({
          token,
          accountname: accountname,
        });

        if (response.post) {
          setUserPostList(response.post);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostData();
  }, [accountname, checkDelete, checkProfileChange]);

  return (
    <>
      {userPostList === null || userPostList.length === 0 ? (
        <NoPostsUI />
      ) : (
        <PostListWrap hasPosts={userPostList.length > 0}>
          {userPostList.map((post) => (
            <PostCard
              postId={post.id}
              username={post.author.username}
              profileImage={post.author.image}
              email={post.author.accountname}
              content={post.content}
              image={checkImageUrl(post.image.split(",")[0], "post")}
              createdAt={post.createdAt}
              hearted={post.hearted}
              heartCount={post.heartCount}
            />
          ))}
        </PostListWrap>
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
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 60px 20px;
      margin-bottom: 70px;
    `
      : ""}
`;
