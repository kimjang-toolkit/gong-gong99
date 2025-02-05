import { useMutation } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import useAlertStore from '@/stores/alertStore';
import { UserAuthReq } from '@interface/auth';

// 공구 신청
export default function usePwdCobuying(id: string) {
  const { showAlert } = useAlertStore();

  return useMutation({
    mutationFn: (body: UserAuthReq) => cobuyingService.pwdCheck(id, body),
    onError: () => {
      showAlert({
        status: 'fail',
        label: '비밀번호 인증에 실패했어요.',
      });
    },
  });
}
