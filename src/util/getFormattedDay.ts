export const getFormattedDay = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  switch (diffDays) {
    case 0:
      return '오늘';
    case 1:
      return '내일';
    case 2:
      return '모레';
    default:
      return `${targetDate.getDate()}일`;
  }
};
