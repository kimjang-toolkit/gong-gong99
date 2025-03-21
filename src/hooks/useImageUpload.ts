import { useState } from 'react';

type ImageFile = {
  imageFile: File; // 업로드할 이미지 파일
  previewImage: string; // 미리보기 이미지
};

export function useImageUpload() {
  const [image, setImage] = useState<ImageFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage({ imageFile: file, previewImage: URL.createObjectURL(file) });
    }
  };

  const handleUploadImage = async (): Promise<void> => {
    if (!image) return;
    const formData = new FormData();
    formData.append('image', image.imageFile);
    // try{
    setIsLoading(true);
    //   const response = await axios.post('/api/upload', formData);
    //   console.log(response);
    // } catch (error) {
    //   console.error('이미지 업로드 실패', error);
    // }
    setIsLoading(false);
  };

  return {
    image,
    handleImageChange,
    handleUploadImage,
    isLoading,
  };
}
