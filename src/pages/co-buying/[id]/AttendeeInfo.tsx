import { AttendeeCoBuyingDetail } from '@interface/cobuying';

export default function AttendeeInfo({
  data,
}: {
  data: AttendeeCoBuyingDetail;
}) {
  return (
    <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
      <div className="flex justify-between">
        <p className="typo-caption">상품 전체수량</p>
        <p className="typo-caption">
          {`${data.totalQuantity.toLocaleString()}개`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="typo-caption">인 당 구매량</p>
        <p className="typo-caption text-primary-400">
          {`${(data.totalQuantity / data.targetAttendeeCount).toLocaleString()}개`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="typo-caption">모집 인원</p>
        <p className="typo-caption text-primary-400">
          {`${data.attendeeCount.toLocaleString()} / ${data.targetAttendeeCount.toLocaleString()} 명`}
        </p>
      </div>
    </div>
  );
}
