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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editStatus: async (id: string, body: any, ownerName: string) => {
    const response = await privateAxiosInstance.put(
      ENDPOINTS.MANAGEMENT.EDIT(id),
      body,
      { params: { ownerName } }
    );
    return response.data;
  },
};
