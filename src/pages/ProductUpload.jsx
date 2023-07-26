import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

//component
import Layout from "../layout/Layout";
import TotalWritingUI from "../components/PostProductWriting/TotalWritingUI";

//이미지
import PostBackground from "../assets/post_bg.jpg";
import productUpload from "../assets/Prodcut_upload.svg";

//API
import UploadProductAPI from "../api/UploadProductAPI";

//recoil
import loginToken from "../recoil/loginToken";

export default function ProductUpload() {
  const navigate = useNavigate();

  const token = useRecoilValue(loginToken);

  const [imageWrap, setImageWrap] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  // 상품 입력 데이터
  const [productData, setProductData] = useState();

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

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        <TotalWritingUI
          src={productUpload}
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
