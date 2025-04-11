import { managementService } from '@/api/services/management';
import { useMutation } from '@tanstack/react-query';

export default function useEditCobuying(id: string, ownerName: string) {
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: any) =>
      managementService.editStatus(id, body, ownerName),
  });
}
