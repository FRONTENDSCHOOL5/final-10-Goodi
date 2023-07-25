import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

//component
import Layout from "../layout/Layout";
import ProductUploadWriting from "../components/Product/ProductUploadWriting";

//이미지
import PostBackground from "../assets/post_bg.jpg";
import Product_upload from "../assets/Prodcut_upload.svg";

//API
import UploadProductAPI from "../api/UploadProductAPI";

//recoil
import loginToken from "../recoil/loginToken";
import WritingUI from "../components/PostProductTest/WritingUI";

// 작성중 다른곳으로 나가려고 할때 모달
// 작성 완료시 업로드 할것인지 모달
// 모든 작성 공간은 필수

export default function ProductUpload() {
  const navigate = useNavigate();

  const [imageWrap, setImageWrap] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  // 상품 입력 데이터
  const [productData, setProductData] = useState();

  // 유저 토큰
  const token = useRecoilValue(loginToken);

  const [data, setData] = useState({
    product: {
      itemName: "",
      price: "", //1원 이상
      link: "",
      itemImage: "",
    },
  });

  const getProductData = (data) => {
    setProductData(data);
  };

  useEffect(() => {
    if (productData) {
      handlePost(productData, token);
    }
  }, [productData]);

  const handlePost = async (ProductData, token) => {
    const response = await UploadProductAPI(ProductData, token);

    if (response.hasOwnProperty("product"))
      navigate(`/products/${response.product.id}`);
  };

  const handleError = (e) => {
    setData((prevState) => ({
      ...prevState,
      product: {
        ...prevState.product,
        itemImage: imageWrap.join(),
      },
    }));
    const errors = [];
    if (data.product.itemImage === "") {
      errors.push("상품이미지를 한개 이상 업로드 해주세요");
    } else if (
      data.product.itemName === "" ||
      !data.product.itemName
    ) {
      errors.push("상품명을 입력해주세요");
    } else if (data.product.price === "" || !data.product.price) {
      errors.push("상품가격을 입력해주세요");
    } else if (data.product.link === "" || !data.product.link) {
      errors.push("상품소개글을 입력해주세요");
    } else {
      errors.push("");
    }
    setUserErrorMessage(errors);
  };

  console.log(data.product);

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        {/* <ProductUploadWriting
          src={Product_upload}
          subtext="당신의 굿즈상품을 업로드하여 판매해보세요!"
          buttonText="상품 업로드 하기"
          showInput={true}
          textareaHeight="100px"
          getPostProductData={getPostProductData}
        /> */}
        <WritingUI
          src={Product_upload}
          subtext="당신의 상품을 업로드 해보세요!"
          getData={getProductData}
          data={data}
          setData={setData}
          handleError={handleError}
          setImageWrap={setImageWrap}
          imageWrap={imageWrap}
          userErrorMessage={userErrorMessage}
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
