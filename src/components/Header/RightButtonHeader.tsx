import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import { useNavigate } from "react-router-dom";

interface RightButtonHeaderProps {
  rightElement: React.ReactNode;
  onBackPress?: () => void;
}

export default function RightButtonHeader({
  rightElement,
  onBackPress,
}: RightButtonHeaderProps) {
  const navigate = useNavigate();
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className=" py-4 flex items-center justify-between pl-4 text-black text-h3-bold pr-[34px] w-full bg-white">
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
