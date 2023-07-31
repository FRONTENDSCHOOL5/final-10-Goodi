import { authInstance } from "./instance";

export const likeAPI = async (token, id) => { 
  try {
    const response = await authInstance.post(`/post/${id}/heart`)
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const cancelLikeAPI = async (token, id) => {
  try {
    const response = await authInstance.delete(`/post/${id}/unheart`)
    return response.data;
  } catch (error) {
    throw error;
  }
}