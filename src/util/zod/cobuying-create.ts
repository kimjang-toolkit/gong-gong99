import { z } from 'zod';

const formSchema = z
  .object({
    productName: z
      .string()
      .min(4, { message: '상품 이름은 최소 4자 이상이어야 합니다.' })
      .max(100, { message: '상품 이름은 최대 100자까지 가능합니다.' }),
    totalPrice: z.coerce
      .number()
      .min(1, { message: '상품 총액을 입력해주세요.' })
      .transform((val) => {
        const num = Number(val);
        if (isNaN(num) || num <= 0) {
          throw new Error('상품 총액은 양수여야 합니다.');
        }
        return num;
      }),
    productLink: z
      .string()
      .url({ message: '유효한 상품 링크를 입력해주세요.' })
      .optional(),
    deadline: z.string(),
    type: z.enum(['quantity', 'attendee']),
    totalQuantity: z.coerce
      .number()
      .min(1, { message: '수량을 입력해주세요.' })
      .transform((val) => {
        const num = Number(val);
        if (isNaN(num) || num <= 0) {
          throw new Error('수량은 양수여야 합니다.');
        }
        return num;
      }),
    ownerQuantity: z.coerce
      .number()
      .min(1, { message: '수량을 입력해주세요.' })
      .transform((val) => {
        const num = Number(val);
        if (isNaN(num) || num <= 0) {
          throw new Error('수량은 양수여야 합니다.');
        }
        return num;
      })
      .optional(),
    targetAttendeeCount: z.coerce
      .number()
      .min(1, { message: '인원을 입력해주세요.' })
      .transform((val) => {
        const num = Number(val);
        if (isNaN(num) || num <= 0) {
          throw new Error('인원은 양수여야 합니다.');
        }
        return num;
      })
      .optional(),
    memo: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === 'quantity' && !data.ownerQuantity) {
        return false; // ownerQuantity가 필수
      }
      if (data.type === 'attendee' && !data.targetAttendeeCount) {
        return false; // targetAttendeeCount가 필수
      }
      return true; // 조건을 만족하는 경우
    },
    {
      message: '조건에 따라 필수 입력 사항이 누락되었습니다.',
      path: ['ownerQuantity', 'targetAttendeeCount'], // 에러 경로 설정
    }
  );

export type FormSchema = z.infer<typeof formSchema>;
export { formSchema };
