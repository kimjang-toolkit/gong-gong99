import { z } from 'zod';

const commonFormSchema = z.object({
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
});

export type CommonFormSchema = z.infer<typeof commonFormSchema>;
export { commonFormSchema };
