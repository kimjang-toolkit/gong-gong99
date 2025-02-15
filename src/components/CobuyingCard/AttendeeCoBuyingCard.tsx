import { AttendeeCoBuyingSummary } from '@interface/cobuying';

const AttendeeCobuyingCard = ({ item }: { item: AttendeeCoBuyingSummary }) => {
  const {
    productName,
    deadline,
    totalPrice,
    attendeeCount,
    targetAttendeeCount,
    perAttendeePrice,
  } = item;

  const perPrice = `인 당 ${perAttendeePrice.toLocaleString()}원`;

  return (
    <article className="flex flex-col py-4 bg-white active:brightness-95">
      <p className="font-medium text-black">{productName}</p>
      <p className="typo-tiny text-default-500">{deadline} 마감</p>
      <div className="flex items-center">
        <p className="mr-1 typo-body-bold">{`${totalPrice.toLocaleString()}원`}</p>
        <p className="typo-caption text-default-700">{`(${perPrice})`}</p>
      </div>
      <div className="flex *:typo-tiny *:text-default-600 [&>p:nth-child(2)]:text-primary-500 self-end mt-1">
        <p className="mr-1">신청 인원</p>
        <p>{attendeeCount}</p>
        <p>{`/${targetAttendeeCount}명`}</p>
      </div>
    </article>
  );
};

export default AttendeeCobuyingCard;
