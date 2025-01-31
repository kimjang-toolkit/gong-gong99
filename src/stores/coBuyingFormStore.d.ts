import { DivideType } from '@domain/cobuying';
export interface CobuyingFormData {
    productName?: string;
    totalPrice?: number;
    productLink?: string;
    deadline?: string;
    type?: DivideType;
    totalQuantity?: number;
    ownerQuantity?: number;
    recruitmentNumbers?: number;
    ownerName?: string;
    ownerPwd?: string;
}
interface FormStore {
    formData: CobuyingFormData;
    setFormData: (formData: Partial<CobuyingFormData>) => void;
    type: DivideType;
    setType: (type: DivideType) => void;
}
declare const useFormStore: () => FormStore;
export default useFormStore;
