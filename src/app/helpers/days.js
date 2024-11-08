import { dayjs_id } from "../config/dayjs";

export function generateDate(length) {
  const today = dayjs_id;

  const daysArray = Array.from({ length : length }, (_, i) => {
    const currentDate = today.add(i, "day");

    return {
      date: currentDate.date(),
      month: currentDate.format("MMMM"),
      year: currentDate.format("YYYY"),
      dayName: currentDate.format("dddd"),
    };
  });

  return daysArray;
}