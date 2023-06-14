import axios from 'axios'

// API 엔드포인트
const BASE_URL = 'https://api.mandarin.weniv.co.kr'

// Axios 기본 설정을 담고 있는 Instance 를 생성해요.
const initFetchInstance = ({ baseUrl }) => {
  const instance = axios.create({
    timeout: 3000,
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return instance
}

export const goodiFetchInstance = initFetchInstance({ baseUrl: BASE_URL })