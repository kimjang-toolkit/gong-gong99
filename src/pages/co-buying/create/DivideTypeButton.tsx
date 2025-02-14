import { cn } from '@/lib/utils';
import { DivideType } from '@domain/cobuying';

interface DivideTypeSectionProps {
  type: DivideType;
  setType: (type: DivideType) => void;
}

export default function DivideTypeSection({
  type,
  setType,
}: DivideTypeSectionProps) {
  // 공구방식 선택에 따른 CSS
  const selectedTypeClass = 'bg-primary-300 text-white';
  const unselectedTypeClass = 'bg-default-300 text-default-600';

  const divideTypeDescription: Record<DivideType, string> = {
    [DivideType.quantity]: '참여자들이 필요한 수량만큼 선택할 수 있도록 해요.',
    [DivideType.attendee]:
      '참여인원 수대로 금액 및 상품수량을 균등하게 나눠요.',
  };

  const handleDivideTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType(e.currentTarget.id as DivideType);
  };
  return (
    <section>
      <p className="pl-0.5 mb-1 typo-caption text-default-600">공구나눔 방식</p>
      <div className="flex gap-4">
        <button
          id={DivideType.quantity}
          className={cn(
            'text-center typo-body rounded-lg h-[62px] flex-1 shadow-sm',
            type === DivideType.quantity
              ? selectedTypeClass
              : unselectedTypeClass
          )}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleDivideTypeChange(e)
          }
        >
          수량으로 나누기
        </button>
        <button
          id={DivideType.attendee}
          className={cn(
            'text-center  typo-body rounded-lg h-[62px] flex-1 shadow-sm',
            type === DivideType.attendee
              ? selectedTypeClass
              : unselectedTypeClass
          )}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleDivideTypeChange(e)
          }
        >
          인원으로 나누기
        </button>
      </div>
      <p className="mt-1 typo-tiny text-default-500">
        * {divideTypeDescription[type]}
      </p>
    </section>
  );
}
