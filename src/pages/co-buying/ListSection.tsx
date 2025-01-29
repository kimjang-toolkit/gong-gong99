import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';
import {
  AttendeeCoBuyingSummary,
  QuantityCoBuyingSummary,
} from '@interface/cobuying';
import { DivideType } from '@domain/cobuying';
import Alert from '@/components/Alert';
import { useState } from 'react';
import { useCobuyingList } from '@/hooks/queries/useCobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
export const mockData = [
  {
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
  },
  {
    id: '2',
    ownerName: '찬솔',
    productName: '맛있는 만두 3묶음',
    totalQuantity: 10,
    coBuyingStatus: 1,
    createdAt: '2025-01-27',
    deadline: '2025-01-27',
    totalPrice: 100000,
    type: DivideType.quantity,
    totalAttendeeQuantity: 10,
    unitPrice: 10000,
  },
  {
    id: '2',
    ownerName: '찬솔',
    productName: '맛있는 만두 3묶음',
    totalQuantity: 10,
    coBuyingStatus: 1,
    createdAt: '2025-01-27',
    deadline: '2025-01-27',
    totalPrice: 100000,
    type: DivideType.quantity,
    totalAttendeeQuantity: 10,
    unitPrice: 10000,
  },
  {
    id: '2',
    ownerName: '찬솔',
    productName: '맛있는 만두 3묶음',
    totalQuantity: 10,
    coBuyingStatus: 1,
    createdAt: '2025-01-27',
    deadline: '2025-01-27',
    totalPrice: 100000,
    type: DivideType.quantity,
    totalAttendeeQuantity: 10,
    unitPrice: 10000,
  },
  {
    id: '2',
    ownerName: '찬솔',
    productName: '맛있는 만두 3묶음',
    totalQuantity: 10,
    coBuyingStatus: 1,
    createdAt: '2025-01-27',
    deadline: '2025-01-27',
    totalPrice: 100000,
    type: DivideType.quantity,
    totalAttendeeQuantity: 10,
    unitPrice: 10000,
  },
  {
    id: '2',
    ownerName: '찬솔',
    productName: '맛있는 만두 3묶음',
    totalQuantity: 10,
    coBuyingStatus: 1,
    createdAt: '2025-01-27',
    deadline: '2025-01-27',
    totalPrice: 100000,
    type: DivideType.quantity,
    totalAttendeeQuantity: 10,
    unitPrice: 10000,
  },
];

export default function ListSection() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useCobuyingList();

  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Banner />
      {mockData.map((item, index) => (
        <>
          <CobuyingCard
            key={item.id}
            item={item as AttendeeCoBuyingSummary | QuantityCoBuyingSummary}
          />
          {index < mockData.length - 1 && (
            <hr className="border-b-1 border-default-100" />
          )}
        </>
      ))}
      <CreateButton />
      {showAlert && (
        <Alert
          status="success"
          label="신청이 완료되었습니다."
          setIsOpen={() => setShowAlert(false)}
        />
      )}
    </>
  );
}
