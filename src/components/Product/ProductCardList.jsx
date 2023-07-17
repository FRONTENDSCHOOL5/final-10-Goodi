import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

import accountname from "../../recoil/accountname";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import productGetAPI from "../../api/productGet";
import { useParams } from "react-router-dom";
import NoPostsUI from "../NoPostsUI";
import { checkProfile } from "../../recoil/checkChange";
import { checkDeletePost } from "../../recoil/checkChange";
import checkImageUrl from "../common/checkImageUrl";

export default function ProductCardList({ profile }) {
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkProfileChange = useRecoilValue(checkProfile);
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
  }, [account_name, checkProfileChange, checkDelete]);

  return (
    <>
      {productGetData === null || productGetData.data === 0 ? (
        <NoPostsUI />
      ) : (
        <CardList profile={profile}>
          {productGetData.product.map((productInfo) => {
            return (
              <ProductCard
                key={productInfo.id}
                id={productInfo.id}
                profile={checkImageUrl(productInfo.author.image, "profile")}
                name={productInfo.author.username}
                email={productInfo.author.accountname}
                img={checkImageUrl(
                  BASE_URL + productInfo.itemImage.split(",")[0],
                  "post"
                )}
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
