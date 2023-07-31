// const unfollowAPI = async (accountname, token) => {
//   try {
//     const unfollow_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`
//     const response = await fetch(unfollow_URL, {
//       method: 'DELETE',
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

// export default unfollowAPI;

import axios from 'axios';

const unfollowAPI = async (accountname, token) => {
  const UNFOLLOW_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`;
  try {
    const response = await axios.delete(UNFOLLOW_URL, {
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

export default unfollowAPI;
