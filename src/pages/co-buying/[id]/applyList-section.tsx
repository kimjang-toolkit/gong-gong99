import ApplyStateCard from '@/components/ApplyStateCard';
import { CoBuyingDetail } from '@interface/cobuying';

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
      {attendeeList?.map((attendee) => (
        <ApplyStateCard attendeeData={attendee} showCheckbox={canEdit} />
      ))}
    </section>
  );
}
