import { unauthInstance } from "./instance";

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




