import UploadImage from "../../api/UploadImage";

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
  const imgSrc = await UploadImage(file);
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
  const imgSrc = await UploadImage(file);
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