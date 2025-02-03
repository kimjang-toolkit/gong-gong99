import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface KakaoShareButtonProps {
  title: string;
  url: string;
  description: string;
}

export default function KakaoShareButton({
  title,
  url,
  description,
}: KakaoShareButtonProps) {
  const handleShare = () => {
    window.Kakao.Share.sendCustom({
      templateId: 116944,
      templateArgs: {
        title,
        description: description,
        url: url,
      },
    });
  };
  return (
    <button onClick={handleShare} className=" active:brightness-90">
      <KakaoIcon />
    </button>
  );
}
