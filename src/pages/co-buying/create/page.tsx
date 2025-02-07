import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import HeaderLayout from '@/layouts/HeaderLayout';
import CommonForm from '@/pages/co-buying/create/CommonForm';
import DivideByQuantityForm from '@/pages/co-buying/create/DivideByQuantityForm';
import DivideByAttendeeForm from '@/pages/co-buying/create/DivideByAttendeeForm';
import DivideTypeSection from '@/pages/co-buying/create/DivideTypeSection';

import { useNavigate } from 'react-router-dom';
import { DivideType } from '@domain/cobuying';
import Form from '@/components/Form';
import { useState } from 'react';
import { CoBuyingCreateReq } from '@interface/cobuying';

function CreatePage() {
  const navigate = useNavigate();
  const [type, setType] = useState<DivideType>(DivideType.quantity);
  const [formData, setFormData] = useState({});

  return (
    <HeaderLayout>
      <TitleHeader title="공구글 작성" />
      <div className="flex flex-col gap-4">
        {/* 1.상품 기본정보 폼 */}
        <CommonForm setFormData={setFormData} setType={setType} type={type} />

        {/* <DivideTypeSection />

        {type === DivideType.quantity && <DivideByQuantityForm />}
        {type === DivideType.attendee && <DivideByAttendeeForm />}

        <section className="flex flex-col gap-2">
          <div className="w-full h-24 border rounded-xl px-3 py-1.5 border-default-200">
            <label className="text-caption text-default-600">안내 메시지</label>
            <textarea
              name="noticeMessage"
              placeholder="신청자에게 안내할 내용을 자유롭게 입력해주세요."
              className="w-full text-black bg-white border-none focus:outline-none"
              maxLength={200}
            />
          </div>
        </section> */}
      </div>
    </HeaderLayout>
  );
}

export default CreatePage;
