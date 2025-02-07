import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import AttendeeCoBuyingCard from './AttendeeCoBuyingCard';
import QuantityCoBuyingCard from './QuantityCoBuyingCard';

interface CoBuyingCardProps {
  data: CoBuyingDetail;
}

export default function CoBuyingCard({ data }: CoBuyingCardProps) {
  if (data.type === DivideType.attendee) {
    return <AttendeeCoBuyingCard data={data} />;
  } else if (data.type === DivideType.quantity) {
    return <QuantityCoBuyingCard data={data} />;
  } else {
    return null; // 혹시 모를 다른 타입에 대한 처리
  }
}
