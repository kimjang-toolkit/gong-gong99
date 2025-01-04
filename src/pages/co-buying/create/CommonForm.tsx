/* eslint-disable @typescript-eslint/no-unused-vars */
import BoarderedInput from '@/components/Input/BoarderedInput';
import { FormContext } from '@/pages/co-buying/create';
import { useContext } from 'react';

function CommonForm() {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <>
      <BoarderedInput
        id="productName"
        label="상품 이름"
        placeholder="상품 이름을 입력해주세요. (5~100자)"
        pattern={'^[a-zA-Z0-9가-힣\\s]{5,100}$'}
        required
        patternErrorMessage="상품 이름은 5~100자의 한글, 영문, 숫자만 입력 가능합니다"
      />
      <BoarderedInput
        id="totalPrice"
        label="상품 총액"
        placeholder="상품 총 가격을 입력해주세요."
        type="number"
        required
      />
      <BoarderedInput
        id="productLink"
        label="상품 링크 (선택)"
        placeholder="공구할 상품 구매링크를 입력해주세요."
        type="url"
      />
      {/* 추후 모바일용 날짜 인풋 컴포넌트 만들기 */}
      <BoarderedInput
        id="deadline"
        label="신청 마감일"
        type="date"
        // leftIcon={
        //   <div className="mb-1">
        //     <CalandarIcon width={15} height={15} fill="#a1a1aa" />
        //   </div>
        // }
        min={new Date().toISOString().split('T')[0]}
      />
    </>
  );
}

export default CommonForm;
