import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';

export default function InfoSection({ data }: { data: CoBuyingDetail }) {
  const { type } = data;

  const boxStyle =
    'rounded-lg typo-caption bg-default-50 px-3 py-2 *:typo-caption';

  const availableQuantity =
    type === DivideType.attendee
      ? (data.totalQuantity / data.targetAttendeeCount).toLocaleString()
      : data.remainQuantity.toLocaleString();

  return (
    <section className="mt-4">
      <article>
        <p className="w-full typo-tiny text-default-500">{data.ownerName}</p>
        <p className="text-black typo-body line-clamp-2">{data.productName}</p>
        <div className="flex gap-2 mt-2">
          <p className="typo-body-bold">{`${data.totalPrice.toLocaleString()}원`}</p>
          <p className="typo-body-bold">
            {type === DivideType.attendee ? '(인당' : '(개당'}
          </p>
          <p className="typo-body-bold text-default-700">
            {`${
              type === DivideType.attendee
                ? data.perAttendeePrice.toLocaleString()
                : data.unitPrice.toLocaleString()
            }원)`}
          </p>
        </div>
      </article>
      <article
        className={`${boxStyle} mt-4 flex justify-center items-center gap-2`}
      >
        <div className="flex gap-1">
          <p className="text-default-500">구매가능</p>
          <p className="text-primary-500">{`${availableQuantity}개`}</p>
        </div>
        <div className="w-[1px] h-2.5 bg-layout-divider"></div>
        <div className="flex gap-1">
          <p className="text-default-500">전체</p>
          <p className="text-default-700">{`${data.totalQuantity.toLocaleString()}개`}</p>
        </div>
      </article>
      <article
        className={`${boxStyle} mt-4 flex flex-col px-3 py-2 justify-center gap-2`}
      >
        <div className="flex gap-2">
          <p className="text-default-500">시간</p>
          <p className="text-default-700">2025.01.25 08:00PM</p>
        </div>
        <div className="flex gap-2">
          <p className="text-default-500">장소</p>
          <p className="text-default-700">엘레이터 앞</p>
        </div>
      </article>
      {data.memo && (
        <article className="mt-4">
          <p className="typo-caption text-default-500 mb-1.5">안내 메시지</p>

          <section className={`${boxStyle} px-3 py-2 text-default-700`}>
            {data.memo}
          </section>
        </article>
      )}
    </section>
  );
}
