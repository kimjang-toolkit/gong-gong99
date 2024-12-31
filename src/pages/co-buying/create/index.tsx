import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import FormSection from '@/pages/co-buying/create/FormSection';

function CreatePage() {
  return (
    <DefaultLayout>
      <TitleHeader title="임시 메인" />
      <FormSection />
      <BottomButton label="다음" onClick={() => {}} />
    </DefaultLayout>
  );
}

export default CreatePage;
