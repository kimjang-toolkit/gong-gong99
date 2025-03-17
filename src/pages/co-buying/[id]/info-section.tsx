import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import AttendeeInfo from './AttendeeInfo';
import UnitInfo from './UnitInfo';

export default function InfoSection({ data }: { data: CoBuyingDetail }) {
  const { type } = data;

  return (
    <>
      <section className="flex w-full gap-2 mb-4">
        <div className="flex flex-col">
          <p className="typo-tiny text-default-500 max-w-[113px]">
            {data.ownerName}
          </p>
          <p className="text-black typo-body-bold line-clamp-2">
            {data.productName}
          </p>
        </div>
      </section>

      <p className="typo-caption text-default-600 mb-1.5">기본정보</p>
      <section className="flex flex-col gap-3 mb-7">
        <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
          <div className="flex justify-between">
            <p className="typo-caption">상품가격</p>
            <p className="typo-caption">{`${data.totalPrice.toLocaleString()}원`}</p>
          </div>
          <div className="flex justify-between">
            <p className="typo-caption">
              {type === DivideType.attendee ? '인 당 가격' : '개 당 가격'}
            </p>
            <p className="typo-caption text-primary-400">
              {`${
                type === DivideType.attendee
                  ? data.perAttendeePrice.toLocaleString()
                  : data.unitPrice.toLocaleString()
              }원`}
            </p>
          </div>
        </div>
        {type === DivideType.attendee ? (
          <AttendeeInfo data={data} />
        ) : (
          <UnitInfo data={data} />
        )}
      </section>
      {data.memo && (
        <>
          <p className="typo-caption text-default-600 mb-1.5">안내 메시지</p>

          <section className="mb-7">
            <div className="rounded-lg typo-caption bg-zinc-50  p-2.5">
              {data.memo}
            </div>
          </section>
        </>
      )}
    </>
  );
}
