import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import InfoForm from '@/pages/co-buying/password/InfoForm';

export default function PasswordPage() {
  return (
    <DefaultLayout>
      <TitleHeader />
      <section className="flex flex-col w-full gap-1 text-black h-[90px] justify-center">
        <p className="text-h2">공구글 게시를 위해</p>
        <div className="flex items-center">
          <p className="text-h2-bold">기본정보</p>
          <p className="text-h2">를 입력해주세요.</p>
        </div>
      </section>
        <InfoForm />
      <InfoForm />
      <BottomButton label="확인" onClick={() => {}} />
    </DefaultLayout>
  );
}
