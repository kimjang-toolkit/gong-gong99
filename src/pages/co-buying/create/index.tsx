import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

function CreatePage() {
  return (
    <DefaultLayout>
      <TitleHeader title="임시 메인" />
      <div>임시 메인</div>
      <BottomButton label="다음" onClick={() => {}} />
    </DefaultLayout>
  );
}

export default CreatePage;
