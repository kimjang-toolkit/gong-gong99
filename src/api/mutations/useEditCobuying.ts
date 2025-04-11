import { QUERY_KEYS } from '@/api/queries/cobuying';
import { managementService } from '@/api/services/management';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditCobuying(id: string, ownerName: string) {
  const queryClient = useQueryClient();
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: any) =>
      managementService.editStatus(id, body, ownerName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
      });
    },
  });
}
