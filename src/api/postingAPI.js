// const postingAPI = async (token, id) => {
//   try {
//     const POSTING_URL = `https://api.mandarin.weniv.co.kr/post/${id}`
//     const response = await fetch(POSTING_URL, {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-type": "application/json"
//       }
//     })

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Account API 에러가 발생했습니다", error);
//   }
// }

// export default postingAPI

import axios from 'axios';

const postingAPI = async (token, id) => {
  try {
    const POSTING_URL = `https://api.mandarin.weniv.co.kr/post/${id}`;
    const response = await axios.get(POSTING_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};

export default postingAPI;
