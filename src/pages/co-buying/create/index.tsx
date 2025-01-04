import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import CommonForm from '@/pages/co-buying/create/CommonForm';
import DevideByQuantityForm from '@/pages/co-buying/create/DevideByQuantityForm';
import DevideByAttendeeForm from '@/pages/co-buying/create/DevideByAttendeeForm';
import DevideTypeSection from '@/pages/co-buying/create/DevideTypeSection';
import { createContext, useMemo, useState } from 'react';

const FormContext = createContext({});
export { FormContext };

export interface FormData {
  productName: string;
  totalPrice: number;
  productLink: string;
  deadline: string;
  devideType: 'quantity' | 'person';
  totalQuantity: number;
  recruitmentNumbers: number;
  attendeeQuantity?: number;
  ownerQuantity?: number;
  attendeePrice?: number;
}

function CreatePage() {
  const [devideType, setDevideType] = useState<'quantity' | 'person'>(
    'quantity'
  );
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // 폼 데이터
  const [formData, setFormData] = useState<FormData>({
    productName: '',
    totalPrice: 0,
    productLink: '',
    deadline: '',
    devideType: devideType,
    totalQuantity: 0,
    recruitmentNumbers: 0,
  });

  // 폼 컨텍스트 값
  const formContextValue = useMemo(
    () => ({
      devideType,
      setDevideType,
      formData,
      setFormData,
    }),
    [devideType, formData]
  );

  // 폼제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleFormValidity = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    console.log(form.checkValidity());
    if (form.checkValidity()) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };
  return (
    <DefaultLayout>
      <TitleHeader title="공구글 작성" />
      <FormContext.Provider value={formContextValue}>
        <form
          onChange={(e) => handleFormValidity(e)}
          onSubmit={handleSubmit}
          className="flex flex-col h-full gap-4"
        >
          {/* 1.상품 기본정보 폼 */}
          <CommonForm />

          {/* 2. 공구 나눔방식 선택 */}
          <DevideTypeSection />

          {/* 3. 공구 나눔방식 선택에 따라 수량으로 나누기 폼/ 인원으로 나누기 폼 */}
          {devideType === 'quantity' && <DevideByQuantityForm />}
          {devideType === 'person' && <DevideByAttendeeForm />}
        </form>
      </FormContext.Provider>
      <BottomButton
        type="submit"
        label="다음"
        onClick={() => {}}
        disabled={submitDisabled}
      />
    </DefaultLayout>
  );
}

export default CreatePage;
