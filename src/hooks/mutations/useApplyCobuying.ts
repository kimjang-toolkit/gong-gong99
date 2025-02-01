import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import { QUERY_KEYS } from '@/hooks/queries/useCobuying';
import { ApplicationReq } from '@interface/application';
import useAlertStore from '@/stores/alertStore';

// 공구 신청
export default function useApplyCobuying(id: string) {
  const queryClient = useQueryClient(); // returns the current QueryClient instance.
  // 신청 후 알림창 띄우기
  const { showAlert } = useAlertStore();

  return useMutation({
    mutationFn: (body: ApplicationReq) => cobuyingService.postApply(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
      });
      showAlert({
        status: 'success',
        label: '신청이 완료되었습니다.',
      });
    },
    onError: (error) => {
      showAlert({
        status: 'fail',
        label: '신청에 실패했습니다.',
      });
      throw error;
    },
  });
}
