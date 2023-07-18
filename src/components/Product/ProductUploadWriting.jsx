import React, { useState } from "react";
import styled from "styled-components";

//component
import { InputBox } from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button/Button";

// 이미지
import PlusIcon from "../../assets/icon_plus_gray.svg";
import AddIcon from "../../assets/add_button_gray.svg";

// API
import UploadImage from "../../api/UploadImage";

export default function ProductUploadWriting({
  src,
  subtext,
  buttonText,
  showInput,
  textareaHeight,
  getPostProductData,
}) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageWrap, setImageWrap] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);
  const [productData, setProductData] = useState({
    product: {
      itemName: "",
      price: "", //1원 이상
      link: "",
      itemImage: "",
    },
  });
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  // 상품설명 글자수 제한
  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setDescription(textSlice.slice(0, 100));
  };

  //! 해결해야하는 오류(이미지 교체하면 해당 인덱스로 교체, 해당 타겟 이미지 교체)
  //* 각 input에 name 값을 줘서 해당 인덱스 값이 넘어오게 하려고 하는데 잘 안됨
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      const file = e.target.files[0];

      try {
        setLoading(true);
        const imgSrc = await UploadImage(file);
        setImageWrap((prevArray) => {
          const newArray = [...prevArray];
          newArray[parseInt(name)] = imgSrc;
          return newArray;
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }

      // 대신 맨마지막에 이미지 수정하면 바뀐 이미지는 반영 안됨
    } else {
      setProductData((prevState) => ({
        ...prevState,
        product: {
          ...prevState.product,
          itemImage: imageWrap.join(),
          [name]: name === "price" ? parseInt(value) : value,
        },
      }));
    }

    if (name === "link") {
      handleTextCount(e);
    }
  };

  const joinData = (e) => {
    e.preventDefault();
    getPostProductData(productData);
  };

  const handleError = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      product: {
        ...prevState.product,
        itemImage: imageWrap.join(),
      },
    }));
    const errors = [];
    if (productData.product.itemImage === "") {
      errors.push("상품이미지를 한개 이상 업로드 해주세요");
    } else if (
      productData.product.itemName === "" ||
      !productData.product.itemName
    ) {
      errors.push("상품명을 입력해주세요");
    } else if (productData.product.price === "" || !productData.product.price) {
      errors.push("상품가격을 입력해주세요");
    } else if (productData.product.link === "" || !productData.product.link) {
      errors.push("상품소개글을 입력해주세요");
    } else {
      errors.push("");
    }
    setUserErrorMessage(errors);
  };

  return (
    <PostUiWrap>
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
            <Thumbnail
              htmlFor="thumbnail"
              style={
                userErrorMessage.includes(
                  "상품이미지를 한개 이상 업로드 해주세요"
                )
                  ? { border: "1px solid red" }
                  : null
              }
            >
              <ThumbnailLabel>
                <p>대표 이미지</p>
              </ThumbnailLabel>
              {loading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                <img
                  src={imageWrap[0] ? BASE_URL + imageWrap[0] : PlusIcon}
                  style={imageWrap[0] ? null : { width: "90px" }}
                  alt=""
                />
              )}
            </Thumbnail>
            {userErrorMessage.includes(
              "상품이미지를 한개 이상 업로드 해주세요"
            ) && (
              <ErrorMassage>
                상품이미지를 한개 이상 업로드 해주세요
              </ErrorMassage>
            )}
          </ThumbnailWrap>

          <ProductImages>
            <input
              id="productImageOne"
              type="file"
              name="1"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            <ProductImage htmlFor="productImageOne">
              {loading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                <img
                  src={imageWrap[1] ? BASE_URL + imageWrap[1] : AddIcon}
                  style={imageWrap[1] ? null : { width: "32px" }}
                  alt=""
                />
              )}
            </ProductImage>
            <ProductImage htmlFor="productImageTwo">
              {loading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                <img
                  src={imageWrap[2] ? BASE_URL + imageWrap[2] : AddIcon}
                  style={imageWrap[2] ? null : { width: "32px" }}
                  alt=""
                />
              )}
            </ProductImage>

            <input
              id="productImageTwo"
              type="file"
              name="2"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
          </ProductImages>
        </ImagUploadWrap>

        <Line />

        <ContentUploadWrap>
          {showInput && (
            <>
              <InputWrap>
                <Label>상품명</Label>
                <InputBox
                  width="100%"
                  height="48px"
                  name="itemName"
                  placeholder="상품명을 입력해주세요"
                  type="text"
                  onChange={handleInputChange}
                  value={productData.product.itemName}
                  hasError={userErrorMessage.includes("상품명을 입력해주세요")}
                />
                {userErrorMessage.includes("상품명을 입력해주세요") && (
                  <ErrorMassage>상품명을 입력해주세요</ErrorMassage>
                )}
              </InputWrap>

              <InputWrap>
                <Label>상품가격</Label>
                <InputBox
                  width="100%"
                  height="48px"
                  type="number"
                  placeholder="상품가격을 입력해주세요"
                  name="price"
                  value={productData.product.price}
                  onChange={handleInputChange}
                  hasError={userErrorMessage.includes(
                    "상품가격을 입력해주세요"
                  )}
                />
                {userErrorMessage.includes("상품가격을 입력해주세요") && (
                  <ErrorMassage>상품가격을 입력해주세요</ErrorMassage>
                )}
              </InputWrap>
            </>
          )}

          <InputWrap>
            <Label>상품 설명</Label>
            <Textarea
              width="100%"
              height="100px"
              placeholder="상품에 대한 설명을 입력해주세요"
              textCount={description}
              value={description}
              onChange={handleInputChange}
              name="link"
              hasError={userErrorMessage.includes("상품소개글을 입력해주세요")}
            />
            {userErrorMessage.includes("상품소개글을 입력해주세요") && (
              <ErrorMassage>상품소개글을 입력해주세요</ErrorMassage>
            )}
          </InputWrap>

          <Button
            type="submit"
            height="56px"
            text={buttonText}
            br="4px"
            onClick={handleError}
          />
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

const ImagUploadWrap = styled.section`
  flex-grow: 1;
  flex-basis: 400px;
  display: flex;
  gap: 5%;
`;

const ContentUploadWrap = styled.section`
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

const ProductImage = styled.label`
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

const InputWrap = styled.section`
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

const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
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
