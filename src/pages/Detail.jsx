import React from "react";
import styled from "styled-components";
import { LInk } from "react-router-dom";
import Layout from "../layout/Layout";
import Sample1 from "../mock/sample_1.jpg";
import Sample2 from "../mock/sample_2.jpg";
import Sample3 from "../mock/sample_3.jpg";

export default function Detail() {
  return (
    <Layout>
      <DetailWrap>
        <ProductDetailImg>
          <img className="top_detail_img" src={Sample1} alt="상세 이미지" />

          <div className="bottom_img_wrap">
            <img className="detail_img" src={Sample1} alt="상세 이미지" />
            <img className="detail_img" src={Sample2} alt="상세 이미지" />
            <img className="detail_img" src={Sample3} alt="상세 이미지" />
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
