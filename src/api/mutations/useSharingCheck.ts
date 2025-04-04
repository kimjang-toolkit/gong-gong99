import { cobuyingService } from '@/api/services/cobuying';
import { useMutation } from '@tanstack/react-query';

export default function useSharingCheck(id: string, ownerName: string) {
  return useMutation({
    mutationFn: (body: { sharingCheckYN: boolean; attendeeName: string }) =>
      cobuyingService.putShareCheck(id, body, ownerName),
  });
}
