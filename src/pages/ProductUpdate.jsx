import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageCompression from "browser-image-compression";

//component
import Layout from "../layout/Layout";
import { InputBox } from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Button from "../components/common/Button/Button";

// 이미지
import PostBackground from "../assets/post_bg.jpg";
import productUpload from "../assets/Prodcut_upload.svg";

// API
import { useNavigate, useParams } from "react-router-dom";
import productAPI from "../api/product";
import { useRecoilValue } from "recoil";
import loginToken from "../recoil/loginToken";
import productPut from "../api/productPut";
import UploadImage from "../api/UploadImage";
import { handleDataForm } from "../components/common/imageOptimization";
import TotalWritingUI from "../components/PostProductWriting/TotalWritingUI";

export default function ProductUpdate() {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const token = useRecoilValue(loginToken);

  const [loading, setLoading] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  const [imageWrap, setImageWrap] = useState([]);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    itemName: "",
    price: 0,
    link: "",
    itemImage: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productAPI(token, product_id);
        setProduct(response.product);
        setFormData({
          id: response.product.id,
          itemName: response.product.itemName,
          price: response.product.price,
          link: response.product.link,
          itemImage: response.product.itemImage,
        });
        setImageWrap(response.product.itemImage.split(","));
      } catch (error) {
        console.error("상품 정보 호출 실패", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    setFormData({ ...formData, itemImage: imageWrap.join(",") });
  }, [imageWrap]);

  const handleChangeImage = async (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 490,
      useWebWorker: true,
    };

    try {
      setLoading(true);
      const resizingBlob = await imageCompression(file, options);
      const reader = new FileReader();
      reader.readAsDataURL(resizingBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        handleDataForm(base64data, name, setImageWrap, setLoading);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (formData.itemName === "" || !formData.itemName) {
      errors.push("상품명을 입력해주세요");
    }
    if (formData.price === "" || !formData.price) {
      errors.push("상품가격을 입력해주세요");
    }
    if (formData.link === "" || !formData.link) {
      errors.push("상품소개글을 입력해주세요");
    }
    setUserErrorMessage(errors);

    if (errors.length > 0) {
      setUserErrorMessage(errors);
      return;
    }

    const updatedProductData = {
      product: {
        id: formData.id,
        itemName: formData.itemName,
        price: formData.price,
        link: formData.link,
        itemImage: formData.itemImage,
      },
    };

    await productPut(product_id, token, updatedProductData);

    navigate(`/products/${product_id}`);
  };

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        <TotalWritingUI
          src={productUpload}
          subtext="당신의 상품을 업로드 해보세요!"
          // getData={getProductData}
          data={formData}
          setData={setFormData}
          handleError={handleSubmit}
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
