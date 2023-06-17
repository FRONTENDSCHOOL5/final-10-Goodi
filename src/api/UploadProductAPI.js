import React from "react";
import loginToken from "../recoil/loginToken";
import { useRecoilValue } from "recoil";

const UploadProductAPI = () => {
  const token = useRecoilValue(loginToken);
  const POSTPRODUCT_API = "https://api.mandarin.weniv.co.kr/product"

  const PostProductData = async (postProductData) => {
    try {
      const response = await fetch(POSTPRODUCT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...postProductData })
      })
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log("Product API 에러가 발생했습니다", error);
    }
  };

  return PostProductData;

};

export default UploadProductAPI;