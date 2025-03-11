import axios from 'axios';

// axios 인스턴스 및 인터셉터 설정
export const baseURL = import.meta.env.VITE_API_SERVER_URL;
console.log(baseURL);
export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰 추가 등의 작업
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 에러 처리
    return Promise.reject(error);
  }
);
