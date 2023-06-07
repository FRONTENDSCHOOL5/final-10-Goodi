import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductData from "../mock/productData";

export default function Detail() {
  const data = ProductData[0];

  return (
    <Layout>
      <DetailWrap>
        <ProductDetailImg>
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

        <ProductDetail>...</ProductDetail>
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
`;

const ProductDetail = styled.section`
  background-color: blue;
  width: 50%;
`;
