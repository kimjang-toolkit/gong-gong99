import { cn } from '@/lib/utils';
import { useDatePickerContext } from './context';
import { useEffect, useRef, useState } from 'react';

export default function HorizontalDatePicker() {
  const context = useDatePickerContext();
  const selectedDate = context?.selectedDate;
  const setSelectedDate = context?.setSelectedDate;

  const [dates, setDates] = useState<Date[]>(() => {
    const today = new Date();
    return Array.from(
      { length: 12 },
      (_, index) =>
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + index)
    );
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false); // 추가 요청 중인지 확인하는 상태

  // ✅ 무한 스크롤 감지 로직 (최적화)
  useEffect(() => {
    if (!loadMoreRef.current || isLoading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true); //  새로운 데이터 추가 중이므로 로딩 상태 변경

          setDates((prevDates) => {
            const lastDate = prevDates[prevDates.length - 1];
            const newDates = Array.from(
              { length: 12 },
              (_, index) =>
                new Date(
                  lastDate.getFullYear(),
                  lastDate.getMonth(),
                  lastDate.getDate() + index + 1
                )
            );
            return [...prevDates, ...newDates];
          });
          setIsLoading(false);
        }
      },
      {
        root: null, // 뷰포트 기준 감지
        rootMargin: '50px', // 조금 더 스크롤이 내려간 후 감지
        threshold: 1,
      }
    );

    observer.current.observe(loadMoreRef.current);

    return () => observer.current?.disconnect();
  }, [dates.length, isLoading]);

  return (
    <section className="relative w-full overflow-x-auto scroll-smooth scroll-snap-x snap-mandatory scrollbar-hide">
      <div className="flex items-center gap-5 w-max">
        {dates.map((date) => (
          <DateItem
            key={date.toISOString()}
            date={date}
            isToday={date.toDateString() === new Date().toDateString()}
            isSelected={selectedDate?.toDateString() === date.toDateString()}
            onClick={() => setSelectedDate?.(new Date(date))}
          />
        ))}
        <div ref={loadMoreRef} className="w-10 h-24 bg-transparent" />
      </div>
    </section>
  );
}

const DateItem = ({
  date,
  isToday,
  isSelected,
  onClick,
}: {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center scrollbar-hide cursor-pointer rounded-lg transition-colors duration-200',
        isToday ? 'text-primary-500 font-bold' : 'text-default-900'
      )}
    >
      <p className="text-sm">
        {date.toLocaleDateString('ko-KR', { weekday: 'short' })}
      </p>
      <p
        className={cn(
          'h-[26px] w-[26px] flex items-center justify-center',
          isSelected ? 'bg-primary-500 text-white rounded-full' : ''
        )}
      >
        {date.getDate()}
      </p>
    </div>
  );
};
