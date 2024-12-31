import BoarderedInput from '@/components/Input/BoarderedInput';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function CommonForm() {
  const [devideType, setDevideType] = useState<'quantity' | 'person'>(
    'quantity'
  );

  const selectedTypeClass = 'bg-primary-300 text-white';
  const unselectedTypeClass = 'bg-default-300 text-default-600';

  const handleDevideTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDevideType(e.currentTarget.id as 'quantity' | 'person');
  };
  return (
    <>
      <BoarderedInput
        label="상품 이름"
        placeholder="상품 이름을 입력 (5~100자)"
        regex={/^[a-zA-Z0-9가-힣\s]{5,100}$/}
        isRequired
        regexErrorMessage="상품 이름은 5~100자의 한글, 영문, 숫자만 입력 가능합니다"
      />
      <BoarderedInput
        label="상품 총액"
        placeholder="상품 총 가격 입력"
        type="number"
        isRequired
        defaultValue={0}
      />
      <BoarderedInput
        label="상품 링크 (선택)"
        placeholder="상품 정보관련 링크 입력"
        type="url"
      />
      {/* 추후 모바일용 날짜 인풋 컴포넌트 만들기 */}
      <BoarderedInput
        label="신청 마감일"
        type="date"
        // leftIcon={
        //   <div className="mb-1">
        //     <CalandarIcon width={15} height={15} fill="#a1a1aa" />
        //   </div>
        // }
        min={new Date().toISOString().split('T')[0]}
      />
      <section className="px-3">
        <p className="mb-1 text-caption text-default-600">공구나눔 방식 </p>
        <div className="flex gap-4">
          <button
            id="quantity"
            className={cn(
              'text-center text-body rounded-lg h-[62px] flex-1 shadow-sm',
              devideType === 'quantity'
                ? selectedTypeClass
                : unselectedTypeClass
            )}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleDevideTypeChange(e)
            }
          >
            수량으로 나누기
          </button>
          <button
            id="person"
            className={cn(
              'text-center  text-body rounded-lg h-[62px] flex-1 shadow-sm',
              devideType === 'person' ? selectedTypeClass : unselectedTypeClass
            )}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleDevideTypeChange(e)
            }
          >
            인원으로 나누기
          </button>
        </div>
      </section>
    </>
  );
}

export default CommonForm;
