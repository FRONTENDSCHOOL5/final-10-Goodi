import axios from 'axios';

const IMAGE_URL = "https://api.mandarin.weniv.co.kr/image/uploadfile";
export const PostImageAPI = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(IMAGE_URL, formData);
    return response.data.filename;
  } catch (error) {
    throw error;
  }
};