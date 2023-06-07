import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductData from "../mock/productData";
import commonBanner from "../assets/common-banner.svg";
import ProfileUI from "../components/common/ProfileUI";
import ButtonLineIcon from "../components/common/ButtonLineIcon";

export default function Detail() {
  const data = ProductData[0];
  console.log(data);

  return (
    <Layout>
      <DetailWrap>
        <ProductDetailImg>
          <img
            className="common_banner"
            src={commonBanner}
            alt="공통 배너"
          ></img>
          <img
            className="top_detail_img"
            src={data.propduct_img[1]}
            alt="상세 이미지"
          />

          <div className="bottom_img_wrap">
            {data.propduct_img.map((el, index) => {
              return (
                <img
                  key={index}
                  className="detail_img"
                  src={el}
                  alt="상세 이미지"
                />
              );
            })}
          </div>
        </ProductDetailImg>

        <ProductDetail>
          <div className="product_detail_top">
            <ProfileUI
              key={data.id}
              user_profile={data.user_profile}
              user_name={data.user_name}
              user_email={data.user_email}
            />
            <ButtonLineIcon />
          </div>
        </ProductDetail>
      </DetailWrap>
    </Layout>
  );
}

const DetailWrap = styled.div`
  margin: 40px 60px 0 80px;
  display: flex;
  gap: 5%;
`;

const ProductDetailImg = styled.section`
  /* background-color: red; */
  width: 45%;

  .common_banner {
    width: 100%;
  }

  .top_detail_img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .bottom_img_wrap {
    margin-top: 16px;
    display: flex;
    gap: 3%;
  }

  .detail_img {
    width: 20%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .active {
    border: 1px solid var(--main-color);
  }
`;

const ProductDetail = styled.section`
  width: 50%;

  .product_detail_top {
    display: flex;
    gap: 16px;
  }
`;
