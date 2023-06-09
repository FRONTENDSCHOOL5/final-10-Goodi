import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

//component
import Layout from "../layout/Layout";
import DetailImage from "../components/common/DetailImage";
import ProfileUI from "../components/common/ProfileUI";
import Count from "../components/common/Count";
import ButtonLineIcon from "../components/common/ButtonLineIcon";
import { ButtonDef } from "../components/common/Button";
import LikeBtn from "../components/common/LikeBtn";

//data
import ProductData from "../mock/productData";

//image
import MoneyIcon from "../assets/icon_money_black.svg";
import DeliveryIcon from "../assets/icon_delivery_dark.svg";

export default function Detail() {
  const data = ProductData[0];
  const [price, setPrice] = useState(data.price);

  const getPrice = (price) => {
    setPrice(price);
  };

  return (
    <Layout>
      <DetailWrap>
        <DetailImage />

        <ProductDetail>
          <div className="product_detail_top">
            <ProfileUI
              key={data.id}
              user_profile={data.user_profile}
              user_name={data.user_name}
              user_email={data.user_email}
            />
            <ButtonLineIcon button_content="작가 팔로우" />
          </div>

          <h2 className="product_title">{data.product_title}</h2>
          <p className="product_description">{data.product_description}</p>
          <DeliveryDescription>
            <div className="delivery_date">
              <img src={DeliveryIcon} alt="박스 아이콘" />
              <h4 className="delivery_price_subtitle">배송 기간</h4>
              <p className="delivery_price_text">
                지금 주문하면 <strong>3일 이내</strong> 출고 예정 (주말, 공휴일
                제외)
              </p>
            </div>
            <div className="delivery_price">
              <img src={MoneyIcon} alt="동전 아이콘" />
              <h4 className="delivery_price_subtitle">배송비</h4>
              <p className="delivery_price_text">
                구디 제품 80,000원 이상 구매시 무료배송
                <br />
                제주도를 포함한 도서/산간지역은 추가 배송비 3,000원
              </p>
            </div>
          </DeliveryDescription>
          <h4 className="product_count_subtitle">수량</h4>
          <Count price={price} getPrice={getPrice} productPrice={data.price} />
          <hr />
          <ProductPrice>
            <h4 className="product_price_subtitle">총 결제 금액</h4>
            <p className="product_price">
              <strong>{price}</strong>원
            </p>
          </ProductPrice>

          <ButtonWrap>
            <LikeBtn />

            <ButtonDef
              className="cart_button"
              type="button"
              bg="white"
              width="100%"
              height="56px"
              br="4px"
            >
              장바구니 담기
            </ButtonDef>

            <ButtonDef
              className="purchase_button"
              type="button"
              bg="black"
              width="100%"
              height="56px"
              br="4px"
            >
              구매하고 싶어요
            </ButtonDef>
          </ButtonWrap>
        </ProductDetail>
      </DetailWrap>
    </Layout>
  );
}

const DetailWrap = styled.div`
  margin: 40px 60px 120px 80px;
  display: flex;
  gap: 5%;
`;

const ProductDetail = styled.section`
  width: 45%;

  .product_detail_top {
    display: flex;
    gap: 16px;
  }

  .product_title {
    font-family: var(--font--Bold);
    font-size: 34px;
  }

  .product_description {
    color: var(--gray500-color);
    line-height: 1.6;
    margin-top: 16px;
  }

  .product_count_subtitle {
    font-family: var(--font--Bold);
    margin: 100px 0 24px 0;
  }

  hr {
    margin: 24px 0 32px 0;
    border: solid 1px var(--gray100-color);
  }
`;

const DeliveryDescription = styled.section`
  padding: 31px 24px 24px 24px;
  box-sizing: border-box;
  background-color: var(--gray50-color);
  border-radius: 4px;
  margin-top: 32px;

  & div {
    display: flex;
  }

  & div img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    margin-top: -7px;
  }

  & div h4 {
    width: 15%;
    font-size: 16px;
    font-family: var(--font--Bold);
    flex-shrink: 0;
    margin-right: 8px;
  }

  & div p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--gray500-color);
  }

  & div p strong {
    font-family: var(--font--Bold);
    color: var(--sub-color);
  }

  .delivery_date {
    margin-bottom: 24px;
  }
`;

const ProductPrice = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product_price_subtitle {
    font-family: var(--font--Bold);
    color: var(--gray400-color);
  }

  .product_price {
    font-family: var(--font--Medium);
    font-size: 18px;
    color: var(--gray400-color);
    display: flex;
    align-items: center;
  }

  .product_price strong {
    font-family: var(--font--Bold);
    color: var(--black-color);
    font-size: 36px;
    margin-right: 6px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 2%;

  & button {
    cursor: pointer;
    font-family: var(--font--Medium);
  }

  .cart_button {
    color: var(--black-color);
    border: 1px solid var(--gray300-color);
  }

  .purchase_button,
  .cart_button {
    width: 44%;
  }
`;
