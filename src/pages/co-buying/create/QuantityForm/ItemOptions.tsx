import Option from '@/components/Option';
import { ItemOption } from '@domain/product';

export default function ItemOptions({ options }: ItemOption) {
  return (
    <Option>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Option.Label label="옵션 이름" />
        </div>
      </div>
    </Option>
  );
}
