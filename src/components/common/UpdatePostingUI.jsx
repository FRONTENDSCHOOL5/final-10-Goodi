import React, { useState } from "react";
import styled from "styled-components";

//component
import Textarea from "./Textarea";
import Button from "./Button";

// 이미지
import AddIcon from "../../assets/add_button_gray.svg";

// API
import UploadImage from "../../api/UploadImage";

export default function UpdatePostingUI({
  src,
  subtext,
  buttonText,
  getImage,
  setGetImage,
  setGetContent,
  getContent,
  joinData,
}) {
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  const [imgLoading, setImgLoading] = useState(false);
  const [userError, setUserError] = useState([]);

  // 글자수 자르기
  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setGetContent(textSlice.slice(0, 50));
  };

  // 이미지 업로드
  const handleInputChange = async (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    try {
      setImgLoading(true);
      const imgSrc = await UploadImage(file);
      setGetImage((prevArray) => {
        const newArray = [...prevArray];
        newArray[parseInt(name)] = imgSrc;
        setImgLoading(false);
        return newArray;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostingUiLayout>
      <h2 className="a11y-hidden">상품 업로드 페이지</h2>
      <img src={src} alt="product Upload" />
      <p>{subtext}</p>

      <UploadWrap onSubmit={joinData}>
        <ImagUploadWrap>
          <ThumbnailWrap>
            <input
              id="thumbnail"
              type="file"
              name="0"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            <Thumbnail htmlFor="thumbnail">
              <ThumbnailLabel>
                <p>대표 이미지</p>
              </ThumbnailLabel>
              {imgLoading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                getImage && (
                  <img src={BASE_URL + getImage[0]} alt="첫번째 이미지" />
                )
              )}
            </Thumbnail>
          </ThumbnailWrap>

          <PostingImages>
            <input
              id="productImageOne"
              type="file"
              name="1"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            <PostingImage htmlFor="productImageOne">
              {imgLoading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                getImage && (
                  <img
                    src={getImage[1] ? BASE_URL + getImage[1] : AddIcon}
                    style={getImage[1] ? null : { width: "32px" }}
                    alt="두번째 이미지"
                  />
                )
              )}
            </PostingImage>

            <PostingImage htmlFor="productImageTwo">
              {imgLoading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                getImage && (
                  <img
                    src={getImage[2] ? BASE_URL + getImage[1] : AddIcon}
                    style={getImage[2] ? null : { width: "32px" }}
                    alt="세번째 이미지"
                  />
                )
              )}
            </PostingImage>
            <input
              id="productImageTwo"
              type="file"
              name="2"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
          </PostingImages>
        </ImagUploadWrap>

        <Line />

        <ContentUploadWrap>
          <InputDiv>
            <Label>상품 설명</Label>
            <Textarea
              width="100%"
              height="300px"
              placeholder="상품에 대한 설명을 입력해주세요"
              textCount={getContent}
              value={getContent}
              onChange={handleTextCount}
              name="link"
              count="50"
            />

            <Button type="submit" height="56px" text={buttonText} br="4px" />
          </InputDiv>
        </ContentUploadWrap>
      </UploadWrap>
    </PostingUiLayout>
  );
}

const PostingUiLayout = styled.article`
  width: 80%;
  padding: 40px 60px 60px 60px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid var(--gray200-color);
  background-color: #ffffff;

  & > img {
    height: 58px;
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
  flex-grow: 1;
  flex-basis: 400px;
  display: flex;
  gap: 5%;
`;

const ThumbnailWrap = styled.div`
  width: 70%;
`;

const PostingImages = styled.div`
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
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--gray100-color);
    transition: all 0.3s;
  }

  img {
    width: 100%;
    aspect-ratio: 1/ 1;
    object-fit: cover;
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

const PostingImage = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  aspect-ratio: 1 /1;
  background-color: var(--gray100-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: var(--gray200-color);
    transition: all 0.3s;
  }

  & + & {
    margin-top: 20px;
  }

  img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: cover;
  }
`;

const Line = styled.span`
  width: 1px;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 40px;
`;

const ContentUploadWrap = styled.div`
  flex-grow: 1;
  button {
    margin-top: 48px;
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

const LoadingImage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 40px;
  animation: loading 1s ease 100;

  & .circle1 {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c5c5c5;
  }

  & .circle2 {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c5c5c5;
    margin-top: 20px;
  }

  @keyframes loading {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
