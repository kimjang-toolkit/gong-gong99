import { DivideType } from '@domain/cobuying';
import AttendeeCobuyingCard from './AttendeeCoBuyingCard';
import QuantityCobuyingCard from './QuantityCoBuyingCard';
import { CoBuyingSummary } from '@interface/cobuying';

interface CoBuyingCardProps {
  data: CoBuyingSummary;
}

export default function CoBuyingCard({ data }: CoBuyingCardProps) {
  if (data.type === DivideType.attendee) {
    return <AttendeeCobuyingCard item={data} />;
  } else if (data.type === DivideType.quantity) {
    return <QuantityCobuyingCard item={data} />;
  } else {
    return null; // 혹시 모를 다른 타입에 대한 처리
  }
}
