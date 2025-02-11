import TitleHeader from '@/components/Header/TitleHeader';
import HeaderLayout from '@/layouts/HeaderLayout';

import { useNavigate } from 'react-router-dom';
import { DivideType } from '@domain/cobuying';
import { useState } from 'react';
import CreateForm from '@/pages/co-buying/create/CreateForm';

function CreatePage() {
  const navigate = useNavigate();
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
  });

  return (
    <HeaderLayout>
      <TitleHeader title="공구글 작성" />
      <CreateForm
        setFormData={(data) => setFormData(data as typeof formData)}
        formData={formData}
      />
    </HeaderLayout>
  );
}

export default CreatePage;
