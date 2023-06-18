import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

//component
import Layout from "../layout/Layout";
import PostUI from "../components/common/PostUI";

//이미지
import PostBackground from "../assets/post_bg.svg";
import ProductUpload from "../assets/Prodcut_upload.svg";

//API
import UploadProductAPI from "../api/UploadProductAPI";

//recoil
import loginToken from "../recoil/loginToken";

// 작성중 다른곳으로 나가려고 할때 모달
// 작성 완료시 업로드 할것인지 모달
// 모든 작성 공간은 필수

export default function PostProduct() {
  // 상품 입력 데이터
  const [postProductData, setPostProductData] = useState();

  // 유저 토큰
  const token = useRecoilValue(loginToken);

  const getPostProductData = (data) => {
    setPostProductData(data);
  };

  useEffect(() => {
    if (postProductData) {
      handlePost();
    }
  }, [postProductData]);

  const handlePost = () => {
    UploadProductAPI(postProductData, token);
  };

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        <PostUI
          src={ProductUpload}
          subtext="당신의 굿즈상품을 업로드하여 판매해보세요!"
          buttonText="상품 업로드 하기"
          showInput={true}
          textareaHeight="100px"
          getPostProductData={getPostProductData}
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
