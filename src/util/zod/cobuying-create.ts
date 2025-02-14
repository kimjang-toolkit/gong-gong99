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
    productLink: z.string().optional(),
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
      .optional()
      .transform((val) => (val === undefined ? undefined : val)), // undefined 그대로 유지
    targetAttendeeCount: z.coerce
      .number()
      .optional()
      .transform((val) => (val === undefined ? undefined : val)), // undefined 그대로 유지
    memo: z.string().optional(),
  })
  .refine((data) => {
    if (
      data.type === 'quantity' &&
      (data.ownerQuantity === undefined || data.ownerQuantity < 1)
    ) {
      return false;
    }
    if (
      data.type === 'attendee' &&
      (data.targetAttendeeCount === undefined || data.targetAttendeeCount < 1)
    ) {
      return false;
    }
    return true;
  });

export type FormSchema = z.infer<typeof formSchema>;
export { formSchema };

const passwordSchema = z
  .object({
    ownerName: z.string().min(1, { message: '이름을 입력해주세요.' }),
    ownerPassword: z
      .string()
      .min(4, { message: '비밀번호는 최소 4자 이상이어야 합니다.' }),
    ownerPasswordConfirm: z
      .string()
      .min(4, { message: '비밀번호를 다시 한번 입력해주세요.' }),
  })
  .refine(
    (data) => {
      if (data.ownerPassword !== data.ownerPasswordConfirm) {
        return false;
      }
      return true;
    },
    { message: '비밀번호가 일치하지 않습니다.' }
  );

export type PasswordSchema = z.infer<typeof passwordSchema>;
export { passwordSchema };
