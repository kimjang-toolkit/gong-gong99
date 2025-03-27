import { CoBuyingDetail } from '@interface/cobuying';

export default function ApplyListSection({ data }: { data: CoBuyingDetail }) {
  console.log('data', data);
  const { attendeeList } = data;
  return (
    <>
      <p className="typo-caption text-default-500 mb-1.5">신청 현황</p>
      <table className="w-full overflow-hidden rounded-l-md rounded-r-md">
        <thead className="bg-default-50">
          <tr className="*:text-default-500 *:typo-caption *:py-2">
            <th>신청자</th>
            <th>신청수량</th>
            <th>부담액</th>
          </tr>
        </thead>
        <tbody>
          {attendeeList?.map((attendee) => (
            <tr
              key={attendee.attendeeName}
              className="*:py-1.5 *:text-center *:typo-caption"
            >
              <td className="min-w-[30%]">{attendee.attendeeName}</td>
              <td>{attendee.appliedQuantity}</td>
              <td className="min-w-[45%]">
                {attendee.attendeePrice.toLocaleString()}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
