export function parseDateTime(value: string) {
  try {
    const [dateStr, meridiem, timeStr] = value.split(' ');
    const [hourStr, minuteStr] = timeStr.split(':');
    let hour = Number(hourStr);
    const minute = Number(minuteStr);
    if (meridiem === '오후' && hour < 12) hour += 12;
    if (meridiem === '오전' && hour === 12) hour = 0;

    const [year, month, day] = dateStr.split('/').map(Number);
    return {
      date: new Date(year, month - 1, day),
      hour,
      minute,
    };
  } catch {
    return null;
  }
}
