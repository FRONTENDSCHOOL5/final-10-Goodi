import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

import accountname from "../../recoil/accountname";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import productGetAPI from "../../api/productGet";
import { useParams } from "react-router-dom";
import NoPostsUI from "../NoPostsUI";
import { checkDeletePost } from "../../recoil/checkChange";

export default function CardProduct({ profile }) {
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkDelete = useRecoilValue(checkDeletePost);

  const temp = useParams();

  const account_name = temp.account_name ? temp.account_name : myaccount_name;

  const [productGetData, setproductGetData] = useState(null);

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  useEffect(() => {
    const productGet = async () => {
      try {
        const response = await productGetAPI(account_name, token);
        setproductGetData(response);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };
    productGet();
  }, [account_name, checkDelete]);

  return (
    <>
      {productGetData === null || productGetData.data === 0 ? (
        <NoPostsUI />
      ) : (
        <CardList profile={profile}>
          {productGetData.product.map((productInfo) => {
            return (
              <Card
                key={productInfo.id}
                id={productInfo.id}
                profile={
                  productInfo.author.image.includes("null")
                    ? BASE_URL + "1687455865316.jpg"
                    : productInfo.author.image.includes("http")
                      ? productInfo.author.image
                      : BASE_URL + productInfo.author.image
                }
                name={productInfo.author.username}
                email={productInfo.author.accountname}
                img={BASE_URL + productInfo.itemImage.split(",")[0]}
                title={productInfo.itemName}
                description={productInfo.link}
                price={productInfo.price}
              />
            );
          })}
        </CardList>
      )}
    </>
  );
}

const CardList = styled.div`
  margin: ${({ profile }) => (profile ? "30px 0 70px" : "80px 0")};
  display: grid;
  grid-template-columns: ${({ profile }) =>
    profile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-template-rows: auto;
  gap: ${({ profile }) => (profile ? "60px 30px" : "60px")};
`;
