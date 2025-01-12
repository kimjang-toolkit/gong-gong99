import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';

export interface CobuyingFormData {
  productName?: string;
  totalPrice?: number;
  productLink?: string;
  deadline?: string;
  devideType?: 'quantity' | 'person';
  totalQuantity?: number;
  recruitmentNumbers?: number;
  attendeeQuantity?: number;
  ownerQuantity?: number;
  attendeePrice?: number;
  unitPrice?: number;
  ownerName?: string;
  ownerPwd?: string;
}

interface FormStore {
  formData: CobuyingFormData;
  setFormData: (formData: Partial<CobuyingFormData>) => void;
  devideType: 'quantity' | 'person';
  setDevideType: (devideType: 'quantity' | 'person') => void;
}

const formStore = createStore<FormStore>((set) => ({
  formData: {
    productName: '',
    totalPrice: 0,
    productLink: '',
    deadline: '',
    devideType: 'quantity',
    totalQuantity: 0,
    recruitmentNumbers: 0,
    ownerName: '',
    ownerPwd: '',
  },
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  devideType: 'quantity',
  setDevideType: (newType) => set({ devideType: newType }),
}));

const useFormStore = () => useStore(formStore);

export default useFormStore;
