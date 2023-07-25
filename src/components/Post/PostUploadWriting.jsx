import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import styled from "styled-components";
import UploadImage from "../../api/UploadImage";

import Textarea from "../common/Textarea";
import Button from "../common/Button/Button";

import PlusIcon from "../../assets/icon_plus_gray.svg";
import addIcon from "../../assets/add_button_gray.svg";
import thumnailBanner from "../../assets/thumnail_banner.svg";

export default function PostUploadWriting({
  src,
  subtext,
  buttonText,
  getPostPostingData,
}) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageWrap, setImageWrap] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);
  const [postingData, setPostingData] = useState({
    post: {
      content: "",
      image: "",
    },
  });
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  // 게시글내용 글자수 제한
  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setDescription(textSlice.slice(0, 50));
  };

  const handleDataForm = async (dataURI, name) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: "image/jpeg",
    });
    const file = new File([blob], "image.jpg");
    console.log("after: ", file);
    const imgSrc = await UploadImage(file);
    setImageWrap((prevArray) => {
      const newArray = [...prevArray];
      newArray[parseInt(name)] = imgSrc;
      return newArray;
    });
    setLoading(false);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      const file = e.target.files[0];

      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 490,
        useWebWorker: true,
      };

      try {
        setLoading(true);
        const resizingBlob = await imageCompression(file, options);
        const reader = new FileReader();
        reader.readAsDataURL(resizingBlob);
        reader.onloadend = () => {
          const base64data = reader.result;
          handleDataForm(base64data, name);
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      setDescription(value);
      setPostingData((prevState) => ({
        ...prevState,
        post: {
          ...prevState.post,
          image: imageWrap.join(),
          [name]: name === "price" ? parseInt(value) : value,
        },
      }));
    }

    if (name === "content") {
      handleTextCount(e);
    }
  };

  const joinData = (e) => {
    e.preventDefault();
    getPostPostingData(postingData);
  };

  const handleError = (e) => {
    setPostingData((prevState) => ({
      ...prevState,
      post: {
        ...prevState.post,
        image: imageWrap.join(),
      },
    }));
    const errors = [];
    if (postingData.post.image === "") {
      errors.push("게시글 이미지를 한개 이상 업로드 해주세요");
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
                  "게시글 이미지를 한개 이상 업로드 해주세요"
                )
                  ? { border: "1px solid red" }
                  : null
              }
            >
              {loading ? (
                <LoadingImage>
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                </LoadingImage>
              ) : (
                <img
                  src={imageWrap[0] ? BASE_URL + imageWrap[0] : PlusIcon}
                  style={imageWrap[0] ? null : { width: "90px" }}
                />
              )}
            </Thumbnail>
            {userErrorMessage.includes(
              "게시글 이미지를 한개 이상 업로드 해주세요"
            ) && (
              <ErrorMassage>
                게시글 이미지를 한개 이상 업로드 해주세요
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
                  src={imageWrap[1] ? BASE_URL + imageWrap[1] : addIcon}
                  style={imageWrap[1] ? null : { width: "32px" }}
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
                  src={imageWrap[2] ? BASE_URL + imageWrap[2] : addIcon}
                  style={imageWrap[2] ? null : { width: "32px" }}
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
          <InputWrap>
            <Label>게시글 내용</Label>
            <Textarea
              width="100%"
              height="300px"
              placeholder="게시글 내용을 입력해주세요"
              textCount={description}
              value={description}
              onChange={handleInputChange}
              name="content"
              count="50"
            />
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

const PostUiWrap = styled.section`
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

const ImagUploadWrap = styled.fieldset`
  flex-grow: 1;
  flex-basis: 400px;
  display: flex;
  gap: 5%;
`;

const ContentUploadWrap = styled.fieldset`
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

  &::before {
    content: url(${thumnailBanner});
    position: absolute;
    top: 20px;
    left: 20px;
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

const InputWrap = styled.div`
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
