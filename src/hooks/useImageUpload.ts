import { useExtractProduct } from '@/api/mutations/useExtractProduct';
import { useState } from 'react';
import { Buffer } from 'buffer';

type ImageFile = {
  imageFile: File; // 업로드할 이미지 파일
  previewImage: string; // 미리보기 이미지
};

export function useImageUpload() {
  const { mutateAsync } = useExtractProduct();
  const [image, setImage] = useState<ImageFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage({ imageFile: file, previewImage: URL.createObjectURL(file) });
    }
  };

  // 이미지 업로드 및 추출 요청
  const handleUploadImageAndExtract = async () => {
    if (!image) return null;
    setIsLoading(true);

    try {
      const arrayBuffer = await image.imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const imgBase64 = buffer.toString('base64');

      const response = await mutateAsync({
        imgType: image.imageFile.type,
        imgBase64,
      });

      return response;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    image,
    handleImageChange,
    handleUploadImageAndExtract,
    isLoading,
  };
}
