import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import { QUERY_KEYS } from '@/hooks/queries/useCobuying';
import { ApplicationReq } from '@interface/application';

// 공구 신청
export default function useApplyCobuying(id: string) {
  const queryClient = useQueryClient(); // returns the current QueryClient instance.

  return useMutation({
    mutationFn: (body: ApplicationReq) => cobuyingService.postApply(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COBUYING.DETAIL(id),
      });
    },
    onError: (error) => {
      console.log(error);
      // 에러처리 및 alert 컴포넌트 띄우기
    },
  });
}
