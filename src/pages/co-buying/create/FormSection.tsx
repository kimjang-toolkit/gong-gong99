import BoarderedInput from '@/components/Input/BoarderedInput';

export default function FormSection() {
  return (
    <form className="flex flex-col gap-4">
      {/* 1.상품 기본정보 폼 */}
      <BoarderedInput
        label="상품 이름"
        placeholder="상품 이름을 입력해주세요."
        regex={/^[a-zA-Z0-9가-힣\s]{0,199}$/}
        regexErrorMessage="특수문자 입력이 불가하며, 200자 미만이어야 합니다."
      />
      {/* 2. 공구 나눔방식 선택 */}
      {/* 3. 공구 나눔방식 선택에 따라 수량으로 나누기 폼/ 인원으로 나누기 폼 */}
    </form>
  );
}
