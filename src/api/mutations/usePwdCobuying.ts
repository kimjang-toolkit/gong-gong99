import { useMutation } from '@tanstack/react-query';
import { cobuyingService } from '@/api/services/cobuying';
import useAuthStore from '@/stores/authStore';
import useAlertStore from '@/stores/alertStore';
import { UserAuthReq } from '@interface/auth';
import { AxiosError } from 'axios';

export default function usePwdCobuying(id: string) {
  const { setToken, setOwnerName } = useAuthStore.getState();
  const { showAlert } = useAlertStore();

  return useMutation({
    mutationFn: (body: UserAuthReq) => cobuyingService.pwdCheck(id, body),
    onSuccess: (data) => {
      setToken(data.headers['authorization'].split(' ')[1]); // ✅ 성공 시 토큰 저장
      setOwnerName(data.data.ownerName);
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        showAlert({
          status: 'fail',
          label: '비밀번호가 일치하지 않아요.',
        });
      }
      console.error('🚨 비밀번호 요청 실패:', error);
    },
  });
}
