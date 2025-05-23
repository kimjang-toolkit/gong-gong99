import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import { useNavigate } from 'react-router-dom';

interface TitleHeaderProps {
  title?: string;
  onBackPress?: () => void;
}

function TitleHeader({ title, onBackPress }: TitleHeaderProps) {
  const navigate = useNavigate();
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="h-[56px] py-4 flex items-center pl-4 text-black typo-h3-bold pr-[34px] w-full bg-white">
      <ArrowLeft
        stroke="#262626"
        width={18}
        height={18}
        onClick={handleBackPress}
      />
      <p className="w-full text-center">{title}</p>
    </div>
  );
}

export default TitleHeader;
