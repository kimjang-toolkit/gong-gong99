import { useMutation } from '@tanstack/react-query';
import { cobuyingService } from '@/services/cobuying';
import useAuthStore from '@/stores/authStore';
import useAlertStore from '@/stores/alertStore';
import { UserAuthReq } from '@interface/auth';

export default function usePwdCobuying(id: string) {
  const { setToken } = useAuthStore.getState();
  const { showAlert } = useAlertStore();

  return useMutation({
    mutationFn: async (body: UserAuthReq) => {
      const result = await cobuyingService.pwdCheck(id, body);

      if (result.success) {
        setToken(result.token.split(' ')[1]); // ✅ 성공 시 토큰 저장
        return true; // 인증 성공 여부
      } else {
        showAlert({
          status: 'fail',
          label: '비밀번호가 일치하지 않아요.',
        });
      }
    },
    onError: (error) => {
      console.error('🚨 비밀번호 요청 실패:', error);
    },
  });
}
