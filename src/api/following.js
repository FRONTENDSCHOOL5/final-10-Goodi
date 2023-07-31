// const followingAPI = async (accountname, token) => {
//   try {
//     const following_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following`
//     const response = await fetch(following_URL, {
//       method: 'GET',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-type": "application/json"
//       }
//     })

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Account API 에러가 발생했습니다', error);
//   }
// };

// export default followingAPI;

import axios from 'axios';

const followingAPI = async (accountname, token) => {
  try {
    const following_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following`;
    const response = await axios.get(following_URL, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};

export default followingAPI;
