import { createContext, useContext } from 'react';

export interface DatePickerContextProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;

  hour: number; // 1 ~ 12
  setHour: (hour: number) => void;

  minute: number; // 0 ~ 59
  setMinute: (minute: number) => void;

  meridiem: '오전' | '오후';
  setMeridiem: (meridiem: '오전' | '오후') => void;

  isOpen: boolean; // 모달 열기 여부
  setIsOpen: (isOpen: boolean) => void;
}

export const DatePickerContext = createContext<DatePickerContextProps>({
  selectedDate: new Date(),
  setSelectedDate: () => {},
  hour: 12,
  setHour: () => {},
  minute: 0,
  setMinute: () => {},
  meridiem: '오전',
  setMeridiem: () => {},
  isOpen: false,
  setIsOpen: () => {},
});
export const useDatePickerContext = () => useContext(DatePickerContext);
