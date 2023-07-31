import { authInstance } from "./instance";

export const followAPI = async (accountname, token) => {
  try {
    const response = await authInstance.post(`/profile/${accountname}/follow`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const unfollowAPI = async (accountname, token) => {
  try {
    const response = await authInstance.delete(`/profile/${accountname}/unfollow`)  
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const followerAPI = async (accountname, token) => {
  try {
    const response = await authInstance.get(`/profile/${accountname}/follower`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const followingAPI = async (accountname, token) => {
  try {
    const response = await authInstance.get(`/profile/${accountname}/following`)
    return response.data;
  } catch (error) {
    throw error;
  }
};


