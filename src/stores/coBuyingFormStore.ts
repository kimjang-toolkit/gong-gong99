import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { DivideType } from '@domain/cobuying';

export interface CobuyingFormData {
  productName?: string;
  totalPrice?: number;
  productLink?: string;
  deadline?: string;
  type?: DivideType;
  totalQuantity?: number;
  ownerQuantity?: number;
  recruitmentNumbers?: number; //모집인원수

  ownerName?: string;
  ownerPwd?: string;
}

interface FormStore {
  formData: CobuyingFormData;
  setFormData: (formData: Partial<CobuyingFormData>) => void;
  type: DivideType;
  setType: (type: DivideType) => void;
}

const formStore = createStore<FormStore>((set) => ({
  formData: {
    productName: '',
    totalPrice: 0,
    productLink: '',
    deadline: '',
    type: DivideType.attendee,
    totalQuantity: 0,
    recruitmentNumbers: 0,
    ownerName: '',
    ownerPwd: '',
  },
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  type: DivideType.attendee,
  setType: (newType) => set({ type: newType }),
}));

const useFormStore = () => useStore(formStore);

export default useFormStore;
