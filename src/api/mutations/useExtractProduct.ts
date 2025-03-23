import { useMutation } from '@tanstack/react-query';
import { cobuyingService } from '@/api/services/cobuying';
import useAlertStore from '@/stores/alertStore';

export function useExtractProduct() {
  const { showAlert } = useAlertStore();
  return useMutation({
    mutationFn: cobuyingService.postImgExtract,
    onError: (error) => {
      showAlert({
        status: 'fail',
        label: '상품 분석에 실패했어요.',
      });
      console.error('상품 이미지 분석 실패', error);
    },
  });
}
