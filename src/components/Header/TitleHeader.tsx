import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import { useNavigate } from 'react-router-dom';

interface TitleHeaderProps {
  title: string;
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
    <div className=" py-4 flex items-center pl-4 text-black text-h3-bold pr-[34px] w-full">
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
