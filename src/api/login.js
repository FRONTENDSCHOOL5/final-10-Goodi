import axios from 'axios';

const LOGIN_URL = "https://api.mandarin.weniv.co.kr/user/login";

const instance = axios.create({
  baseURL: LOGIN_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

// test 계정 정보 : suritest@test.com / suritest
const fetchData = async (loginData) => {
  try {
    const res = await instance.post(LOGIN_URL, loginData);
    console.log('결과', res);
  } catch (err) {
    console.error(err);
  }
};

export default fetchData;