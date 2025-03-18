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
      { length: 10 },
      (_, index) =>
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + index)
    );
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!loadMoreRef.current) {
      console.log('⚠️ loadMoreRef가 감지되지 않음');
      return;
    }

    console.log('✅ Observer 등록', loadMoreRef.current);

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('📅 Load more dates');
          setTimeout(() => {
            setDates((prevDates) => {
              const lastDate = prevDates[prevDates.length - 1];
              const newDates = Array.from(
                { length: 10 },
                (_, index) =>
                  new Date(
                    lastDate.getFullYear(),
                    lastDate.getMonth(),
                    lastDate.getDate() + index + 1
                  )
              );
              return [...prevDates, ...newDates];
            });
          }, 200);
        }
      },
      { threshold: 0.5 } // ✅ 감지 범위를 높여서 동작하도록 설정
    );

    observer.current.observe(loadMoreRef.current);

    return () => observer.current?.disconnect();
  }, [dates.length]); // ✅ dates.length 변경될 때마다 다시 실행

  return (
    <section className="overflow-x-auto w-72">
      <div className="flex items-center gap-5">
        {dates.map((date) => (
          <DateItem
            key={date.toISOString()}
            date={date}
            isToday={date.toDateString() === new Date().toDateString()}
            isSelected={selectedDate?.toDateString() === date.toDateString()}
            onClick={() => {
              setSelectedDate?.(new Date(date));
            }}
          />
        ))}
        {/* ✅ 감지 가능하도록 크기 조정 */}
        <div ref={loadMoreRef} className="w-10 h-10 bg-transparent" />{' '}
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
  console.log(`🔹 DateItem: ${date.toDateString()}, isSelected: ${isSelected}`);

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center *:typo-caption cursor-pointer rounded-lg transition-colors duration-200',
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
