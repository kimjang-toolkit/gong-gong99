import { AttendeeCoBuyingDetail } from '@interface/cobuying';

export default function AttendeeCoBuyingCard({ data }: { data: AttendeeCoBuyingDetail }) {
  return (
    <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
      <div className="flex justify-between">
        <p className="text-caption">상품명</p>
        <p className="text-caption">{data.productName}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-caption">인 당 가격</p>
        <p className="text-caption text-primary-400">
          {`${data.perAttendeePrice.toLocaleString()}원`}
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