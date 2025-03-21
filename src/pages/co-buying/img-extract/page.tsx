import TitleHeader from '@/components/Header/TitleHeader';
import HeaderLayout from '@/layouts/HeaderLayout';
import ImgUploadButton from '@/pages/co-buying/img-extract/ImgUploadButton';

export default function ImgExtractPage() {
  // 업로드할 이미지 훅

  return (
    <HeaderLayout>
      <TitleHeader />
      <>
        <section className="flex flex-col w-full gap-1 mb-4 text-black h-[90px] justify-center">
          <p className="typo-h2">공구글 자동 작성을 위해</p>
          <div className="flex items-center">
            <p className="typo-h2-bold">상품 캡쳐 이미지</p>
            <p className="typo-h2">를 올려주세요.</p>
          </div>
        </section>
        <ImgUploadButton />
      </>
    </HeaderLayout>
  );
}
