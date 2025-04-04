export type FormattedNumber = string | number;

/**
 * 숫자나 문자열을 FormattedNumber 타입으로 변환
 */
export function toFormattedNumber(value: number | string): FormattedNumber {
  if (typeof value === "number") {
    return value;
  }
  return value.replace(/,/g, "");
}

/**
 * FormattedNumber를 숫자로 변환
 */
export function toNumber(value: FormattedNumber): number {
  if (typeof value === "number") {
    return value;
  }
  return Number(value.replace(/,/g, ""));
}

/**
 * 숫자를 세자리 구분자가 있는 문자열로 변환
 */
export function formatNumber(value: FormattedNumber): string {
  return toNumber(value).toLocaleString();
}

/**
 * FormattedNumber 타입인지 확인
 */
export function isFormattedNumber(value: unknown): value is FormattedNumber {
  if (typeof value === "number") return true;
  if (typeof value === "string") {
    // 숫자와 쉼표로만 구성된 문자열인지 확인
    return /^[\d,]+$/.test(value);
  }
  return false;
}

/**
 * FormattedNumber 간의 덧셈
 */
export function add(a: FormattedNumber, b: FormattedNumber): FormattedNumber {
  return toNumber(a) + toNumber(b);
}

/**
 * FormattedNumber 간의 뺄셈
 */
export function subtract(
  a: FormattedNumber,
  b: FormattedNumber
): FormattedNumber {
  return toNumber(a) - toNumber(b);
}

/**
 * FormattedNumber 간의 곱셈
 */
export function multiply(
  a: FormattedNumber,
  b: FormattedNumber
): FormattedNumber {
  return toNumber(a) * toNumber(b);
}

/**
 * FormattedNumber 간의 나눗셈
 */
export function divide(
  a: FormattedNumber,
  b: FormattedNumber
): FormattedNumber {
  return toNumber(a) / toNumber(b);
}
