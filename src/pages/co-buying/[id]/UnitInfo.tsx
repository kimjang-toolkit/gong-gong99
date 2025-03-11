import { QuantityCoBuyingDetail } from '@interface/cobuying';

export default function UnitInfo({ data }: { data: QuantityCoBuyingDetail }) {
  return (
    <div className="rounded-lg bg-zinc-50 flex flex-col p-2.5 gap-2.5">
      <div className="flex justify-between">
        <p className="typo-caption">상품 전체수량</p>
        <p className="typo-caption">
          {`${data.totalQuantity.toLocaleString()}개`}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="typo-caption">구매 가능 수량</p>
        <p className="typo-caption text-primary-400">
          {`${data.remainQuantity.toLocaleString()}개`}
        </p>
      </div>
    </div>
  );
}
