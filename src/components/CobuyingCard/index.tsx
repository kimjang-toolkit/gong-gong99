import { DivideType } from "@domain/cobuying";
import AttendeeCobuyingCard from "./AttendeeCoBuyingCard";
import QuantityCobuyingCard from "./QuantityCoBuyingCard";
import { CoBuyingSummary } from "@interface/cobuying";
import defaultProfile from "@/assets/img/default-img.png";

interface CoBuyingCardProps {
  data: CoBuyingSummary;
}

export default function CoBuyingCard({ data }: CoBuyingCardProps) {
  return (
    <div className="flex gap-2 py-4">
      <img
        src={data.imageUrl ? data.imageUrl : defaultProfile}
        alt={data.productName}
        className="w-20 h-20 rounded-[4px] object-cover max-w-[66.9px] max-h-[80px]"
      />
      {data.type === DivideType.attendee ? (
        <AttendeeCobuyingCard item={data} />
      ) : (
        <QuantityCobuyingCard item={data} />
      )}
    </div>
  );
}
