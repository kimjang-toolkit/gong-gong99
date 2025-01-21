import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';

export default function ApplyListSection() {
  const mock = [
    {
      attendeeName: '조승효',
      appliedQuantity: 3,
      attendeePrice: 10000,
    },
    {
      attendeeName: '오찬솔솔',
      appliedQuantity: 3,
      attendeePrice: 1000000,
    },
    {
      attendeeName: '오찬솔',
      appliedQuantity: 3,
      attendeePrice: 10000,
    },
  ];

  return (
    <>
      <p className="text-caption text-default-500 mb-1.5">신청 현황</p>
      <table className="w-full overflow-hidden rounded-l-md rounded-r-md">
        <thead className="bg-default-50">
          <tr className="*:text-default-500 *:text-caption *:py-2">
            <th>신청자</th>
            <th>신청수량</th>
            <th>부담액</th>
          </tr>
        </thead>
        <tbody>
          {mock.map((data) => (
            <tr className="*:py-1.5 *:text-center *:text-caption">
              <td className="min-w-[30%]">{data.attendeeName}</td>
              <td>{data.appliedQuantity}</td>
              <td className="min-w-[45%]">
                {formatNumberWithCommas(data.attendeePrice)}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
