import React, { useState } from 'react'
import styled from 'styled-components';
import imageCompression from "browser-image-compression";

import * as T from "./commonCss.styled";

import UploadImage from "../../api/UploadImage";

import thumnailBanner from "../../assets/thumnail_banner.svg";
import PlusIcon from "../../assets/icon_plus_gray.svg";
import addIcon from "../../assets/add_button_gray.svg";
import { useLocation, useParams } from 'react-router';
import Button from '../common/Button/Button';
import Textarea from '../common/Textarea';
import { InputBox } from '../common/Input';
import Posting from './Posting';
import ProductPosting from './ProductPosting';
import ImageUp from './ImageUp';
// import { handleDataForm } from './handleImage';

export default function WritingUI({ src, subtext, getData, data, setData, setImageWrap, imageWrap, userErrorMessage, handleError }) {

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const location = useLocation();

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


  const handleTextCount = (e) => {
    const textSlice = e.target.value;
    setDescription(textSlice.slice(0, 50));
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

      // try {
      setLoading(true);
      const resizingBlob = await imageCompression(file, options);
      const reader = new FileReader();
      reader.readAsDataURL(resizingBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        handleDataForm(base64data, name);
      };
      // } catch (error) {
      //   console.log(error);
      // }
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


  console.log(data);

  return (
    <T.PostUiWrap>
      <h2 className="a11y-hidden">업로드 페이지</h2>
      <img src={src} alt="product Upload" />
      <p>{subtext}</p>

      <T.UploadWrap onSubmit={joinData}>
        <ImageUp
          handleInputChange={handleInputChange}
          loading={loading}
          imageWrap={imageWrap}
          userErrorMessage={userErrorMessage}
        />

        <T.Line />

        {location.pathname === '/postposting' && (
          <Posting
            handleInputChange={handleInputChange}
            description={description}
            handleError={handleError}
          />
        )}

        {location.pathname === '/postproduct' && (
          <ProductPosting
            handleInputChange={handleInputChange}
            userErrorMessage={userErrorMessage}
            handleError={handleError}
            data={data}
          />
        )}
      </T.UploadWrap>
    </T.PostUiWrap>
  )

}
