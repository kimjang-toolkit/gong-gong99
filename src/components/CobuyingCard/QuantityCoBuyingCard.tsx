import { QuantityCoBuyingDetail } from '@interface/cobuying';

export default function QuantityCoBuyingCard({ data }: { data: QuantityCoBuyingDetail }) {
  return (
    <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
      <div className="flex justify-between">
        <p className="text-caption">상품명</p>
        <p className="text-caption">{data.productName}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-caption">개 당 가격</p>
        <p className="text-caption text-primary-400">
          {`${data.unitPrice.toLocaleString()}원`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-caption">구매 가능 수량</p>
        <p className="text-caption text-primary-400">
          {`${data.remainQuantity.toLocaleString()}개`}
        </p>
      </div>
    </div>
  );
} 