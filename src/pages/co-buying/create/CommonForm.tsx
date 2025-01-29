import Input from '@/components/Input/index';
import useFormStore from '@/stores/coBuyingFormStore';

function CommonForm() {
  const { formData } = useFormStore();
  const { productName, totalPrice, productLink, deadline } = formData;
  return (
    <>
      <Input
        id="productName"
        name="productName"
        label="상품 이름"
        placeholder="상품 이름을 입력해주세요. (5~100자)"
        pattern={'^[a-zA-Z0-9가-힣\\s]{5,100}$'}
        required
        patternErrorMessage="5~100자의 한글, 영문, 숫자만 입력 가능합니다"
        defaultValue={productName}
      />
      <Input
        id="totalPrice"
        name="totalPrice"
        label="상품 총액"
        placeholder="상품 총 가격을 입력해주세요."
        type="number"
        required
        defaultValue={totalPrice}
      />
      <Input
        id="productLink"
        name="productLink"
        label="상품 링크 (선택)"
        placeholder="공구할 상품 구매링크를 입력해주세요."
        pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
        patternErrorMessage="올바른 URL 형식이 아닙니다"
        defaultValue={productLink}
      />
      {/* 추후 모바일용 날짜 인풋 컴포넌트 만들기 */}
      <Input
        id="deadline"
        name="deadline"
        label="신청 마감일"
        type="date"
        defaultValue={deadline}
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
