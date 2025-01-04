import { createContext } from 'react';

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
}

interface FormContextType {
  formData: CobuyingFormData;
  setFormData: (formData: CobuyingFormData) => void;
  devideType: 'quantity' | 'person';
  setDevideType: (devideType: 'quantity' | 'person') => void;
}

const defaultFormData: CobuyingFormData = {
  productName: '',
  totalPrice: 0,
  productLink: '',
  deadline: '',
  devideType: 'quantity',
  totalQuantity: 0,
  recruitmentNumbers: 0,
};

const FormContext = createContext<FormContextType>({
  formData: defaultFormData,
  setFormData: () => {},
  devideType: 'quantity',
  setDevideType: () => {},
});

export { FormContext };
