import { privateAxiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';

export const managementService = {
  putShareCheck: async (
    id: string,
    body: {
      isShared: boolean;
      name: string;
    },
    ownerName: string
  ) => {
    const response = await privateAxiosInstance.put(
      ENDPOINTS.MANAGEMENT.SHARE_CHECK(id),
      body,
      {
        params: { ownerName },
      }
    );
    return response.data;
  },
  closeApply: async (id: string) => {
    const response = await privateAxiosInstance.put(
      ENDPOINTS.MANAGEMENT.CLOSE_APPLY(id)
    );
    return response.data;
  },
};
