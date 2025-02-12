import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import { QUERY_KEYS } from '@/services/queries/cobuying';

export function useCreateCobuying() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cobuyingService.postCreate,
    onSuccess: () => {
      // 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COBUYING.LIST,
      });
    },
  });
}
