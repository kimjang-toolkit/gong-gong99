import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import { useNavigate } from 'react-router-dom';

interface RightButtonHeaderProps {
  rightElement: React.ReactNode;
  backUrl?: string;
}

export default function RightButtonHeader({
  rightElement,
  backUrl,
}: RightButtonHeaderProps) {
  const navigate = useNavigate();
  const handleBackPress = () => {
    if (backUrl) {
      navigate(backUrl);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-4 text-black bg-white h typo-h3-bold">
      <ArrowLeft
        stroke="#262626"
        width={18}
        height={18}
        onClick={handleBackPress}
      />
      {rightElement}
    </div>
  );
}
