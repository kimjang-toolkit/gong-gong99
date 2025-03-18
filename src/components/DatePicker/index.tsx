import HorizontalDatePicker from '@/components/DatePicker/HorizontalDatePicker';
import { DatePickerContext } from './context';
import { useState } from 'react';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);
  const [meridiem, setMeridiem] = useState<'오전' | '오후'>('오전');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        isOpen,
        setIsOpen,
      }}
    >
      <HorizontalDatePicker />
    </DatePickerContext.Provider>
  );
}

export default DatePicker;
