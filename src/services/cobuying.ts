// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import { ApplicationReq } from '@interface/application';
import { UserAuthReq } from '@interface/auth';
import { CoBuyingDetail } from '@interface/cobuying';
import { CoBuyingPageingRes } from '@interface/cobuyingList';

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
  postApply: async (body: ApplicationReq) => {
    const response = await axiosInstance.post(ENDPOINTS.COBUYING.APPLY, body);
    return response.data;
  },
  pwdCheck: async (id: string, body: UserAuthReq) => {
    const response = await axiosInstance.post(
      ENDPOINTS.COBUYING.PWD_CHECK(id),
      body
    );
    return response;
  },
};
