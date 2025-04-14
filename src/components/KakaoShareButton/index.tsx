import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface KakaoShareButtonProps {
  title: string;
  endpoint: string;
  description: string;
  productImg: string;
}

export default function KakaoShareButton({
  title,
  endpoint,
  description,
  productImg,
}: KakaoShareButtonProps) {
  const handleShare = () => {
    window.Kakao.Share.sendCustom({
      templateId: 116944,
      templateArgs: {
        title,
        description: description,
        endpoint: endpoint,
        productImg: productImg,
      },
    });
  };
  return (
    <button onClick={handleShare} className="w-8 h-8 active:brightness-90 ">
      <KakaoIcon className="w-full h-full" />
    </button>
  );
}
