import { CoBuyingDetail } from '@interface/cobuying';

export default function AttendeeInfo({ data }: { data: CoBuyingDetail }) {
  return (
    <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
      <div className="flex justify-between">
        <p className="text-caption">상품 전체수량</p>
        <p className="text-caption">
          {`${data.totalQuantity.toLocaleString()}개`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-caption">인 당 구매량</p>
        <p className="text-caption text-primary-400">
          {`${(data.totalQuantity / data.targetAttendeeCount).toLocaleString()}개`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-caption">모집 인원</p>
        <p className="text-caption text-primary-400">
          {`${data.attendeeCount.toLocaleString()} / ${data.targetAttendeeCount.toLocaleString()} 명`}
        </p>
      </div>
    </div>
  );
} 