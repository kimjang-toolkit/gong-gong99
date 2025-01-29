import { useQuery } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';

export const QUERY_KEYS = {
  COBUYING: {
    LIST: ['cobuying', 'list'],
    DETAIL: (id: string) => ['cobuying', 'detail', id],
  },
} as const;

export function useCobuyingList() {
  return useQuery({
    queryKey: QUERY_KEYS.COBUYING.LIST,
    queryFn: () => cobuyingService.getList(),
  });
}

export function useCobuyingDetail(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
    queryFn: () => cobuyingService.getDetail(id),
  });
} 