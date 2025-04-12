import useSharingCheck from "@/api/mutations/useSharingCheck";
import { cn } from "@/lib/utils";
import { ItemOptionBase } from "@domain/product";
import { Attendee } from "@domain/user";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

/**
 * 나눔 현황 카드
 */
interface ApplyStateCardProps {
  attendeeData: Attendee;
  showCheckbox?: boolean;
  unitPrice?: number;
}

export default function ApplyStateCard({
  attendeeData,
  showCheckbox = false,
  unitPrice,
}: ApplyStateCardProps) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const ownerName = searchParams.get("ownerName")!;
  const { mutate } = useSharingCheck(id!, ownerName);

  const [isShared, setIsShared] = useState(attendeeData.isShared);

  // attendeeName이 ownerName과 같으면 "공구장" 으로 표기
  const isOwner = attendeeData.name === ownerName;
  const handleCheckClick = () => {
    mutate({
      isShared: !isShared,
      name: attendeeData.name,
    });
    setIsShared(!isShared);
  };
  return (
    <section
      className={cn(
        "flex flex-col p-4 rounded-lg border border-default-200",
        isShared ? "bg-default-200 checked-overlay " : "bg-transparent"
      )}
    >
      <header className="flex items-center justify-between">
        <h3 className="font-medium text-default-800 typo-caption">
          {isOwner ? "공구장" : attendeeData.name}
        </h3>
        <input
          type="checkbox"
          checked={isShared}
          onChange={handleCheckClick}
          className={cn("custom-checkbox", showCheckbox ? "block" : "hidden")}
        />
      </header>
      <div className="flex flex-col gap-2 mt-4">
        {attendeeData.options?.map((option) => (
          <OptionItem
            key={option.optionId}
            option={option}
            perPrice={unitPrice ? unitPrice * option.quantity : 0}
          />
        ))}
        <div className="flex justify-between *:font-medium *:typo-caption *:text-default-800">
          <p>총 결제금액</p>
          <p>{attendeeData.totalPrice}원</p>
        </div>
      </div>
    </section>
  );
}

function OptionItem({
  option,
  perPrice,
}: {
  option: ItemOptionBase;
  perPrice: number;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 ${
        option.quantity >= 1 ? "" : "hidden"
      }`}
    >
      <p className="flex-1 text-default-800 typo-tiny ">{option.name}</p>
      <p className="w-10 text-right text-default-800 typo-tiny">
        {option.quantity}
      </p>
      <p className="w-[98px] text-right text-default-800 typo-tiny">
        {perPrice.toLocaleString()}원
      </p>
    </div>
  );
}
