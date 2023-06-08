import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

//image
import commonBanner from "../../assets/common-banner.svg";

//data
import ProductData from "../../mock/productData";

export default function DetailImage() {
  const data = ProductData[0];
  return (
    <ProductDetailImg>
      <img className="common_banner" src={commonBanner} alt="공통 배너"></img>
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
  );
}

const ProductDetailImg = styled.section`
  width: 50%;

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
