import LinkIcon from '@/assets/icons/link.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';
import useWebShare from '@/hooks/useWebShare';

interface InfoSectionProps {
  type: 'quantity' | 'person';
}

export default function InfoSection({ type }: InfoSectionProps) {
  const { share } = useWebShare();
  return (
    <>
      <section className="relative flex flex-col w-full pb-3 mb-4">
        <p className="text-caption text-default-500">김철수</p>
        <div className="flex items-center gap-1">
          <p className="text-black text-h3-bold">스파게티 3묶음</p>
          <LinkIcon />
        </div>
        <div className="mt-1">
          <p className="text-caption text-default-600">
            11/25(월) 오후 7시 마감
          </p>
        </div>
        <button className="absolute right-0" onClick={() => share()}>
          <ShareIcon />
        </button>
      </section>

      <p className="text-caption text-default-600 mb-1.5">기본정보</p>
      <section className="flex flex-col gap-3 mb-7">
        <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
          <div className="flex justify-between">
            <p className="text-caption">상품가격</p>
            <p className="text-caption">10,000원</p>
          </div>
          <div className="flex justify-between">
            <p className="text-caption">공구가</p>
            <p className="text-caption text-primary-400">개 당 3,000원</p>
          </div>
        </div>
        {/* type에 따라 바뀔 곳 */}
        <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
          <div className="flex justify-between">
            <p className="text-caption">상품 전체수량</p>
            <p className="text-caption">30개</p>
          </div>
          <div className="flex justify-between">
            <p className="text-caption">
              {type === 'person' ? '인 당 구매량' : '남은 수량'}
            </p>
            <p className="text-caption text-primary-400">10개</p>
          </div>
          {type === 'person' && (
            <div className="flex justify-between">
              <p className="text-caption">모집 인원</p>
              <p className="text-caption text-primary-400">8 / 10 명</p>
            </div>
          )}
        </div>
      </section>
      <p className="text-caption text-default-500 mb-1.5">안내 메시지</p>
      <section className="mb-7">
        <div className="rounded-lg text-caption bg-zinc-50  p-2.5">
          알리는말 예시
        </div>
      </section>
    </>
  );
}
