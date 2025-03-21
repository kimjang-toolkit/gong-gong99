import BottomButton from '@/components/Button/BottomButton';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useRef } from 'react';

export default function ImgUploadButton() {
  const { image, handleImageChange, handleUploadImage, isLoading } =
    useImageUpload();
  const imgInputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectImage = () => {
    imgInputRef.current?.click();
  };

  const handleSubmit = () => {
    handleUploadImage();
    // 이미지 업로드 성공 시 생성페이지로 이동
  };

  return (
    <>
      <section className="flex flex-col gap-2">
        <button
          type="button"
          className="w-full h-[100px] rounded-lg bg-gray-100"
          onClick={handleSelectImage}
        >
          {image?.previewImage ? (
            <img src={image.previewImage} alt="이미지 미리보기" />
          ) : (
            <p>이미지를 선택해주세요.</p>
          )}
        </button>
        <input
          type="file"
          ref={imgInputRef}
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </section>
      <BottomButton
        type="button"
        onClick={handleSubmit}
        label={isLoading ? '업로드중...' : '다음'}
        disabled={isLoading}
      />
    </>
  );
}
