// const PROFILE_URL = "https://api.mandarin.weniv.co.kr/user/myinfo"

// export const profileAPI = async (token) => {
//   try {
//     const response = await fetch(PROFILE_URL, {
//       method: 'GET',
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Account API 에러가 발생했습니다', error);
//   }
// };

// export const accountProfileAPI = async (accountname, token) => {
//   try {
//     const ACCOUNTPROFILE_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}`
//     const response = await fetch(ACCOUNTPROFILE_URL, {
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

import axios from 'axios';

const PROFILE_URL = 'https://api.mandarin.weniv.co.kr/user/myinfo';

export const profileAPI = async (token) => {
  try {
    const response = await axios.get(PROFILE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};

export const accountProfileAPI = async (accountname, token) => {
  try {
    const ACCOUNTPROFILE_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}`;
    const response = await axios.get(ACCOUNTPROFILE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('프로필 정보를 가져오는데 실패했습니다.');
    }
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};
