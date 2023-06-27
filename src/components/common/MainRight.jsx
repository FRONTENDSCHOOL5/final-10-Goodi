import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

import accountname from "../../recoil/accountname";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import productGetAPI from "../../api/productGet";
import { useParams } from "react-router-dom";
import NoPostsUI from "../NoPostsUI";
import { checkProfile } from "../../recoil/checkChange";
import { checkDeletePost } from "../../recoil/checkChange";
import checkImageUrl from "./checkImageUrl";
import { Link } from "react-router-dom";

export default function CardProduct({ profile }) {
  const token = useRecoilValue(loginToken);
  const myaccount_name = useRecoilValue(accountname);
  const checkProfileChange = useRecoilValue(checkProfile);
  const checkDelete = useRecoilValue(checkDeletePost);

  // const temp = useParams();

  // const account_name = temp.account_name ? temp.account_name : myaccount_name;

  // const [productGetData, setproductGetData] = useState(null);

  // const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  // useEffect(() => {
  //   const productGet = async () => {
  //     try {
  //       const response = await productGetAPI(account_name, token);
  //       setproductGetData(response);
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Account API 에러가 발생했습니다", error);
  //     }
  //   };
  //   productGet();
  // }, [account_name, checkProfileChange, checkDelete]);

  return (
    <>
      {/* {productGetData === null || productGetData.data === 0 ? (
        <NoPostsUI />
      ) : ( */}
      <CardList profile={profile}>
        <Card
          // key={productInfo.id}
          id={"64994f98b2cb205663cab8ea"}
          profile={checkImageUrl("1687768831791.jpeg", "profile")}
          name={"꾸깃꾸깃"}
          email={"mock2"}
          img={checkImageUrl(
            "1687768852225.jpeg,1687768910799.jpeg,1687768889990.png".split(
              ","
            )[0],
            "post"
          )}
          title={"나만의 커스텀 케이스"}
          description={
            "나만의 커스텀 케이스를 만들어보세요. 선명한 색감과 벗겨지지 않는 최고의 퀄리티 보장합니다. 기종은 문의주시면 최대한 빨리 채팅 드리겠습니다."
          }
          price={19900}
        />
        <Card
          // key={productInfo.id}
          id={"64994e6fb2cb205663c9de9c"}
          profile={checkImageUrl("1687744257255.jpg", "profile")}
          name={"Goodi_official"}
          email={"goodi"}
          img={checkImageUrl(
            "1687768608514.jpeg,1687768614766.jpeg,1687768618700.jpeg".split(
              ","
            )[0],
            "post"
          )}
          title={"댕댕이 스카프"}
          description={
            "유기농 소재로 만들어 더욱 댕친화적인 스카프입니다. 뻑뻑하지 않고 부드러운 소재라 댕댕이들이 갑갑해하지 않아요!"
          }
          price={21000}
        />

        <Card
          // key={productInfo.id}
          id={"64995068b2cb205663cb5ca7"}
          profile={checkImageUrl("1687769232469.jpeg", "profile")}
          name={"커나"}
          // email={productInfo.author.accountname}
          img={checkImageUrl(
            "1687769126389.jpeg,1687769147535.jpeg,1687769166185.jpeg".split(
              ","
            )[0],
            "post"
          )}
          title={"플라워 파우치"}
          description={"개성넘치는 파우치로 보관마저도 힙하게!"}
          price={16000}
        />
        <Card
          // key={productInfo.id}
          id={"64994ca4b2cb205663c8a1d1"}
          profile={checkImageUrl("1687767998170.jpeg", "profile")}
          name={"헤일리"}
          email={"mock1"}
          img={checkImageUrl(
            "1687768070738.jpeg,1687768143261.jpeg,1687768149532.jpeg".split(
              ","
            )[0],
            "post"
          )}
          title={"무테두리 유광 액자"}
          description={
            "집안 분위기를 바꿔주는 필수템입니다. 무테로 어떤 그림에도 깔끔하게 어울리며, 유광으로 고급스러움까지 챙겨보세요"
          }
          price={58000}
        />

        <Card
          // key={productInfo.id}
          id={"6499c448b2cb205663e3245a"}
          profile={checkImageUrl("http://146.56.183.55:5050/Ellipse.png", "profile")}
          name={"꽉오"}
          email={"skrud319"}
          img={checkImageUrl(
            "1687798773835.jpeg,1687798794485.jpeg,1687798813621.jpeg".split(",")[0],
            "post"
          )}
          title={
            "모던 인테리어 모음집"}
          description={
            "당신의 취향만 싹 모아놨다! 모던이 취향인 당신, 바로 여기입니다."}
          price={32000}
        />

        <Card
          // key={productInfo.id}
          id={"6499c636b2cb205663e32eba"}
          profile={checkImageUrl("1687799232646.jpeg", "profile")}
          name={"신데렐라"}
          email={
            "mock5"}
          img={checkImageUrl(
            "1687799269240.jpeg,1687799300244.jpeg,1687799305238.jpeg".split(",")[0],
            "post"
          )}
          title={
            "공기 정화 식물"}
          description={
            "공기정화는 물론 집안 인테리어를 확 살려주는 식물입니다"}
          price={
            76000}
        />
      </CardList>
      {/* )} */}
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
