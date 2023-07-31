// const LOGIN_URL = "https://api.mandarin.weniv.co.kr/user/login"

// const loginAPI = async (loginData) => {
//   try {
//     const response = await fetch(LOGIN_URL, {
//       method: 'POST',
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ ...loginData }),
//     })

//     const accountData = await response.json();

//     if (response.ok) {
//       return accountData;
//     }

//   } catch (error) {
//     console.log('Account API 에러가 발생했습니다', error);
//   }
// };

// export default loginAPI;

// import axios from 'axios';

// const LOGIN_URL = "https://api.mandarin.weniv.co.kr/user/login";

// const loginAPI = async (loginData) => {
//   try {
//     const response = await axios.post(LOGIN_URL, loginData, {
//       headers: {
//         'Content-type': 'application/json',
//       },
//     });
//     return response.data;
//     console.log("로그인 성공")
//   } catch (error) {
//     console.log('Account API 에러가 발생했습니다', error);
//     throw error;
//   }
// };

// export default loginAPI;

import { unauthInstance } from "./instance";

const loginAPI = async (loginData) => {
  try {
    const response = await unauthInstance.post("/user/login", loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 

export default loginAPI;
