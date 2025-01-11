import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import useFormValidation from '@/hooks/useFormButtonValidation';
import CheckForm from '@/pages/co-buying/password/CheckForm';
import CreateForm from '@/pages/co-buying/password/CreateForm';
import { useLocation, useParams } from 'react-router-dom';

const createFormText = ['공구글 게시를 위해', '기본정보', '공구 열기'];
const checkFormText = ['공구글 관리를 위해', '비밀번호', '다음'];

export default function PasswordPage() {
  const { formRef, isDisabled } = useFormValidation();

  // pathparam으로 id가져오기
  const { id } = useParams();
  //id가 없다면 공구글 생성을 위한 비밀번호 입력페이지
  const isCreateMode = !id;

  const location = useLocation();
  const formData = location.state?.formData || {}; // 이전 페이지(폼)에서 받아온 데이터

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formEntries = new FormData(e.currentTarget);
    const data = Object.fromEntries(formEntries);
    // 비밀번호 생성페이지
    if (isCreateMode) {
      console.log({ ...formData, ...data });
    }
    // 비밀번호 확인페이지
    else {
      console.log(data);
    }
  };

  return (
    <DefaultLayout>
      <TitleHeader />
      <>
        <section className="flex flex-col w-full gap-1 text-black h-[90px] justify-center">
          <p className="text-h2">
            {isCreateMode ? createFormText[0] : checkFormText[0]}
          </p>
          <div className="flex items-center">
            <p className="text-h2-bold">
              {isCreateMode ? createFormText[1] : checkFormText[1]}
            </p>
            <p className="text-h2">를 입력해주세요.</p>
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-3"
          ref={formRef}
        >
          {isCreateMode ? <CreateForm /> : <CheckForm />}
        </form>
      </>

      <BottomButton
        type="submit"
        label={isCreateMode ? createFormText[2] : checkFormText[2]}
        disabled={isDisabled}
      />
    </DefaultLayout>
  );
}
