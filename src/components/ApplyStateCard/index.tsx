import { ItemOptionBase } from '@domain/product';
import { Attendee } from '@domain/user';

interface ApplyStateCardProps {
  attendeeData: Attendee;
  showCheckbox?: boolean;
}

export default function ApplyStateCard({
  attendeeData,
  showCheckbox = false,
}: ApplyStateCardProps) {
  // 총수량
  const totalQuantity = attendeeData.attendeeOptions?.reduce(
    (acc, option) => acc + option.quantity,
    0
  );
  return (
    <section className="flex flex-col p-4 rounded-lg bg-default-200">
      <header className="flex items-center justify-between">
        <h3 className="text-default-800 typo-caption">
          {attendeeData.attendeeName}
        </h3>
        <input
          type="checkbox"
          checked={attendeeData.attendeeSharingCheckYN}
          onChange={() => {}}
          className={`${showCheckbox ? 'block' : 'hidden'}`}
        />
      </header>
      <div className="flex flex-col gap-2">
        {attendeeData.attendeeOptions?.map((option) => (
          <OptionItem
            key={option.optionId}
            option={option}
            perPrice={attendeeData.attendeePrice / totalQuantity!}
          />
        ))}
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
    <div className="flex items-center gap-2">
      <p className="text-default-800 typo-tiny ">{option.name}</p>
      <p className="text-default-800 typo-tiny">{option.quantity}개</p>
      <p className="text-default-800 typo-tiny">
        {perPrice.toLocaleString()}원OptionItem
      </p>
    </div>
  );
}
