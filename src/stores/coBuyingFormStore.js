import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { DivideType } from '@domain/cobuying';
const formStore = createStore((set) => ({
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
    setFormData: (newData) => set((state) => ({
        formData: { ...state.formData, ...newData },
    })),
    type: DivideType.attendee,
    setType: (newType) => set({ type: newType }),
}));
const useFormStore = () => useStore(formStore);
export default useFormStore;
