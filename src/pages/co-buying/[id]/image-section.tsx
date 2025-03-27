import defaultImage from '@/assets/img/default-img.png';
import useWebShare from '@/hooks/useWebShare';
import { CoBuyingDetail } from '@interface/cobuying';
import KakaoShareButton from '@/components/KakaoShareButton';
import ShareIcon from '@/assets/icons/link.svg?react';
import { DivideType } from '@domain/cobuying';

export default function ImageSection({ data }: { data: CoBuyingDetail }) {
  const { type } = data;
  const { share } = useWebShare();

  return (
    <section className="relative">
      <img
        src={data.imageUrl ?? defaultImage}
        alt="상품이미지"
        className="w-full rounded-lg aspect-square"
      />
      <article className="absolute bottom-0 flex items-center justify-between w-full gap-2 p-2">
        <div
          className={`bg-black/20 backdrop-blur-[5px] items-center gap-2 *:text-white *:typo-caption rounded-full px-4 py-2.5 h-10 ${
            data.productLink ? 'flex' : 'invisible'
          }`}
        >
          <p>상품 정보:</p>
          <a
            href={data.productLink}
            target="_blank" // 새 탭에서 열기
            className="underline truncate max-w-[128px] typo-caption text-default-500"
          >
            {data.productLink}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-2.5 py-2.5 rounded-full  w-8 h-8 bg-primary-50 active:brightness-90"
            onClick={() => share(`${data.productName} 공구해요`)}
          >
            <ShareIcon className="pb-1 pr-1" />
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
        </div>
      </article>
    </section>
  );
}
