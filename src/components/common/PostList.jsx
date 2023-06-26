import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";
import postAPI from "../../api/post";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useRecoilValue } from "recoil";
import NoPostsUI from "../NoPostsUI";
import PostListSkeleton from "../../style/skeletonUI/skeletonPage/PostListSkeleton";
import { useParams } from "react-router-dom";
import { checkDeletePost } from "../../recoil/checkChange";
import { checkProfile } from "../../recoil/checkChange";
import checkImageUrl from "./checkImageUrl";

export default function PostList({ account }) {
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkDelete = useRecoilValue(checkDeletePost);
  const checkProfileChange = useRecoilValue(checkProfile);

  const temp = useParams();
  const account_name = account ? account : temp.account_name ? temp.account_name : myaccount_name;

  const updateHeartCount = (postId, count) => {
    setUserPostList((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, heartCount: count } : post
      )
    );
  };

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

  return (
    <>
      {userPostList === null || userPostList.length === 0 ? (
        <NoPostsUI />
      ) : (
        <PostListWrap hasPosts={userPostList.length > 0}>
          {userPostList.map((post) => (
            <Post
              postId={post.id}
              username={post.author.username}
              profileImage={post.author.image}
              email={post.author.accountname}
              content={post.content}
              image={checkImageUrl(post.image.split(",")[0], 'post')}
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
