import Form from '@/components/Form';
import Input from '@/components/Input';
import { CommonFormSchema, commonFormSchema } from '@/util/zod/cobuying-create';
import { DivideType } from '@domain/cobuying';

interface CommonFormProps {
  setFormData: (formData: CommonFormSchema) => void;
  setType: (type: DivideType) => void;
  type: DivideType;
}

function CommonForm({ setFormData, setType, type }: CommonFormProps) {
  // 


  return (
   
  );
}

export default CommonForm;
