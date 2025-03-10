// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import { DivideType } from '@domain/cobuying';
import { ApplicationReq } from '@interface/application';
import { UserAuthReq } from '@interface/auth';
import {
  CoBuyingCreateReq,
  CoBuyingDetail,
  CoBuyingSummary,
} from '@interface/cobuying';
import { CoBuyingPageingRes } from '@interface/cobuyingList';
import { AxiosError } from 'axios';

export const cobuyingService = {
  postCreate: async (
    body: CoBuyingCreateReq<DivideType>
  ): Promise<CoBuyingSummary> => {
    const response = await axiosInstance.post(ENDPOINTS.COBUYING.CREATE, body);
    return response.data;
  },

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
    try {
      const response = await axiosInstance.post(
        ENDPOINTS.AUTH.PWD_CHECK(id),
        body
      );

      const token = response.headers['authorization'];
      return { success: true, token };
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return { success: false };
      }
      throw error; // 기타 에러는 그대로 throw
    }
  },
};
