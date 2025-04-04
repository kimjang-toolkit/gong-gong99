import useSharingCheck from '@/api/mutations/useSharingCheck';
import { cn } from '@/lib/utils';
import { ItemOptionBase } from '@domain/product';
import { Attendee } from '@domain/user';
import { useParams, useSearchParams } from 'react-router-dom';

/**
 * 나눔 현황 카드
 */
interface ApplyStateCardProps {
  attendeeData: Attendee;
  showCheckbox?: boolean;
}

export default function ApplyStateCard({
  attendeeData,
  showCheckbox = false,
}: ApplyStateCardProps) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const ownerName = searchParams.get('ownerName')!;

  const { mutate } = useSharingCheck(id!, ownerName);
  const totalQuantity = attendeeData.attendeeOptions?.reduce(
    (acc, option) => acc + option.quantity,
    0
  );

  const handleCheckClick = () => {
    mutate({
      sharingCheckYN: !attendeeData.attendeeSharingCheckYN,
      attendeeName: attendeeData.attendeeName,
    });
  };
  return (
    <section
      className={cn(
        'flex flex-col p-4 rounded-lg border border-default-200',
        attendeeData.attendeeSharingCheckYN
          ? 'bg-default-200'
          : 'bg-transparent'
      )}
    >
      <header className="flex items-center justify-between">
        <h3 className="font-medium text-default-800 typo-caption">
          {attendeeData.attendeeName}
        </h3>
        <input
          type="checkbox"
          checked={attendeeData.attendeeSharingCheckYN}
          onChange={handleCheckClick}
          className={`relative appearance-none w-4 h-4 border-default-300 border-2 rounded-full
              transition-all duration-300
              checked:bg-default-300
              checked:after:content-["✔"]
              checked:after:text-white 
              checked:after:text-[10px]
              checked:after:absolute
              checked:after:top-[-1px]
              checked:after:left-[2px]
              after:opacity-0
              after:scale-0
              checked:after:opacity-100
              checked:after:scale-100
              checked:after:transition-all
              checked:after:duration-300
              ${showCheckbox ? 'block' : 'hidden'}`}
        />
      </header>
      <div className="flex flex-col gap-2 mt-4">
        {attendeeData.attendeeOptions?.map((option) => (
          <OptionItem
            key={option.optionId}
            option={option}
            perPrice={attendeeData.attendeePrice / totalQuantity!}
          />
        ))}
        <div className="flex justify-between *:font-medium *:typo-caption *:text-default-800">
          <p>총 결제금액</p>
          <p>{attendeeData.attendeePrice}원</p>
        </div>
      </div>
    </section>
  );
}

function OptionItem({
  option,
  perPrice,
}: {
  option: ItemOptionBase;
  perPrice: number;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="flex-1 text-default-800 typo-tiny ">{option.name}</p>
      <p className="w-10 text-right text-default-800 typo-tiny">
        {option.quantity}
      </p>
      <p className="w-[98px] text-right text-default-800 typo-tiny">
        {perPrice.toLocaleString()}원
      </p>
    </div>
  );
}
