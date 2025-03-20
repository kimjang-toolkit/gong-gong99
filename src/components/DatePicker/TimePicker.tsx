import { useEffect, useRef } from 'react';

import { useDatePickerContext } from '@/components/DatePicker/context';

const TimePicker = () => {
  const context = useDatePickerContext();
  const { hour, minute, meridiem, setHour, setMinute, setMeridiem } = context;

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, '0')
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  );
  const periods = ['오전', '오후'];

  return (
    <div className="p-4 py-10 mx-auto bg-white rounded-lg shadow-md">
      <div className="relative flex justify-center ">
        {/* ✅ 선택된 값 강조용 iOS 스타일 중앙선 */}
        <div className="absolute left-0 w-full h-9 translate-y-12 border-y-[0.5px] border-[#CCCCCC] pointer-events-none" />

        <WheelPicker
          time={hours}
          selectedTime={hour.toString()}
          setTime={setHour}
        />
        <WheelPicker
          time={minutes}
          selectedTime={minute.toString()}
          setTime={setMinute}
        />
        <WheelPicker
          time={periods}
          selectedTime={meridiem}
          setTime={setMeridiem}
        />
      </div>
    </div>
  );
};

export default TimePicker;

interface WheelPickerProps {
  time: string[];
  selectedTime: string;
  setTime: (time: string) => void;
}

const WheelPicker = ({ time, selectedTime, setTime }: WheelPickerProps) => {
  const timeRef = useRef<HTMLDivElement>(null);
  const ITEM_HEIGHT = 44; // ✅ 숫자 한 칸 높이 (기본값)
  const VISIBLE_ITEMS = 3; // ✅ 한 번에 보여질 아이템 개수 (위아래 여백 고려)
  const PADDING_HEIGHT = ((VISIBLE_ITEMS - 1) * ITEM_HEIGHT) / 2; // ✅ 위아래 패딩 자동 조정

  useEffect(() => {
    const handleScroll = () => {
      if (!timeRef.current) return;

      const scrollTop = timeRef.current.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT); // ✅ 중앙 정렬

      if (time[index] !== undefined) {
        setTime(time[index]);
      }
    };

    const refCurrent = timeRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [selectedTime]);

  useEffect(() => {
    if (timeRef.current) {
      const index = time.findIndex((item) => item === selectedTime);
      if (index !== -1) {
        timeRef.current.scrollTo({
          top: index * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedTime]);

  return (
    <div className="relative w-16 h-[132px]">
      {' '}
      {/* ✅ 동적으로 높이 조정 */}
      <div
        ref={timeRef}
        className="relative z-10 h-full overflow-auto scrollbar-hide snap-y snap-mandatory overscroll-contain"
      >
        <div className={`h-[${PADDING_HEIGHT}px]`} /> {/* ✅ 상단 패딩 추가 */}
        {time.map((t, index) => (
          <div
            key={index}
            className="py-2 text-xl text-center cursor-pointer snap-center"
            onClick={() => setTime(t)}
          >
            <p
              className={`${selectedTime === t ? 'text-neutral-800 font-medium text-[23px]' : 'text-neutral-300'}`}
            >
              {t}
            </p>
          </div>
        ))}
        <div className={`h-[${PADDING_HEIGHT}px]`} /> {/* ✅ 하단 패딩 추가 */}
      </div>
      {/* ✅ 중앙선 (iOS 스타일) */}
    </div>
  );
};
