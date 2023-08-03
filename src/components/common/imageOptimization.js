// 코드 정리 필요!

import { PostImageAPI } from "../../api/UploadImage";

export const handleDataForm = async (dataURI, name, setImageWrap, setLoading) => {
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
  const imgSrc = await PostImageAPI(file);
  setImageWrap((prevArray) => {
    const newArray = [...prevArray];
    newArray[parseInt(name)] = imgSrc;
    return newArray;
  });
  setLoading(false);
};

export const handleProfileDataForm = async (dataURI, setProfileSelectedImage, setSignUpData) => {
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
  const imgSrc = await PostImageAPI(file);
  const newImage = imgSrc;
  setProfileSelectedImage(newImage);
  setSignUpData((prevState) => ({
    ...prevState,
    user: {
      ...prevState.user,
      image: newImage,
    },
  }));
};

export const handlePostUpdateForm = async (dataURI, name, setGetImage, setImgLoading) => {
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
  const imgSrc = await PostImageAPI(file);
  setGetImage((prevArray) => {
    const newArray = [...prevArray];
    newArray[parseInt(name)] = imgSrc;
    return newArray;
  });
  setImgLoading(false);
};