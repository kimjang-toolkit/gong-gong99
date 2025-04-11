import { DivideType } from '@domain/cobuying';
import AttendeeCobuyingCard from './AttendeeCoBuyingCard';
import QuantityCobuyingCard from './QuantityCoBuyingCard';
import { CoBuyingSummary } from '@interface/cobuying';
import defaultProfile from '@/assets/img/default-img.png';
import { useState } from 'react';

interface CoBuyingCardProps {
  data: CoBuyingSummary;
}

export default function CoBuyingCard({ data }: CoBuyingCardProps) {
  const [imgSrc, setImgSrc] = useState(
    data.imageUrl ? data.imageUrl : defaultProfile
  );
  return (
    <div className="flex gap-2 py-4">
      <div className="w-20 h-20">
        <img
          src={imgSrc}
          alt={data.productName}
          onError={() => setImgSrc(defaultProfile)}
          className="w-full h-full object-cover rounded-[4px]"
        />
      </div>
      {data.type === DivideType.attendee ? (
        <AttendeeCobuyingCard item={data} />
      ) : (
        <QuantityCobuyingCard item={data} />
      )}
    </div>
  );
}
