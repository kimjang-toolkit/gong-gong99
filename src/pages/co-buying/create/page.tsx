/* eslint-disable @typescript-eslint/no-unused-vars */
import TitleHeader from '@/components/Header/TitleHeader';
import HeaderLayout from '@/layouts/HeaderLayout';

import { DivideType } from '@domain/cobuying';
import { useState } from 'react';
import CreateForm from '@/pages/co-buying/create/CreateForm';
import PasswordForm from '@/pages/co-buying/create/PasswordForm';
import { PasswordSchema } from '@/util/zod/cobuying-create';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateCobuying } from '@/api/mutations/useCreateCobuying';
function CreatePage() {
  const navigate = useNavigate();
  const { extractedProduct } = useLocation().state;
  console.log('추출된데이터', extractedProduct);
  const { mutateAsync } = useCreateCobuying();

  const [formData, setFormData] = useState({
    type: DivideType.quantity,
    productName: '',
    totalPrice: extractedProduct.price,
    totalQuantity: 0,
    productLink: '',
    targetAttendeeCount: 0,
    memo: '',
    ownerOptions: [],
    itemOptions: [],
    sharingDateTime: '',
    sharingLocation: '',
    originalImageUrl: '', // 원본 이미지 url
    thumbnailImageUrl: '', // 썸네일 이미지 url
    ownerPassword: '',
    ownerName: '',
    ...extractedProduct, // 이미지 분석으로 받아온 데이터가 있다면 자동채움
  });
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (data: PasswordSchema) => {
    const { ownerPasswordConfirm, ...exceptPasswordConfirm } = data;
    try {
      const response = await mutateAsync({
        ...formData,
        ...exceptPasswordConfirm,
      });
      // 상세페이지로 이동
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
