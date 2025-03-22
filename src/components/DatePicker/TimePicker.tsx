import { useEffect, useRef } from 'react';
import { useDatePickerContext } from '@/components/DatePicker/context';

const TimePicker = () => {
  const { hour, minute, meridiem, setHour, setMinute, setMeridiem } =
    useDatePickerContext();

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, '0')
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  );
  const periods = ['오전', '오후'];

  return (
    <div className="p-4 py-5 mx-auto bg-white rounded-lg shadow-md">
      <div className="relative flex justify-center gap-4">
        {/* 중앙선 */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[40px] border-y border-neutral-300 pointer-events-none z-20" />
        <WheelPicker
          time={hours}
          selectedTime={hour.toString().padStart(2, '0')}
          setTime={(val) => setHour(Number(val))}
        />
        <WheelPicker
          time={minutes}
          selectedTime={minute.toString().padStart(2, '0')}
          setTime={(val) => setMinute(Number(val))}
        />
        <WheelPicker
          time={periods}
          selectedTime={meridiem}
          setTime={(val) => {
            if (val === '오전' || val === '오후') {
              setMeridiem(val);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TimePicker;

interface WheelPickerProps {
  time: string[];
  selectedTime: string;
  setTime: (val: string) => void;
}

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 5;

const WheelPicker = ({ time, selectedTime, setTime }: WheelPickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = (ITEM_HEIGHT * (VISIBLE_COUNT - 1)) / 2;

  useEffect(() => {
    const index = time.findIndex((t) => t === selectedTime);
    if (index !== -1 && ref.current) {
      ref.current.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  }, [selectedTime]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollTop / ITEM_HEIGHT);
      if (time[index]) {
        setTime(time[index]);
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [time, setTime]);

  return (
    <div className="relative w-16 h-[200px] overflow-hidden">
      <div
        ref={ref}
        className="h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
        style={{
          scrollSnapType: 'y mandatory',
          paddingTop: `${padding}px`,
          paddingBottom: `${padding}px`,
        }}
      >
        {time.map((t, i) => (
          <div
            key={i}
            className={`h-[${ITEM_HEIGHT}px] flex items-center justify-center snap-center cursor-pointer`}
            onClick={() => setTime(t)}
          >
            <p
              className={
                selectedTime === t
                  ? 'text-[23px] text-neutral-900 font-semibold'
                  : 'text-[18px] text-neutral-300'
              }
            >
              {t}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
