import { cn } from '@/lib/utils';
import { FormContext } from '@/pages/co-buying/create';
import { useContext } from 'react';

export default function DevideTypeSection() {
  const { devideType, setDevideType } = useContext(FormContext) as {
    devideType: 'quantity' | 'person';
    setDevideType: (devideType: 'quantity' | 'person') => void;
  };

  // 공구방식 선택에 따른 CSS
  const selectedTypeClass = 'bg-primary-300 text-white';
  const unselectedTypeClass = 'bg-default-300 text-default-600';

  const devideTypeDescription = {
    quantity: '참여자들이 필요한 수량만큼 선택할 수 있도록 해요.',
    person: '참여인원 수대로 금액 및 상품수량을 균등하게 나눠요.',
  };

  const handleDevideTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDevideType(e.currentTarget.id as 'quantity' | 'person');
  };
  return (
    <section>
      <p className="pl-0.5 mb-1 text-caption text-default-600">공구나눔 방식</p>
      <div className="flex gap-4">
        <button
          id="quantity"
          className={cn(
            'text-center text-body rounded-lg h-[62px] flex-1 shadow-sm',
            devideType === 'quantity' ? selectedTypeClass : unselectedTypeClass
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
      <p className="mt-1 text-tiny text-default-500">
        * {devideTypeDescription[devideType]}
      </p>
    </section>
  );
}
