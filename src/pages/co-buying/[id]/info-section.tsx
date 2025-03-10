import ShareIcon from '@/assets/icons/link.svg?react';
import useWebShare from '@/hooks/useWebShare';
import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import AttendeeInfo from './AttendeeInfo';
import UnitInfo from './UnitInfo';
import KakaoShareButton from '@/components/KakaoShareButton';

export default function InfoSection({ data }: { data: CoBuyingDetail }) {
  const { share } = useWebShare();
  const { type } = data;

  return (
    <>
      <section className="flex flex-col w-full pb-3 my-4">
        <p className="typo-caption text-default-500">{data.ownerName}</p>
        <p className="text-black typo-h3-bold">{data.productName}</p>
        <div className="mt-1">
          <p className="typo-caption text-default-600">
            {`${data.deadline} 마감`}
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
          {data.productLink && (
            <div className="flex justify-between">
              <p className="typo-caption">자세히 보기</p>
              <a
                href={data.productLink}
                target="_blank" // 새 탭에서 열기
                className="underline typo-caption text-default-500 max-w-[178px] truncate"
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
      <section className="flex justify-end gap-2.5">
        <button
          className="px-2.5 py-2.5 rounded-full bg-primary-50 active:brightness-90"
          onClick={() => share(`${data.productName} 공구해요`)}
        >
          <ShareIcon className="w-4 h-4 pl-[1px]" />
        </button>
        <KakaoShareButton
          title={data.productName}
          endpoint={`co-buying/${data.id}?ownerName=${data.ownerName}`}
          description={`${data.ownerName}님이 올리신 공구! ${
            type === DivideType.attendee
              ? `인당 ${data.perAttendeePrice.toLocaleString()}원`
              : `개당 ${data.unitPrice.toLocaleString()}원`
          } !!`}
        />
      </section>
    </>
  );
}
