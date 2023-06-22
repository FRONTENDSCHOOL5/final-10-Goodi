import React, { useEffect, useState } from "react";
import styled from "styled-components";

//component
import { InputBox } from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

// 이미지
import PlusIcon from "../../assets/icon_plus_gray.svg";
import AddIcon from "../../assets/add_button_gray.svg";

// API
import UploadImage from "../../api/UploadImage";
import { useNavigate, useParams } from "react-router-dom";
import productAPI from "../../api/product";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import productPut from "../../api/productPut";

export default function UpdatePostUI({
  src,
  subtext,
  buttonText,
  showInput,
  textareaHeight,
  getPostProductData,
}) {
  const token = useRecoilValue(loginToken);
  // const { product_id } = useParams();
  const navigate = useNavigate();

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  const [userErrorMessage, setUserErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const [imageWrap, setImageWrap] = useState([]);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    itemName: "",
    price: 0,
    link: "",
    itemImage: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productAPI(token, "6493b0f8b2cb20566360436e");
        console.log("리스폰스", response.product);
        setProduct(response.product);
        setFormData({
          id: response.product.id,
          itemName: response.product.itemName,
          price: response.product.price,
          link: response.product.link,
          itemImage: response.product.itemImage,
        });
      } catch (error) {
        console.error("상품 정보 호출 실패", error);
      }
    };

    fetchProduct();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProductData = {
      ...formData,
      id: formData.id,
      itemName: formData.itemName,
      price: formData.price,
      link: formData.link,
      itemImage: formData.itemImage,
    };

    setFormData(updatedProductData);
    productPut("6493b0f8b2cb20566360436e", token, formData);

    navigate(`/products/6493b0f8b2cb20566360436e`);
  };

  if (!product) {
    return <div>로딩중입니다</div>;
  }

  console.log("폼데이터", formData);

  return (
    <PostUiWrap>
      <h2 className="a11y-hidden">상품 업로드 페이지</h2>
      <img src={src} alt="product Upload" />
      <p>{subtext}</p>

      <UploadWrap onSubmit={handleSubmit}>
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
                <p>Loading...</p>
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
                <p>Loading...</p>
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
                <p>Loading...</p>
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
          <InputDiv>
            <Label>상품명</Label>
            <InputBox
              width="100%"
              height="48px"
              name="itemName"
              placeholder="상품명을 입력해주세요"
              type="text"
              onChange={handleInputChange}
              value={formData.itemName}
            />
          </InputDiv>

          <InputDiv>
            <Label>상품가격</Label>
            <InputBox
              width="100%"
              height="48px"
              type="number"
              placeholder="상품가격을 입력해주세요"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </InputDiv>

          <InputDiv>
            <Label>상품 설명</Label>
            <Textarea
              width="100%"
              height="100px"
              placeholder="상품에 대한 설명을 입력해주세요"
              textCount={formData.link}
              value={formData.link}
              onChange={handleInputChange}
              name="link"
            />
          </InputDiv>

          <Button
            type="submit"
            height="56px"
            text="상품 게시글 수정하기"
            br="4px"
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

const ImagUploadWrap = styled.div`
  flex-grow: 1;
  flex-basis: 400px;
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

const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`;
