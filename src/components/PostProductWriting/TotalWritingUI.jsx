import React, { useState } from 'react'
import * as T from "./writingUI.styled";
import imageCompression from "browser-image-compression";
import { useLocation } from 'react-router';

// 컴포넌트
import PostWriting from './PostWriting';
import ProductWriting from './ProductWriting';
import ImageSection from './ImageSection';

// 이미지 최적화
import { handleDataForm } from '../common/imageOptimization';

export default function TotalWritingUI(props) {
  const { src, subtext, getData, data, setData, setImageWrap, imageWrap, userErrorMessage, handleError } = props;

  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  // 글자수 카운트
  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setDescription(textSlice.slice(0, 50));
  };

  // API 처리
  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (e.target.type === "file") {
      const file = e.target.files[0];

      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 490,
        useWebWorker: true,
      };

      setLoading(true);
      const resizingBlob = await imageCompression(file, options);
      const reader = new FileReader();
      reader.readAsDataURL(resizingBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        handleDataForm(base64data, name, setImageWrap, setLoading);
      };
    } else {
      setDescription(value);

      if (data.hasOwnProperty('post')) {
        setData((prevState) => ({
          ...prevState,
          post: {
            ...prevState.post,
            image: imageWrap.join(),
            [name]: name === "price" ? parseInt(value) : value,
          },
        }));
      }

      if (data.hasOwnProperty('product')) {
        setData((prevState) => ({
          ...prevState,
          product: {
            ...prevState.product,
            itemImage: imageWrap.join(),
            [name]: name === "price" ? parseInt(value) : value,
          },
        }));
      }

      if (name === "content") {
        handleTextCount(e);
      }

      if (name === "link") {
        handleTextCount(e);
      }
    };
  }

  const joinData = (e) => {
    e.preventDefault();
    getData(data);
  };

  return (
    <T.PostUiWrap>
      <h2 className="a11y-hidden">업로드 페이지</h2>
      <img src={src} alt={src} />
      <p>{subtext}</p>

      <T.UploadWrap onSubmit={joinData}>
        <ImageSection
          handleInputChange={handleInputChange}
          loading={loading}
          imageWrap={imageWrap}
          userErrorMessage={userErrorMessage}
        />

        <T.Line />

        {location.pathname === '/postposting' && (
          <PostWriting
            handleInputChange={handleInputChange}
            description={description}
            handleError={handleError}
          />
        )}

        {location.pathname === '/postproduct' && (
          <ProductWriting
            data={data}
            handleInputChange={handleInputChange}
            userErrorMessage={userErrorMessage}
            handleError={handleError}
          />
        )}
      </T.UploadWrap>
    </T.PostUiWrap>
  )
}
