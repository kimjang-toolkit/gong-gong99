/* eslint-disable @typescript-eslint/no-unused-vars */
import TitleHeader from '@/components/Header/TitleHeader';
import HeaderLayout from '@/layouts/HeaderLayout';

import { DivideType } from '@domain/cobuying';
import { useState } from 'react';
import CreateForm from '@/pages/co-buying/create/CreateForm';
import PasswordForm from '@/pages/co-buying/create/PasswordForm';
import { PasswordSchema } from '@/util/zod/cobuying-create';
import { useNavigate } from 'react-router-dom';
import { useCreateCobuying } from '@/api/mutations/useCreateCobuying';
function CreatePage() {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateCobuying();

  const [formData, setFormData] = useState({
    type: DivideType.quantity,
    productName: '',
    totalPrice: 0,
    productLink: '',
    deadline: '',
    totalQuantity: 0,
    ownerQuantity: 0,
    targetAttendeeCount: 0,
    memo: '',
    ownerPassword: '',
    ownerName: '',
  });
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (data: PasswordSchema) => {
    console.log('data', data);
    const { ownerPasswordConfirm, ...exceptPasswordConfirm } = data;
    try {
      const response = await mutateAsync({
        ...formData,
        ...exceptPasswordConfirm,
      });
      navigate(`/co-buying/${response.id}?ownerName=${data.ownerName}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleBackButton = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <HeaderLayout>
      <TitleHeader
        onBackPress={handleBackButton}
        title={step === 1 ? '공구글 작성' : ''}
      />
      {step === 1 ? (
        <CreateForm
          setFormData={(data) => setFormData(data as typeof formData)}
          formData={formData}
          handleNextStep={handleNextStep}
        />
      ) : (
        <PasswordForm handleSubmit={handleSubmit} />
      )}
    </HeaderLayout>
  );
}

export default CreatePage;
