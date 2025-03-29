interface AttendeeCalcBoxProps {
  totalPrice?: number;
  totalQuantity?: number;
  targetAttendeeCount?: number;
}
export default function AttendeeCalcBox({
  totalQuantity,
  totalPrice,
  targetAttendeeCount,
}: AttendeeCalcBoxProps) {
  let perQuantity = "-";
  let perPrice = "-";
  if (totalPrice && totalQuantity && targetAttendeeCount) {
    if (totalQuantity % targetAttendeeCount !== 0) {
      perQuantity = (totalQuantity / targetAttendeeCount)
        .toFixed(1)
        .toLocaleString();
    } else {
      perQuantity = (totalQuantity / targetAttendeeCount).toLocaleString();
    }

    if (totalPrice % targetAttendeeCount !== 0) {
      perPrice = (totalPrice / targetAttendeeCount).toFixed(1).toLocaleString();
    } else {
      perPrice = (totalPrice / targetAttendeeCount).toLocaleString();
    }
  }

  return (
    <section className="flex items-center w-full gap-2">
      <div className="flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[130px] flex-1 bg-zinc-50">
        {/* 인당 구매량 */}
        <p className="typo-tiny text-default-600">인당 구매수량</p>
        <p className="typo-tiny text-primary-600">{perQuantity}</p>
      </div>
      <div className="flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[150px] flex-1 bg-zinc-50">
        {/* 인당 부담액 */}
        <p className="typo-tiny text-default-600 min-w-[90px]">인당 부담액</p>
        <p className="typo-tiny text-primary-600">{perPrice}</p>
      </div>
    </section>
  );
}
