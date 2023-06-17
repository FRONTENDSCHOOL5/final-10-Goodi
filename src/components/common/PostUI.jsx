import React, { useState } from "react";
import styled from "styled-components";

//component
import { InputBox } from "../../components/common/Input";
import Textarea from "./Textarea";
import Button from "./Button";

// 이미지
import PlusIcon from "../../assets/icon_plus_gray.svg";
import AddIcon from "../../assets/add_button_gray.svg";

export default function PostUI({
  src,
  subtext,
  buttonText,
  showInput,
  textareaHeight,
}) {
  // 상품설명 글자수 제한
  const [description, setDescription] = useState("");

  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setDescription(textSlice.slice(0, 100));
  };

  return (
    <PostUiWrap>
      <h2 className="a11y-hidden">상품 업로드 페이지</h2>
      <img src={src} alt="product Upload" />
      <p>{subtext}</p>

      <UploadWrap onSubmit={() => {}}>
        <ImagUploadWrap>
          <ThumbnailWrap>
            <input id="thumbnail" type="file" style={{ display: "none" }} />
            <Thumbnail htmlFor="thumbnail">
              <ThumbnailLabel>
                <p>대표 이미지</p>
              </ThumbnailLabel>
            </Thumbnail>
          </ThumbnailWrap>

          <ProductImages>
            <input
              id="productImageOne"
              type="file"
              style={{ display: "none" }}
            />
            <ProductImage htmlFor="productImageOne"></ProductImage>
            <ProductImage htmlFor="productImageTwo"></ProductImage>

            <input
              id="productImageTwo"
              type="file"
              style={{ display: "none" }}
            />
          </ProductImages>
        </ImagUploadWrap>

        <Line />

        <ContentUploadWrap>
          {showInput && (
            <>
              <InputDiv>
                <Label>상품명</Label>
                <InputBox
                  width="100%"
                  height="48px"
                  name="product_name"
                  type="text"
                  placeholder="상품명을 입력해주세요"
                />
              </InputDiv>

              {/* 숫자만 입력, 1 원 이상 100만원 이하 , 숫자 세개마다 콤마 */}
              <InputDiv>
                <Label>상품가격</Label>
                <InputBox
                  width="100%"
                  height="48px"
                  name="product_price"
                  type="number"
                  placeholder="상품가격을 입력해주세요"
                />
              </InputDiv>
            </>
          )}

          <InputDiv>
            <Label>상품설명</Label>
            <Textarea
              width="100%"
              height={textareaHeight}
              name="product_description"
              placeholder="상품에 대한 설명을 입력해주세요"
              onChange={handleTextCount}
              textCount={description}
              value={description}
            />
          </InputDiv>

          <Button type="submit" height="56px" text={buttonText} br="4px" />
        </ContentUploadWrap>
      </UploadWrap>
    </PostUiWrap>
  );
}

const PostUiWrap = styled.article`
  width: 80%;
  padding: 40px 60px 60px 60px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid var(--gray200-color);
  background-color: #ffffff;

  & > img {
    width: 400px;
  }
  & > p {
    color: var(--gray400-color);
    font-size: 16px;
    margin-top: 4px;
  }
`;

const UploadWrap = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const ImagUploadWrap = styled.div`
  flex-grow: 3;
  display: flex;
  gap: 5%;
`;

const ContentUploadWrap = styled.div`
  flex-grow: 1;
  button {
    margin-top: 48px;
  }
`;

const Line = styled.span`
  width: 1px;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 40px;
`;

const ThumbnailWrap = styled.div`
  width: 70%;
`;

const ProductImages = styled.div`
  width: 25%;
`;

const Thumbnail = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--gray200-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background-color: var(--gray100-color);
    transition: all 0.3s;
  }

  &::before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    margin: auto;
    background: url(${PlusIcon}) no-repeat;
  }
`;

const ThumbnailLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 12px;
  background-color: var(--black-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 30px;
    background-color: var(--main-color);
  }

  p {
    color: white;
    font-size: 14px;
    margin: 0;
  }
`;

const ProductImage = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  aspect-ratio: 1 /1;
  background-color: var(--gray100-color);
  display: flex;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background-color: var(--gray200-color);
    transition: all 0.3s;
  }

  &::before {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    margin: auto;
    background: url(${AddIcon}) no-repeat center/cover;
  }

  & + & {
    margin-top: 20px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }
`;

const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 8px;
`;
