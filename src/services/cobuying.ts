import { CoBuyingPageingRes } from '@interface/cobuyingList';
// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';

export const cobuyingService = {
  getListPage: (
    id: string,
    createdAt: string,
    ownerName: string
  ): Promise<CoBuyingPageingRes> =>
    axiosInstance.get(ENDPOINTS.COBUYING.PAGE, {
      params: {
        ...(id !== '' && { id }),
        ...(createdAt !== '' && { createdAt }),
        ...(ownerName !== '' && { ownerName }),
      },
    }),
  getDetail: (id: string) => axiosInstance.get(ENDPOINTS.COBUYING.DETAIL(id)),
};
