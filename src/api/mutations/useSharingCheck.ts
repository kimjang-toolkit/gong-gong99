import { managementService } from '@/api/services/management';
import { useMutation } from '@tanstack/react-query';

export default function useSharingCheck(id: string, ownerName: string) {
  return useMutation({
    mutationFn: (body: { isShared: boolean; name: string }) =>
      managementService.putShareCheck(id, body, ownerName),
  });
}
