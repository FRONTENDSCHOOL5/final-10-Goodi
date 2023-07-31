// const POST_URL = (accountname) =>
//   `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;

// const postAPI = async ({ token, accountname }) => {
//   try {
//     const response = await fetch(POST_URL(accountname), {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization" : `Bearer ${token}`,
//       },
//     });

//     const postList = await response.json();

//     if (response.ok) {
//       return postList;
//     }
//   } catch (error) {
//     console.log("Post API 에러가 발생했습니다", error);
//   }
// };

// export default postAPI;

import axios from 'axios';

const POST_URL = (accountname) =>
  `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;

const postAPI = async ({ token, accountname }) => {
  try {
    const response = await axios.get(POST_URL(accountname), {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log('Post API 에러가 발생했습니다', error);
    throw error;
  }
};

export default postAPI;

// import { authInstance } from "./instance";

// const POST_URL = (accountname) =>
//   `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;

// const postAPI = async ({ accountname }) => {
//   try {
//     const response = await authInstance.get(POST_URL(accountname));
//     return response.data;
//   } catch (error) {
//     console.log('Post API 에러가 발생했습니다');
//     throw error;
//   }
// };

// export default postAPI;


