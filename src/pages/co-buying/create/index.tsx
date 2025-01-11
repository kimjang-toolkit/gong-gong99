import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import CommonForm from '@/pages/co-buying/create/CommonForm';
import DevideByQuantityForm from '@/pages/co-buying/create/DevideByQuantityForm';
import DevideByAttendeeForm from '@/pages/co-buying/create/DevideByAttendeeForm';
import DevideTypeSection from '@/pages/co-buying/create/DevideTypeSection';
import { useEffect, useRef, useMemo, useState } from 'react';
import {
  CobuyingFormData,
  FormContext,
} from '@/pages/co-buying/create/formContext';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const navigate = useNavigate();

  const [devideType, setDevideType] = useState<'quantity' | 'person'>(
    'quantity'
  );
  const [nextDisabled, setNextDisabled] = useState(true);

  // 폼 데이터
  const [formData, setFormData] = useState<CobuyingFormData>();

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

  // 다음 버튼 핸들러
  const handleNextClick = () => {
    navigate('/co-buying/password', { state: { formData } });
  };

  // 폼 버튼 비활성화를 위한 유효성 실시간 검사
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const form = formRef.current;
    if (form) {
      const allInputsValid = Array.from(form.elements).every((input) => {
        if (
          input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement
        ) {
          return input.checkValidity();
        }
        return true;
      });

      setNextDisabled(!allInputsValid);
    }
  }, [formData, devideType]);

  const handleFormBlur = (e: React.FormEvent<HTMLFormElement>) => {
    const formEntries = new FormData(e.currentTarget);
    const data = Object.fromEntries(formEntries);

    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
  };

  return (
    <DefaultLayout>
      <TitleHeader title="공구글 작성" />
      <FormContext.Provider
        value={{
          ...formContextValue,
          formData: formData || ({} as CobuyingFormData),
        }}
      >
        <form
          ref={formRef}
          onBlur={handleFormBlur}
          onSubmit={handleNextClick}
          className="flex flex-col gap-4"
        >
          {/* 1.상품 기본정보 폼 */}
          <CommonForm />

          {/* 2. 공구 나눔방식 선택 */}
          <DevideTypeSection />

          {/* 3. 공구 나눔방식 선택에 따라 수량으로 나누기 폼/ 인원으로 나누기 폼 */}
          {devideType === 'quantity' && <DevideByQuantityForm />}
          {devideType === 'person' && <DevideByAttendeeForm />}

          {/* 4. 알리는 말 */}
          <section className="flex flex-col gap-2">
            <div className="w-full h-24 border rounded-xl px-3 py-1.5 border-default-200">
              <label className="text-caption text-default-600">
                안내 메시지
              </label>
              <textarea
                name="noticeMessage"
                placeholder="신청자에게 안내할 내용을 자유롭게 입력해주세요."
                className="w-full text-black border-none focus:outline-none"
                maxLength={200}
              />
            </div>
          </section>
        </form>
      </FormContext.Provider>
      <BottomButton
        type="button"
        label="다음"
        onClick={handleNextClick}
        disabled={nextDisabled}
      />
    </DefaultLayout>
  );
}

export default CreatePage;
