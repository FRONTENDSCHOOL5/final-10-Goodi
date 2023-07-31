import { unauthInstance } from "./instance";
import { authInstance } from "./instance";

export const singUpAPI = async (signUpData) => {
  try {
    const response = await unauthInstance.post("/user", signUpData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginAPI = async (loginData) => {
  try {
    const response = await unauthInstance.post("/user/login", loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 

export const searchAPI = async (token, keyword) => {
  const SEARCH_URL = `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`;
  try {
    const response = await authInstance.get(`/user/searchuser/?keyword=${keyword}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};




