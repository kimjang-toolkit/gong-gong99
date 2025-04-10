import ApplyStateCard from '@/components/ApplyStateCard';
import { CoBuyingDetail, QuantityCoBuyingDetail } from '@interface/cobuying';
import { DivideType } from '@domain/cobuying';

// 타입 가드 함수
function isQuantityCoBuying(
  data: CoBuyingDetail
): data is QuantityCoBuyingDetail {
  return data.type === DivideType.quantity;
}

export default function ApplyListSection({
  data,
  canEdit,
  className,
}: {
  data: CoBuyingDetail;
  canEdit?: boolean;
  className?: string;
}) {
  const { attendeeList } = data;
  return (
    <section className={className}>
      <p className="typo-caption text-default-500 mb-1.5">나눔 현황</p>
      <div className="flex flex-col gap-2">
        {attendeeList?.map((attendee) => (
          <ApplyStateCard
            key={attendee.name}
            attendeeData={attendee}
            showCheckbox={canEdit}
            unitPrice={isQuantityCoBuying(data) ? data.unitPrice : undefined}
          />
        ))}
      </div>
    </section>
  );
}
