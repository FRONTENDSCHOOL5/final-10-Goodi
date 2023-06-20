import React, { useEffect, useState } from 'react'
import Post from './Post';
import styled from 'styled-components';
import postAPI from "../../api/post";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useRecoilState } from "recoil";
import NoPostsUI from '../NoPostsUI';

export default function PostList(props) {
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useRecoilState(loginToken);
  const [accountName, setAccountName] = useRecoilState(accountname);

  console.log(userPostList);

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

  if (loading) {
    return (
      <>
        로딩중...우헤헷🏓
      </>
    )
  }

  return (
    <PostListWrap hasPosts={userPostList.length > 0}>
      {userPostList.length > 0 ? (
        userPostList.map((post) => (
          <Post
            key={post.id}
            username={post.author.username}
            profileImage={post.author.image}
            email={""}
            content={post.content}
            image={post.image}
            createdAt={post.createdAt}
          />
        ))) : (
        <NoPostsUI />
      )}
    </PostListWrap>
  );

}

const PostListWrap = styled.section`
  width: 100%;
  ${({ hasPosts }) =>
    hasPosts ?
      `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 60px 20px;
      margin-bottom: 70px;
    `
      : ""}
`