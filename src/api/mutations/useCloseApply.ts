import { QUERY_KEYS } from '@/api/queries/cobuying';
import { managementService } from '@/api/services/management';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCloseApply(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => managementService.closeApply(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
      });
    },
  });
}
