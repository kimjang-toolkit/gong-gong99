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
import { ProductExtractDto } from '@interface/product';

export const cobuyingService = {
  postImgExtract: async (body: {
    imgType: string;
    imgBase64: string;
  }): Promise<ProductExtractDto> => {
    const response = await axiosInstance.post(
      ENDPOINTS.COBUYING.IMG_EXTRACT,
      body
    );
    return response.data;
  },
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
    const response = await axiosInstance.post(
      ENDPOINTS.AUTH.PWD_CHECK(id),
      body
    );
    return response;
  },
  putShareCheck: async (
    id: string,
    body: {
      sharingCheckYN: boolean;
      attendeeName: string;
    },
    ownerName: string
  ) => {
    const response = await axiosInstance.put(
      ENDPOINTS.COBUYING.SHARE_CHECK(id),
      body,
      {
        params: { ownerName },
      }
    );
    return response.data;
  },
};
