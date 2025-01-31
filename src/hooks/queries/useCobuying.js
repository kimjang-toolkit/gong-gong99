import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
export const QUERY_KEYS = {
    COBUYING: {
        LIST: ['cobuying', 'list'],
        DETAIL: (id) => ['cobuying', 'detail', id],
    },
};
// 공구글 목록 무한스크롤
export function useCobuyingList() {
    return useInfiniteQuery({
        queryKey: QUERY_KEYS.COBUYING.LIST,
        queryFn: ({ pageParam }) => cobuyingService.getListPage(pageParam.id, pageParam.createdAtId, pageParam.ownerName),
        getNextPageParam: (lastPage) => {
            return lastPage.lastEvaluatedKey
                ? {
                    id: lastPage.lastEvaluatedKey.id,
                    createdAtId: lastPage.lastEvaluatedKey.createdAtId,
                    ownerName: lastPage.lastEvaluatedKey.ownerName,
                }
                : undefined;
        },
        initialPageParam: { id: '', createdAtId: '', ownerName: '' },
        maxPages: 10,
    });
}
export function useCobuyingDetail(id, ownerName) {
    return useQuery({
        queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
        queryFn: () => cobuyingService.getDetail(id, ownerName),
    });
}
