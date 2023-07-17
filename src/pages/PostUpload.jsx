import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
//component
import Layout from "../layout/Layout";
import PostUploadWriting from './../components/Post/PostUploadWriting';

//이미지
import PostBackground from "../assets/post_bg.svg";
import postUproad from "../assets/post_upload.svg";

//API
import postingAPI from "../api/posting";

//recoil
import loginToken from "../recoil/loginToken";

// 작성중 다른곳으로 나가려고 할때 모달
// 작성 완료시 업로드 할것인지 모달
// 모든 작성 공간은 필수

export default function PostUpload() {
  const navigate = useNavigate();
  // 상품 입력 데이터
  const [postProductData, setPostProductData] = useState();

  // 유저 토큰
  const token = useRecoilValue(loginToken);

  const getPostData = (data) => {
    setPostProductData(data);
  };

  useEffect(() => {
    if (postProductData) {
      handlePost(postProductData, token);
    }
  }, [postProductData]);

  const handlePost = async (ProductData, token) => {
    const response = await postingAPI(ProductData, token);

    if (response.hasOwnProperty("post")) navigate(`/profile/`);
  };

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        <PostUploadWriting
          textareaLabel="게시글 내용"
          src={postUproad}
          subtext="당신의 게시글을 업로드 해보세요!"
          buttonText="게시글 업로드 하기"
          showInput={false}
          textareaHeight="300px"
          getPostPostingData={getPostData}
        />
      </PostProductWrap>
    </Layout>
  );
}

const PostProductWrap = styled.div`
  padding-top: 100px;
  background: url(${PostBackground}) no-repeat #fafafa;
  padding-bottom: 40px;
`;
