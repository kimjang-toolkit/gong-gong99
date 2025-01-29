import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';

export const QUERY_KEYS = {
  COBUYING: {
    LIST: ['cobuying', 'list'],
    DETAIL: (id: string) => ['cobuying', 'detail', id],
  },
} as const;

// 공구글 목록 무한스크롤
export function useCobuyingList() {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.COBUYING.LIST,
    queryFn: ({
      pageParam,
    }: {
      pageParam: { id?: string; createdAt?: string; ownerName?: string };
    }) =>
      cobuyingService.getListPage(
        pageParam.id,
        pageParam.createdAt,
        pageParam.ownerName
      ),
    getNextPageParam: (lastPage) => {
      return lastPage.lastEvaluatedKey
        ? {
            id: lastPage.lastEvaluatedKey.id,
            createdAt: lastPage.lastEvaluatedKey.createdAt,
            ownerName: lastPage.lastEvaluatedKey.ownerName,
          }
        : undefined;
    },
    initialPageParam: {},
    maxPages: 10,
  });
}

export function useCobuyingDetail(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
    queryFn: () => cobuyingService.getDetail(id),
  });
}
