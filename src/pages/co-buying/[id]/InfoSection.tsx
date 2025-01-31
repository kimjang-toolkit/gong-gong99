import ShareIcon from '@/assets/icons/share.svg?react';
import useWebShare from '@/hooks/useWebShare';
import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import AttendeeInfo from './AttendeeInfo';
import UnitInfo from './UnitInfo';

export default function InfoSection({ data }: { data: CoBuyingDetail }) {
  const { share } = useWebShare();
  const { type } = data;

  return (
    <>
      <section className="relative flex flex-col w-full pb-3 mb-4 ">
        <p className="text-caption text-default-500">{data.ownerName}</p>
        <p className="text-black text-h3-bold">{data.productName}</p>
        <div className="mt-1">
          <p className="text-caption text-default-600">
            {`${data.deadline} 마감`}
          </p>
        </div>
        <button
          className="absolute right-0"
          onClick={() =>
            share(
              `${data.productName} 공구해요`,
              `${data.productName} 공구해요`
            )
          }
        >
          <ShareIcon />
        </button>
      </section>

      <p className="text-caption text-default-600 mb-1.5">기본정보</p>
      <section className="flex flex-col gap-3 mb-7">
        <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
          <div className="flex justify-between">
            <p className="text-caption">상품가격</p>
            <p className="text-caption">{`${data.totalPrice.toLocaleString()}원`}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-caption">
              {type === DivideType.attendee ? '인 당 가격' : '개 당 가격'}
            </p>
            <p className="text-caption text-primary-400">
              {`${
                type === DivideType.attendee
                  ? data.perAttendeePrice.toLocaleString()
                  : data.unitPrice.toLocaleString()
              }원`}
            </p>
          </div>
          {data.productLink && (
            <div className="flex justify-between">
              <p className="text-caption">자세히 보기</p>
              <a
                href={data.productLink}
                target="_blank" // 새 탭에서 열기
                className="underline text-caption text-default-500 max-w-[178px] truncate"
              >
                {data.productLink}
              </a>
            </div>
          )}
        </div>
        {type === DivideType.attendee ? (
          <AttendeeInfo data={data} />
        ) : (
          <UnitInfo data={data} />
        )}
      </section>
      <p className="text-caption text-default-600 mb-1.5">안내 메시지</p>
      <section className="mb-7">
        <div className="rounded-lg text-caption bg-zinc-50  p-2.5">
          {data.memo}
        </div>
      </section>
    </>
  );
}
