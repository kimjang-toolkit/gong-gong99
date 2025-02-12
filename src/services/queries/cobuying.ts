import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import { CreatedAtKey } from '@interface/cobuying';

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
    queryFn: ({ pageParam }: { pageParam: CreatedAtKey }) =>
      cobuyingService.getListPage(
        pageParam.id,
        pageParam.createdAtId,
        pageParam.ownerName
      ),
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

// 공구글 상세 조회
export function useCobuyingDetail(id: string, ownerName: string) {
  return useQuery({
    queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
    queryFn: () => cobuyingService.getDetail(id, ownerName),
  });
}
