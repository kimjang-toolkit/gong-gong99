import { authService } from '@/api/services/auth';
import useAuthStore from '@/stores/authStore';
import axios from 'axios';

// axios 인스턴스 및 인터셉터 설정
export const baseURL = import.meta.env.VITE_API_SERVER_URL;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateAxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// 요청 인터셉터: 요청할 때마다 최신 accessToken을 동적으로 설정
privateAxiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 발생 시 refreshToken으로 갱신 후 재요청
privateAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await authService.refreshToken();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return privateAxiosInstance.request(error.config);
        }
      } catch (error) {
        console.error('리프레시 토큰 갱신 실패!!', error);
        // 로그아웃 및 리다이렉트 시키기
        useAuthStore.getState().setToken('');
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
