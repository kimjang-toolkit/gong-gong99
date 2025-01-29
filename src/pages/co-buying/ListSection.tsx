import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';
import {
  AttendeeCoBuyingSummary,
  QuantityCoBuyingSummary,
} from '@interface/cobuying';
import { DivideType } from '@domain/cobuying';
import Alert from '@/components/Alert';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
const mockData = [
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
  const [showAlert, setShowAlert] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(false);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsButtonVisible(true);
      }, 500);
    };

    const scrollContainer = document.getElementById('app-main');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

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
      {isButtonVisible && (
        <div className="fixed right-5 bottom-20 ">
          <Button
            label="+ 공구글"
            size="small"
            className="rounded-[20px] shadow-md active:brightness-90"
          />
        </div>
      )}
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
