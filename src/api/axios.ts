import { authService } from '@/api/services/auth';
import useAuthStore from '@/stores/authStore';
import axios from 'axios';

// axios 인스턴스 및 인터셉터 설정
export const baseURL = import.meta.env.VITE_API_SERVER_URL;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const privateAxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
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

// 응답 인터셉터: 401 발생 시 refreshToken으로 갱신 후 재요청 (단 1회만 시도)
privateAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401이고, retry하지 않았을 경우에만 처리
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await authService.refreshToken();

        if (newAccessToken) {
          // 새로운 토큰으로 Authorization 헤더 재설정
          useAuthStore.getState().setToken(newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return privateAxiosInstance(originalRequest); // 재요청
        }
      } catch (refreshError) {
        console.error('리프레시 토큰 갱신 실패:', refreshError);

        // 로그아웃 처리 및 리다이렉트
        useAuthStore.getState().setToken('');
        window.location.href = '/co-buying';
      }
    }

    return Promise.reject(error);
  }
);
