import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";
import postAPI from "../../api/post";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useRecoilState, useRecoilValue } from "recoil";
import NoPostsUI from "../NoPostsUI";
import PostListSkeleton from "../../style/skeletonUI/skeletonPage/PostListSkeleton";
import { useParams } from "react-router-dom";
import { checkDeletePost } from "../../recoil/checkChange";

export default function PostList() {
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkDelete = useRecoilValue(checkDeletePost);

  const temp = useParams();

  const account_name = temp.account_name ? temp.account_name : myaccount_name;

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  const updateHeartCount = (postId, count) => {
    setUserPostList((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, heartCount: count } : post
      )
    );
  };

  useEffect(() => {
    const fetchPostData = async () => {
      const { post } = await postAPI({
        token,
        accountname: account_name,
      });
      setUserPostList(post);
      setLoading(false);
    };

    fetchPostData();
  }, [account_name, checkDelete]);
  console.log(userPostList);

  if (loading) {
    return <PostListSkeleton />;
  }

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
              image={BASE_URL + post.image.split(",")[0]}
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
