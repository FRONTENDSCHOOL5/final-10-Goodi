// const putPostingAPI = async (token, id, putData) => {
//     const PUTPOSTING_URL = `https://api.mandarin.weniv.co.kr/post/${id}`
//     try {
//         const response = await fetch(PUTPOSTING_URL, {
//             method: "PUT",
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify({ ...putData }),
//         })

//         const putPostingData = await response.json();
//         return putPostingData
//     } catch (error) {
//         console.error("Account API 에러가 발생했습니다", error);
//     }
// }

// export default putPostingAPI;

import axios from 'axios';

const putPostingAPI = async (token, id, putData) => {
  const PUTPOSTING_URL = `https://api.mandarin.weniv.co.kr/post/${id}`;
  try {
    const response = await axios.put(PUTPOSTING_URL, putData, {
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

export default putPostingAPI;
