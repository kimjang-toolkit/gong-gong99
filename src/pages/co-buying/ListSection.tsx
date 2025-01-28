import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';
import { AttendeeCoBuyingSummary } from '@interface/cobuying';
import { DivideType } from '../../../kimjang-toolkit-gong-gong99-api-interface/src/domain/cobuying';

const mockData = {
  id: '1',
  ownerName: '찬솔',
  productName: '상품명',
  totalQuantity: 10,
  coBuyingStatus: 1,
  createdAt: '2025-01-27',
  deadline: '2025-01-27',
  totalPrice: 100000,
  type: DivideType.attendee,
  attendeeCount: 10,
  targetAttendeeCount: 10,
  perAttendeePrice: 10000,
};

export default function ListSection() {
  return (
    <div>
      <Banner />
      <CobuyingCard item={mockData as AttendeeCoBuyingSummary} />
    </div>
  );
}
