import BottomButton from '@/components/Button/BottomButton';
import Form from '@/components/Form';
import Input from '@/components/Input';
import { PasswordSchema, passwordSchema } from '@/util/zod/cobuying-create';

export default function PasswordForm({
  handleSubmit,
}: {
  handleSubmit: (data: PasswordSchema) => void;
}) {
  return (
    <>
      <section className="flex flex-col w-full gap-1 mb-4 text-black h-[90px] justify-center">
        <p className="typo-h2">공구글 게시를 위해</p>
        <div className="flex items-center">
          <p className="typo-h2-bold">기본정보</p>
          <p className="typo-h2">를 입력해주세요.</p>
        </div>
      </section>
      <Form
        schema={passwordSchema}
        defaultValues={{
          ownerName: '',
          ownerPassword: '',
          ownerPasswordConfirm: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form.Input name="ownerName">
          <Input.Label>이름</Input.Label>
          <Input.Field placeholder="이름을 입력해주세요." />
          <Input.Description />
        </Form.Input>
        <Form.Input name="ownerPassword">
          <Input.Label>비밀번호</Input.Label>
          <Input.Field type="password" placeholder="비밀번호를 입력해주세요." />
          <Input.Description />
        </Form.Input>
        <Form.Input name="ownerPasswordConfirm">
          <Input.Label>비밀번호 확인</Input.Label>
          <Input.Field type="password" placeholder="비밀번호를 입력해주세요." />
          <Input.Description />
        </Form.Input>
        <Form.Button className="ml-[-20px]">
          <BottomButton label="공구 열기" />
        </Form.Button>
      </Form>
    </>
  );
}
