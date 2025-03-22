import { useExtractProduct } from '@/api/mutations/useExtractProduct';
import { useState } from 'react';
import { Buffer } from 'buffer';

type ImageFile = {
  imageFile: File; // 업로드할 이미지 파일
  previewImage: string; // 미리보기 이미지
};

export function useImageUpload() {
  const { mutate } = useExtractProduct();
  const [image, setImage] = useState<ImageFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage({ imageFile: file, previewImage: URL.createObjectURL(file) });
    }
  };

  const handleUploadImageAndExtract = async (): Promise<void> => {
    if (!image) return;
    setIsLoading(true);

    // File을 ArrayBuffer로 변환
    const arrayBuffer = await image.imageFile.arrayBuffer();
    // base64로 인코딩
    const buffer = Buffer.from(arrayBuffer);
    const imgBase64 = buffer.toString('base64');

    mutate(
      { imgType: image.imageFile.type, imgBase64 },
      {
        onSuccess: (response) => {
          setIsLoading(false);
          return response;
        },
      }
    );
  };

  return {
    image,
    handleImageChange,
    handleUploadImageAndExtract,
    isLoading,
  };
}
