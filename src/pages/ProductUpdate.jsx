import React, { useEffect, useState } from "react";

// 리코일
import { useRecoilValue } from "recoil";
import loginToken from "../recoil/loginToken";

//component
import Layout from "../layout/Layout";
import UpdateTotalUI from "../components/PostProductWriting/UpdateTotalUI";

// 이미지
import ProductUpload from "../assets/Prodcut_upload.svg";

// API
import { useNavigate, useParams } from "react-router-dom";
import { productGetUpdateAPI } from "../api/product";
import { productPutAPI } from "../api/product";

export default function ProductUpdate() {
  const token = useRecoilValue(loginToken);
  const { product_id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  const [imageWrap, setImageWrap] = useState([]);
  const [product, setProduct] = useState(null);
  const [data, setData] = useState({
    id: "",
    itemName: "",
    price: 0,
    link: "",
    itemImage: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productGetUpdateAPI(token, product_id);
        setProduct(response.product);
        setData({
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
    setData({ ...data, itemImage: imageWrap.join(",") });
  }, [imageWrap]);

  const joinData = async (e) => {
    e.preventDefault();

    const errors = [];
    if (data.itemName === "" || !data.itemName) {
      errors.push("상품명을 입력해주세요");
    } else if (data.price === "" || !data.price) {
      errors.push("상품가격을 입력해주세요");
    } else if (data.link === "" || !data.link) {
      errors.push("상품소개글을 입력해주세요");
    }
    setUserErrorMessage(errors);

    if (errors.length > 0) {
      setUserErrorMessage(errors);
      return;
    }

    const updatedProductData = {
      product: {
        id: data.id,
        itemName: data.itemName,
        price: data.price,
        link: data.link,
        itemImage: data.itemImage,
      },
    };

    await productPutAPI(product_id, token, updatedProductData);

    navigate(`/products/${product_id}`);
  };

  return (
    <Layout reduceTop="true">
      <UpdateTotalUI
        src={ProductUpload}
        subtext="상품을 수정해주세요"
        data={data}
        imageWrap={imageWrap}
        userErrorMessage={userErrorMessage}
        joinData={joinData}
        description={data.link}
        setLoading={setLoading}
        setImageWrap={setImageWrap}
        setData={setData}
      />
    </Layout>
  );
}
