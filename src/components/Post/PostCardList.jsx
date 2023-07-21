import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { checkDeletePost } from "../../recoil/checkChange";
import { checkProfile } from "../../recoil/checkChange";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import postAPI from "../../api/post";

import PostCard from "./PostCard";
import NoPostsUI from "../NoPostsUI";

import checkImageUrl from "../common/checkImageUrl";

export default function PostCardList({ accountname }) {
  const [userPostList, setUserPostList] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useRecoilValue(loginToken);
  // const myaccount_name = useRecoilValue(accountname);
  const checkDelete = useRecoilValue(checkDeletePost);
  const checkProfileChange = useRecoilValue(checkProfile);

  // const temp = useParams();
  // const account_name = account
  //   ? account
  //   : temp.account_name
  //     ? temp.account_name
  //     : myaccount_name;

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
          accountname: accountname,
        });

        if (response.post) {
          setUserPostList(response.post);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
