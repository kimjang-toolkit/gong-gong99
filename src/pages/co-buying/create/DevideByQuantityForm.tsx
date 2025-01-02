import BoarderedInput from '@/components/Input/BoarderedInput';
import { useRef } from 'react';

export default function DevideByQuantityForm() {
  const totalQuantityRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <BoarderedInput
        ref={totalQuantityRef}
        id="totalQuantity"
        label="상품 총 수량"
        type="number"
        isRequired
        defaultValue={0}
      />
      <BoarderedInput
        id="ownerQuantity"
        label="내 구매 수량"
        type="number"
        isRequired
        defaultValue={0}
        regex
      />
    </>
  );
}
