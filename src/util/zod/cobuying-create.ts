import { z } from 'zod';

const formSchema = z.object({
  productName: z
    .string()
    .min(4, { message: '상품 이름은 최소 4자 이상이어야 합니다.' })
    .max(100, { message: '상품 이름은 최대 100자까지 가능합니다.' }),
  totalPrice: z
    .number()
    .min(1, { message: '상품 총액을 입력해주세요.' })
    .transform((val) => {
      const num = Number(val);
      if (isNaN(num) || num <= 0) {
        throw new Error('상품 총액은 양수여야 합니다.');
      }
      return num;
    }),
  productLink: z.string().url({ message: '유효한 상품 링크를 입력해주세요.' }),
  deadline: z.string(),
  type: z.enum(['quantity', 'attendee']),
  totalQuantity: z.number().min(1, { message: '수량을 입력해주세요.' }),
  ownerQuantity: z.number().min(1, { message: '수량을 입력해주세요.' }),
  targetAttendeeCount: z.number().min(1, { message: '인원을 입력해주세요.' }),
  memo: z.string().optional(),
  ownerPassword: z
    .string()
    .min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' }),
});

export type FormSchema = z.infer<typeof formSchema>;
export { formSchema };
