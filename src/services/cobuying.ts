import { CoBuyingPageingRes } from '@interface/cobuyingList';
// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';

export const cobuyingService = {
  getListPage: async (
    id: string,
    createdAt: string,
    ownerName: string
  ): Promise<CoBuyingPageingRes> => {
    const response = await axiosInstance.get(ENDPOINTS.COBUYING.PAGE, {
      params: {
        ...(id !== '' && { id }),
        ...(createdAt !== '' && { createdAt }),
        ...(ownerName !== '' && { ownerName }),
      },
    });
    return response.data;
  },
  getDetail: async (id: string) => {
    const response = await axiosInstance.get(ENDPOINTS.COBUYING.DETAIL(id));
    return response.data;
  },
};
