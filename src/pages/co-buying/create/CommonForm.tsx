import Form from '@/components/Form';
import Input from '@/components/Input';
import { CommonFormSchema, commonFormSchema } from '@/util/zod/cobuying-create';
import { DivideType } from '@domain/cobuying';

interface CommonFormProps {
  setFormData: (formData: CommonFormSchema) => void;
  setType: (type: DivideType) => void;
  type: DivideType;
}

function CommonForm({ setFormData, setType, type }: CommonFormProps) {
  return (
    <Form
      defaultValues={{
        productName: '',
        totalPrice: 0,
        productLink: '',
        deadline: '',
      }}
      schema={commonFormSchema}
      onSubmit={setFormData}
    >
      <Form.Input name="productName">
        <Input.Label>상품 이름</Input.Label>
        <Input.Field placeholder="상품 이름을 입력해주세요. (4~100자)" />
        <Input.Description />
      </Form.Input>
      <Form.Input name="totalPrice">
        <Input.Label>상품 총액</Input.Label>
        <Input.Field placeholder="상품 총액을 입력해주세요." />
        <Input.Suffix>원</Input.Suffix>
        <Input.Description />
      </Form.Input>
      <Form.Input name="productLink">
        <Input.Label>상품 링크</Input.Label>
        <Input.Field placeholder="상품 링크를 입력해주세요." />
        <Input.Description />
      </Form.Input>
      <Form.Input name="deadline">
        <Input.Label>신청 마감일</Input.Label>
        <Input.Field
          min={new Date().toISOString().split('T')[0]}
          placeholder="신청 마감일을 입력해주세요."
          type="date"
        />
        <Input.Description />
      </Form.Input>
      <Form.Button>// 공구나눔방식 버튼.</Form.Button>
    </Form>
  );
}

export default CommonForm;
