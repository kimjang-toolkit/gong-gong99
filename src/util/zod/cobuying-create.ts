import { z } from "zod";
import { FormattedNumber, toNumber } from "@/types/FormattedNumber";

const baseSchema = z.object({
  productName: z
    .string()
    .min(4, { message: "상품 이름은 최소 4자 이상이어야 합니다." })
    .max(50, { message: "상품 이름은 최대 50자까지 가능합니다." }),
  totalPrice: z
    .number()
    .min(1, { message: "상품 총액을 입력해주세요." })
    .transform((num) => {
      if (isNaN(toNumber(num)) || toNumber(num) <= 0) {
        throw new Error("상품 총액은 양수여야 합니다.");
      }
      return num as FormattedNumber;
    }),
  productLink: z.string().optional(),
});

const quantitySchema = baseSchema.extend({
  type: z.literal("quantity"),
  ownerOptions: z
    .array(
      z.object({
        optionId: z.number(),
        name: z.string(),
        quantity: z.number(),
      })
    )
    .min(1, { message: "최소 1개 이상의 옵션을 입력해주세요." }),
  itemOptions: z.array(
    z.object({
      optionId: z.number(),
      name: z.string(),
      quantity: z.number(),
    })
  ),
  totalQuantity: z.any().optional(),
  targetAttendeeCount: z.any().optional(),
});

const attendeeSchema = baseSchema.extend({
  type: z.literal("attendee"),
  targetAttendeeCount: z.coerce
    .number()
    .min(1, { message: "참여 인원을 입력해주세요." }),
  totalQuantity: z.coerce.number().min(1, { message: "수량을 입력해주세요." }),
  itemOptions: z.any().optional(),
  ownerOptions: z.any().optional(),
});

const formSchema = z.union([quantitySchema, attendeeSchema]);
export type FormSchema = z.infer<typeof formSchema>;
export { formSchema };

const commitmentSchema = z.object({
  sharingDateTime: z.string().min(1, { message: "나눔일정을 입력해주세요." }),
  sharingLocation: z.string().min(1, { message: "나눔장소를 입력해주세요." }),
  memo: z.string().optional(),
});
export type CommitmentSchema = z.infer<typeof commitmentSchema>;
export { commitmentSchema };

const passwordSchema = z
  .object({
    ownerName: z.string().min(1, { message: "이름을 입력해주세요." }),
    ownerPassword: z
      .string()
      .min(4, { message: "비밀번호는 최소 4자 이상이어야 합니다." }),
    ownerPasswordConfirm: z
      .string()
      .min(4, { message: "비밀번호를 다시 한번 입력해주세요." }),
  })
  .refine(
    (data) => {
      if (data.ownerPassword !== data.ownerPasswordConfirm) {
        return false;
      }
      return true;
    },
    { message: "비밀번호가 일치하지 않습니다." }
  );

export type PasswordSchema = z.infer<typeof passwordSchema>;
export { passwordSchema };
