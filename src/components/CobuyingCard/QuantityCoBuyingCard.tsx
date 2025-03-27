import { QuantityCoBuyingSummary } from '@interface/cobuying';

const QuantityCobuyingCard = ({ item }: { item: QuantityCoBuyingSummary }) => {
  const {
    productName,
    totalPrice,
    totalQuantity,
    totalAttendeeQuantity,
    unitPrice,
  } = item;

  const perPrice = `개 당 ${unitPrice.toLocaleString()}원`;

  return (
    <article className="flex flex-col w-full bg-white active:brightness-95">
      <p className="font-medium text-black">{productName}</p>
      <div className="flex items-center">
        <p className="mr-1 typo-body-bold">{`${totalPrice.toLocaleString()}원`}</p>
        <p className="typo-caption text-default-700">{`(${perPrice})`}</p>
      </div>
      <div className="flex *:typo-tiny *:text-default-600 [&>p:nth-child(2)]:text-primary-500 self-end mt-7">
        <p className="mr-1">신청 수량</p>
        <p>{totalAttendeeQuantity}</p>
        <p>{`/${totalQuantity}개`}</p>
      </div>
    </article>
  );
};
export default QuantityCobuyingCard;
