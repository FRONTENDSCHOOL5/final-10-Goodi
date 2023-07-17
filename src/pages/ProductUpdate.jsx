import React, { useEffect, useState } from "react";
import styled from "styled-components";

//component
import Layout from "../layout/Layout";
import { InputBox } from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Button from "../components/common/Button/Button";

// 이미지
import PlusIcon from "../assets/icon_plus_gray.svg";
import AddIcon from "../assets/add_button_gray.svg";
import PostBackground from "../assets/post_bg.svg";
import ProductUpload from "../assets/Prodcut_upload.svg";

// API
import { useNavigate, useParams } from "react-router-dom";
import productAPI from "../api/product";
import { useRecoilValue } from "recoil";
import loginToken from "../recoil/loginToken";
import productPut from "../api/productPut";
import PostImageAPI from "../api/UploadImage";

export default function ProductUpdate() {
  const token = useRecoilValue(loginToken);
  const { product_id } = useParams();
  const navigate = useNavigate();

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  const [loading, setLoading] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

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
        const response = await productAPI(token, product_id);
        setProduct(response.product);
        setFormData({
          id: response.product.id,
          itemName: response.product.itemName,
          price: response.product.price,
          link: response.product.link,
          itemImage: response.product.itemImage,
        });
        setImageWrap(response.product.itemImage.split(","));
      } catch (error) {
        console.error("상품 정보 호출 실패", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    setFormData({ ...formData, itemImage: imageWrap.join(",") });
  }, [imageWrap]);

  const handleChangeImage = async (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    const imgSrc = await PostImageAPI(file);

    try {
      setLoading(true);
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
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (formData.itemName === "" || !formData.itemName) {
      errors.push("상품명을 입력해주세요");
    }
    if (formData.price === "" || !formData.price) {
      errors.push("상품가격을 입력해주세요");
    }
    if (formData.link === "" || !formData.link) {
      errors.push("상품소개글을 입력해주세요");
    }
    setUserErrorMessage(errors);

    if (errors.length > 0) {
      setUserErrorMessage(errors);
      return;
    }

    const updatedProductData = {
      product: {
        id: formData.id,
        itemName: formData.itemName,
        price: formData.price,
        link: formData.link,
        itemImage: formData.itemImage,
      },
    };

    await productPut(product_id, token, updatedProductData);

    navigate(`/products/${product_id}`);
  };

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        <PostUiWrap>
          <h2 className="a11y-hidden">상품 수정 페이지</h2>
          <img src={ProductUpload} alt="product Upload" />

          <UploadWrap onSubmit={handleSubmit}>
            <ImagUploadWrap>
              <ThumbnailWrap>
                <input
                  id="thumbnail"
                  type="file"
                  name="0"
                  style={{ display: "none" }}
                  onChange={handleChangeImage}
                />
                <Thumbnail htmlFor="thumbnail">
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
              </ThumbnailWrap>

              <ProductImages>
                <input
                  id="productImageOne"
                  type="file"
                  name="1"
                  style={{ display: "none" }}
                  onChange={handleChangeImage}
                />
                <ProductImage htmlFor="productImageOne">
                  {loading ? (
                    <LoadingImage>
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                    </LoadingImage>
                  ) : (
                    <img
                      name="1"
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
                      name="2"
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
                  onChange={handleChangeImage}
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
                  hasError={userErrorMessage.includes("상품명을 입력해주세요")}
                />
                {userErrorMessage.includes("상품명을 입력해주세요") && (
                  <ErrorMassage>상품명을 입력해주세요</ErrorMassage>
                )}
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
                  hasError={userErrorMessage.includes(
                    "상품가격을 입력해주세요"
                  )}
                />
                {userErrorMessage.includes("상품가격을 입력해주세요") && (
                  <ErrorMassage>상품가격을 입력해주세요</ErrorMassage>
                )}
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
                  hasError={userErrorMessage.includes(
                    "상품소개글을 입력해주세요"
                  )}
                />
                {userErrorMessage.includes("상품소개글을 입력해주세요") && (
                  <ErrorMassage>상품소개글을 입력해주세요</ErrorMassage>
                )}
              </InputDiv>

              <Button
                type="submit"
                height="56px"
                text="상품 수정하기"
                br="4px"
              />
            </ContentUploadWrap>
          </UploadWrap>
        </PostUiWrap>
      </PostProductWrap>
    </Layout>
  );
}

const PostProductWrap = styled.div`
  padding-top: 100px;
  background: url(${PostBackground}) no-repeat #fafafa;
  padding-bottom: 40px;
`;

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
