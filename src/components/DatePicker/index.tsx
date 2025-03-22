import HorizontalDatePicker from '@/components/DatePicker/HorizontalDatePicker';
import { DatePickerContext } from './context';
import { useState } from 'react';
import TimePicker from '@/components/DatePicker/TimePicker';
import { Sheet } from 'react-modal-sheet';
import useOutsideClick from '@/hooks/useOutsideClick';
import Button from '@/components/Button';
import { getFormattedDay } from '@/util/getFormattedDay';
import Input from '@/components/Input';

function DatePicker({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);
  const [meridiem, setMeridiem] = useState<'오전' | '오후'>('오전');

  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleChange = () => {
    // yyyy/mm/dd 오전|오후 hh:mm
    setValue(
      `${selectedDate.getFullYear()}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${String(selectedDate.getDate()).padStart(2, '0')} ${meridiem} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
    );
    setIsOpen(false);
  };

  return (
    <DatePickerContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        hour,
        setHour,
        minute,
        setMinute,
        meridiem,
        setMeridiem,
      }}
    >
      <div onClick={() => setIsOpen(true)}>
        <Input value={value} setValue={setValue}>
          <Input.Label>나눔시간</Input.Label>
          <Input.Field type="button" className="text-left" />
        </Input>
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
      >
        <Sheet.Container ref={sheetRef}>
          <Sheet.Header />
          <Sheet.Content disableDrag>
            <div className="flex flex-col ">
              <header className="w-full px-4 text-left typo-body-bold">
                {selectedDate.toLocaleDateString('ko-KR', {
                  month: 'long',
                })}
              </header>
              <HorizontalDatePicker className="pl-4 mt-4" />
              <TimePicker className="mt-4" />
              <div className="flex items-center justify-between mb-[22px] mt-10 px-5">
                <div className="flex items-center gap-2">
                  <p className="typo-caption text-default-500">나눔시간</p>
                  <p className="typo-body-bold text-defulat-800">
                    {`${getFormattedDay(selectedDate)} ${meridiem} ${hour.toString().padStart(2, '0')}:${minute
                      .toString()
                      .padStart(2, '0')} `}
                  </p>
                </div>
                <Button label="다음" size="large" onClick={handleChange} />
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </DatePickerContext.Provider>
  );
}

export default DatePicker;
