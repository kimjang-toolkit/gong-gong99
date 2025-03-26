import { z } from 'zod';

const baseSchema = z.object({
  productName: z
    .string()
    .min(4, { message: '상품 이름은 최소 4자 이상이어야 합니다.' })
    .max(50, { message: '상품 이름은 최대 50자까지 가능합니다.' }),
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
  memo: z.string().optional(),
});

const quantitySchema = baseSchema.extend({
  type: z.literal('quantity'),
  ownerOptions: z
    .array(
      z.object({
        optionId: z.number(),
        name: z.string(),
        quantity: z.number(),
      })
    )
    .min(1, { message: '최소 1개 이상의 옵션을 입력해주세요.' }),
  itemOptions: z.array(
    z.object({
      optionId: z.number(),
      name: z.string(),
      quantity: z.number(),
    })
  ),
  totalQuantity: z
    .any()
    .optional()
    .transform(() => undefined), // 필드 무시
  targetAttendeeCount: z
    .any()
    .optional()
    .transform(() => undefined), // 필드 무시
});

const attendeeSchema = baseSchema.extend({
  type: z.literal('attendee'),
  targetAttendeeCount: z.coerce
    .number()
    .min(1, { message: '참여 인원을 입력해주세요.' }),
  totalQuantity: z.coerce.number().min(1, { message: '수량을 입력해주세요.' }),
  itemOptions: z
    .any()
    .optional()
    .transform(() => undefined), // 필드 무시
  ownerOptions: z
    .any()
    .optional()
    .transform(() => undefined), // 필드 무시
});

const formSchema = z.union([quantitySchema, attendeeSchema]);
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
