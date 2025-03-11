import { ENDPOINTS } from '@/api/endpoints';
import axios from 'axios';

export const authService = {
  refreshToken: async () => {
    try {
      const response = await axios.get(ENDPOINTS.AUTH.REFRESH_TOKEN, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('리프레시 토큰 만료!!', error);
      return null;
    }
  },
};
