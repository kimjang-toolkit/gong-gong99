import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface KakaoShareButtonProps {
  title: string;
  endpoint: string;
  description: string;
}

export default function KakaoShareButton({
  title,
  endpoint,
  description,
}: KakaoShareButtonProps) {
  const handleShare = () => {
    window.Kakao.Share.sendCustom({
      templateId: 116944,
      templateArgs: {
        title,
        description: description,
        endpoint: endpoint,
      },
    });
  };
  return (
    <button onClick={handleShare} className=" active:brightness-90">
      <KakaoIcon />
    </button>
  );
}
