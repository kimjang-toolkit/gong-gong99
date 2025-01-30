import { CoBuyingPageingRes } from '@interface/cobuyingList';
// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import { CoBuyingDetail } from '@interface/cobuying';

export const cobuyingService = {
  getListPage: async (
    id: string,
    createdAtId: string,
    ownerName: string
  ): Promise<CoBuyingPageingRes> => {
    const response = await axiosInstance.get(ENDPOINTS.COBUYING.PAGE, {
      params: {
        ...(id !== '' && { id }),
        ...(createdAtId !== '' && { createdAtId }),
        ...(ownerName !== '' && { ownerName }),
      },
    });
    return response.data;
  },
  getDetail: async (id: string, ownerName: string): Promise<CoBuyingDetail> => {
    const response = await axiosInstance.get(ENDPOINTS.COBUYING.DETAIL(id), {
      params: { ownerName },
    });
    return response.data;
  },
};
