import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import useAuthStore from '@/stores/authStore';

export const authService = {
  refreshToken: async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.AUTH.REFRESH_TOKEN, {
        withCredentials: true,
      });
      const newToken = response.headers['authorization'].split(' ')[1];
      useAuthStore.getState().setToken(newToken);
      useAuthStore.getState().setOwnerName(response.data.ownerName);
      return newToken;
    } catch (error) {
      console.error('리프레시 토큰 만료!!', error);
      return null;
    }
  },
};
