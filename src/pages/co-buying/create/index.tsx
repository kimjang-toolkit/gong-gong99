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

function CreatePage() {
  const [devideType, setDevideType] = useState<'quantity' | 'person'>(
    'quantity'
  );
  const [formData, setFormData] = useState({});

  const formContextValue = useMemo(
    () => ({
      devideType,
      setDevideType,
      formData,
      setFormData,
    }),
    [devideType, formData]
  );

  return (
    <DefaultLayout>
      <TitleHeader title="임시 메인" />
      <FormContext.Provider value={formContextValue}>
        <form className="flex flex-col h-full gap-4">
          {/* 1.상품 기본정보 폼 */}
          <CommonForm />

          {/* 2. 공구 나눔방식 선택 */}
          <DevideTypeSection />

          {/* 3. 공구 나눔방식 선택에 따라 수량으로 나누기 폼/ 인원으로 나누기 폼 */}
          {devideType === 'quantity' && <DevideByQuantityForm />}
          {devideType === 'person' && <DevideByAttendeeForm />}
        </form>
      </FormContext.Provider>
      <BottomButton label="다음" onClick={() => {}} />
    </DefaultLayout>
  );
}

export default CreatePage;
