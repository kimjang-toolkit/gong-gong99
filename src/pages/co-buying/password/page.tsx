import BottomButton from "@/components/Button/BottomButton";
import TitleHeader from "@/components/Header/TitleHeader";
import Input from "@/components/Input";
import HeaderLayout from "@/layouts/HeaderLayout";
import usePwdCobuying from "@/api/mutations/usePwdCobuying";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCobuyingDetail } from "@/api/queries/cobuying";

export default function PasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams()!;
  const ownerName = searchParams.get("ownerName")!;

  const { data: cobuyingData } = useCobuyingDetail(id!, ownerName);
  const { mutate } = usePwdCobuying(id!);

  const [ownerPassword, setOwnerPassword] = useState("");

  const handleSubmit = () => {
    mutate(
      { ownerName, ownerPassword },
      {
        onSuccess: () => {
          navigate(`/co-buying/${id}/management?ownerName=${ownerName}`, {
            state: {
              data: cobuyingData,
            },
          });
        },
      }
    );
  };

  return (
    <HeaderLayout>
      <TitleHeader />
      <>
        <section className="flex flex-col w-full gap-1 mb-4 text-black h-[90px] justify-center">
          <p className="typo-h2">공구글 관리를 위해</p>
          <div className="flex items-center">
            <p className="typo-h2-bold">비밀번호</p>
            <p className="typo-h2">를 입력해주세요.</p>
          </div>
        </section>
        <Input value={ownerPassword} setValue={setOwnerPassword}>
          <Input.Label>비밀번호</Input.Label>
          <Input.Field type="password" />
        </Input>
        <BottomButton
          type="button"
          onClick={handleSubmit}
          label="확인"
          disabled={!ownerPassword}
        />
      </>
    </HeaderLayout>
  );
}
