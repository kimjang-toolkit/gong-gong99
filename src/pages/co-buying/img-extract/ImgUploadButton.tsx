import BottomButton from '@/components/Button/BottomButton';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import exampleImage from '@/assets/img/extract-img.png';

export default function ImgUploadButton() {
  const navigate = useNavigate();
  const { image, handleImageChange, handleUploadImageAndExtract, isLoading } =
    useImageUpload();
  const imgInputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectImage = () => {
    imgInputRef.current?.click();
  };

  const handleSubmit = async () => {
    const response = await handleUploadImageAndExtract();

    if (response) {
      navigate('/co-buying/create', {
        state: {
          extractedProduct: response,
        },
      });
    }
  };

  return (
    <>
      <section className="relative flex flex-col gap-2 mt-4 ">
        <button
          type="button"
          className="w-full rounded-lg bg-primary-50 border border-primary-400 h-[383px]"
          onClick={handleSelectImage}
        >
          {image?.previewImage ? (
            <img
              className=" object-cover aspect-[3/4]"
              src={image.previewImage}
              alt="이미지 미리보기"
            />
          ) : (
            <div className="flex flex-col items-center ">
              <img
                src={exampleImage}
                alt="상품 캡쳐 이미지 예시"
                className="max-w-[198px]"
              />
              <div className="mt-2 text-caption text-primary-800">
                <p>상품 이미지, 상품 이름, 상품 가격이</p>
                <p>포함된 캡쳐화면을 업로드해주세요</p>
              </div>
            </div>
          )}
        </button>
        <input
          type="file"
          ref={imgInputRef}
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
        {!isLoading && (
          <div className="absolute w-full rounded-lg pointer-events-none h-1/4 bg-primary-200/20 backdrop-blur-sm animate-scan" />
        )}
      </section>
      <BottomButton
        type="button"
        onClick={handleSubmit}
        label={isLoading ? '분석 중...' : '다음'}
        disabled={isLoading}
      />
    </>
  );
}
