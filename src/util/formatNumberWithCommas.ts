export const formatNumberWithCommas = (value: number) => {
  // 소수점 이하
  const integerValue = Math.floor(value);
  return integerValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
