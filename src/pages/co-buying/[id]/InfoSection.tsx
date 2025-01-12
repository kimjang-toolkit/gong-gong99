import LinkIcon from "@/assets/icons/link.svg?react";
import ShareIcon from "@/assets/icons/share.svg?react";

export default function InfoSection() {
  const type = "quantity";
  return (
    <>
      <section className="w-full relative flex flex-col border-b-[0.5px] border-zinc-100 pb-3">
        <p className="text-tiny text-default-600">김철수</p>
        <div className="flex items-center gap-1">
          <p className="text-body-bold text-black">스파게티 3묶음</p>
          <LinkIcon />
        </div>
        <div className="mt-1">
          <p className="text-tiny text-default-600">11/25(월) 오후 7시 마감</p>
        </div>
        <ShareIcon className="absolute right-0" />
      </section>

      <p className="text-tiny-bold mb-1.5">기본정보</p>
      <section className="flex flex-col gap-3 mb-3">
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
            <p className="text-caption">남은 수량</p>
            <p className="text-caption text-primary-400">10개</p>
          </div>
        </div>
      </section>
      <p className="text-tiny-bold mb-1.5">알리는 말</p>
      <section>
        <div className="rounded-lg bg-zinc-50  p-2.5">알리는말 예시 </div>
      </section>
    </>
  );
}
