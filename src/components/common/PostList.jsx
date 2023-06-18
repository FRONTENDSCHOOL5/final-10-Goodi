import React, { useEffect, useState } from 'react'
import Post from './Post';
import styled from 'styled-components';
import postAPI from "../../api/post";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useRecoilState } from "recoil";

export default function PostList(props) {
  const { onPostListUpdate } = props
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useRecoilState(loginToken);
  const [accountName, setAccountName] = useRecoilState(accountname);

  useEffect(() => {
    const fetchPostData = async () => {
      const { post } = await postAPI({
        token,
        accountname: accountName,
      });
      setUserPostList(post);
      setLoading(false);
      if (onPostListUpdate) {
        onPostListUpdate(post);
      }
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
    <PostListWrap>
      {userPostList.map((post) => (
        <Post
          key={post.id}
          username={post.author.username}
          profileImage={post.author.image}
          email={""}
          content={post.content}
          image={post.image}
          createdAt={post.createdAt}
        />
      ))}
    </PostListWrap>
  );

}

const PostListWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 60px 20px;
  margin-bottom: 70px;
`