// API 호출
import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
export const cobuyingService = {
    getListPage: async (id, createdAtId, ownerName) => {
        const response = await axiosInstance.get(ENDPOINTS.COBUYING.PAGE, {
            params: {
                ...(id !== '' && { id }),
                ...(createdAtId !== '' && { createdAtId }),
                ...(ownerName !== '' && { ownerName }),
            },
        });
        return response.data;
    },
    getDetail: async (id, ownerName) => {
        const response = await axiosInstance.get(ENDPOINTS.COBUYING.DETAIL(id), {
            params: { ownerName },
        });
        return response.data;
    },
};
