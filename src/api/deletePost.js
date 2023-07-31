// const deletePostAPI = async (id, token) => {
//     const DELETEPOST_URL = `https://api.mandarin.weniv.co.kr/post/${id}`

//     try {
//         const response = await fetch(DELETEPOST_URL, {
//             method: "DELETE",
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-type": "application/json"
//             }
//         })

//         const data = await response.json();
//         return data;

//     } catch (error) {
//         console.error('Account API 에러가 발생했습니다', error);
//     }
// }

// export default deletePostAPI;

import axios from 'axios';

const deletePostAPI = async (id, token) => {
  const DELETEPOST_URL = `https://api.mandarin.weniv.co.kr/post/${id}`;

  try {
    const response = await axios.delete(DELETEPOST_URL, {
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

export default deletePostAPI;
