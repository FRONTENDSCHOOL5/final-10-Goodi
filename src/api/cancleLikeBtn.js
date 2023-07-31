// const cancleLikeAPI = async (token, id) => {
//   const CANCLELIKE_URL = `https://api.mandarin.weniv.co.kr/post/${id}/unheart`;

//   try {
//     const response = await fetch(CANCLELIKE_URL, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization" : `Bearer ${token}`,
//       },
//     });

//     const cancleLikeData = await response.json();

//     if (response.ok) {
//       return cancleLikeData;
//     }
//   } catch (error) {
//     console.log("cancleLikeAPI 에러가 발생했습니다", error);
//   }
// };

// export default cancleLikeAPI;
// import axios from 'axios';

// const cancleLikeAPI = async (token, id) => {
//   const CANCLELIKE_URL = `https://api.mandarin.weniv.co.kr/post/${id}/unheart`;

//   try {
//     const response = await axios.delete(CANCLELIKE_URL, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.log('cancleLikeAPI 에러가 발생했습니다', error);
//     throw error;
//   }
// };

// export default cancleLikeAPI;

import { authInstance } from "./instance";

export const cancelLikeAPI = async (token, id) => {
  try {
    const response = await authInstance.delete(`/post/${id}/unheart`)
    return response.data;
  } catch (error) {
    throw error;
  }
}