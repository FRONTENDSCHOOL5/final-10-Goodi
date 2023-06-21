import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";
import postAPI from "../../api/post";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useRecoilState, useRecoilValue } from "recoil";
import NoPostsUI from "../NoPostsUI";

export default function PostList(props) {
  const { onPostListUpdate } = props;
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useRecoilState(loginToken);
  const accountName = useRecoilValue(accountname);
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
        accountname: accountName,
      });
      setUserPostList(post);
      setLoading(false);
    };

    fetchPostData();
  }, []);
  console.log({ userPostList });
  if (loading) {
    return <>로딩중...우헤헷🏓</>;
  }

  return (
    <PostListWrap hasPosts={userPostList.length > 0}>
      {userPostList.length > 0 ? (
        userPostList.map((post) => (
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
        ))
      ) : (
        <NoPostsUI />
      )}
    </PostListWrap>
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
