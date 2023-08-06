import axios from "axios"; 

const BASE_URL = "https://api.mandarin.weniv.co.kr";

export const unauthInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("userToken");
};

authInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    throw error;
  }
);
