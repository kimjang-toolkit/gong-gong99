import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';
import { DivideType } from '@domain/cobuying';
import {
  AttendeeCoBuyingSummary,
  QuantityCoBuyingSummary,
} from 'common-type/src/interface/cobuying';

export default function CobuyingCard({
  item,
}: {
  item: AttendeeCoBuyingSummary | QuantityCoBuyingSummary;
}) {
  const { productName, deadline, totalPrice, totalQuantity, type } = item;

  const { attendeeCount, targetAttendeeCount, perAttendeePrice } =
    item as AttendeeCoBuyingSummary;
  const { totalAttendeeQuantity, unitPrice } = item as QuantityCoBuyingSummary;

  const perPrice = () => {
    if (type === DivideType.attendee) {
      return `인 당 ${formatNumberWithCommas(perAttendeePrice)}원`;
    }
    if (type === DivideType.quantity) {
      return `개 당 ${formatNumberWithCommas(unitPrice)}원`;
    }
  };

  return (
    <article className="flex flex-col py-4 bg-white active:brightness-95">
      <p className="font-medium text-black">{productName}</p>
      <p className="text-tiny text-default-500">{deadline} 마감</p>
      <div className="flex items-center">
        <p className="mr-1 text-body-bold">{`${formatNumberWithCommas(totalPrice)}원`}</p>
        <p className="text-caption text-default-700">{`(${perPrice()})`}</p>
      </div>
      <div className="flex *:text-tiny *:text-default-600 [&>p:nth-child(2)]:text-primary-500 self-end mt-1">
        {type === DivideType.attendee && (
          <>
            <p className="mr-1">신청 인원</p>
            <p>{attendeeCount}</p>
            <p>{`/${targetAttendeeCount}명`}</p>
          </>
        )}
        {type === DivideType.quantity && (
          <>
            <p className="mr-1">신청 수량</p>
            <p>{totalAttendeeQuantity}</p>
            <p>{`/${totalQuantity}개`}</p>
          </>
        )}
      </div>
    </article>
  );
}
