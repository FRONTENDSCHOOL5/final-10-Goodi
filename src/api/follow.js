// const followAPI = async (accountname, token) => {
//   try {
//     const follow_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`
//     const response = await fetch(follow_URL, {
//       method: 'POST',
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

// export default followAPI;

import axios from 'axios';

const followAPI = async (accountname, token) => {
  try {
    const follow_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`;
    const response = await axios.post(follow_URL, {}, {
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

export default followAPI;
