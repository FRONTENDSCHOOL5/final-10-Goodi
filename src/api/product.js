import { authInstance } from './instance';

//상품 작성
export const productUploadAPI = async (postProductData, token) => {
  try {
    const response = await authInstance.post(`/product`, postProductData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//상품 목록
export const productListAPI = async (accountname, token) => {
  try {
    const productGet_URL = `https://api.mandarin.weniv.co.kr/product/${accountname}`;
    const response = await authInstance.get(`/product/${accountname}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//상품 수정
export const productPutAPI = async (product_id, token, productData) => {
  try {
    const response = await authInstance.put(`/product/${product_id}`, productData)
    return response;
  } catch (error) {
    throw error;
  }
};

//상품 수정시에 불러오기
export const productGetUpdateAPI = async (token, id) => {
  try {
    const response = await authInstance.get(`/product/detail/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//상품 삭제
export const productDeleteAPI = async (product_id, token) => {
  try {
    const response = await authInstance.delete(`/product/${product_id}`)
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

