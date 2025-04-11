import Button from "@/components/Button";
import useApplyCobuying from "@/api/mutations/useApplyCobuying";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AttendeeCoBuyingDetail } from "@interface/cobuying";
import { Sheet } from "react-modal-sheet";
import Input from "@/components/Input";
import { useState } from "react";

interface ApplyBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: AttendeeCoBuyingDetail;
}

// 인원으로 나누는 공구 신청 모달
export default function AttendeeBottomSheet({
  isOpen,
  setIsOpen,
  data,
}: ApplyBottomSheetProps) {
  const sheetRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const [attendeeName, setAttendeeName] = useState("");
  const { mutateAsync } = useApplyCobuying(data.id);

  const handleSubmit = async () => {
    try {
      await mutateAsync({
        coBuyingId: data.id,
        ownerName: data.ownerName,
        name: attendeeName,
        totalQuantity: data.perAttendeeQuantity,
        totalPrice: data.perAttendeePrice,
      });
      setIsOpen(false);
    } catch (error) {
      console.log("신청실패했어요", error);
    }
  };

  // 프론트 계산이 아닌 백에서 계산한 값을 사용
  // const attendeeQuantity = data.totalQuantity / data.targetAttendeeCount;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      detent="content-height"
      disableScrollLocking={true}
    >
      <Sheet.Container ref={sheetRef}>
        <Sheet.Header />
        <Sheet.Content>
          <div className="flex flex-col gap-4 px-4 mb-8">
            <header className="w-full text-left typo-body-bold">
              공구 신청
            </header>
            <Input
              value={attendeeName}
              setValue={(value) => setAttendeeName(value)}
              variant="bordered"
            >
              <Input.Label>이름</Input.Label>
              <Input.Field placeholder="입금자명과 동일하게 작성해주세요." />
            </Input>

            <section className="flex justify-between p-4 border rounded-xl border-default-200">
              <p className="mb-1 typo-caption text-default-600">구매 수량</p>
              <p className="typo-body-bold">{data.perAttendeeQuantity} 개</p>
            </section>
            <section className="flex items-start justify-between px-1">
              <p className="flex py-1 typo-tiny text-default-700">
                <p className="text-primary-400">{data.perAttendeeQuantity}</p>개
                구매액
              </p>
              <p className="typo-body-bold text-primary-400">
                {data.perAttendeePrice}원
              </p>
            </section>
            <section className="flex justify-end w-full mt-1 active:brightness-90">
              <Button
                type="submit"
                label="신청하기"
                size="small"
                onClick={handleSubmit}
              />
            </section>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
