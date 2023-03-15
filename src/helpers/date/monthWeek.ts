import { DateTime, DayNumbers, Interval } from "luxon";
import { CellProp } from "../../types";
import { last7Days } from "./ranges";

/**
 * Helper function to generate an array of weeks for a given month and year.
 * @param date The date to generate week array for.
 * @returns An array of objects representing each week in the month. Each object has a values array and key string property.
 */
export const getMonthWeeks = (
  date: DateTime,
  currDay: DateTime,
  range: Interval
): Array<{ week: CellProp[]; key: string }> => {
  // Get all dates for the month from startOf() to endOf().
  const allDatesMonth = date.startOf("month").until(date.endOf("month"));
  // Split up the month by week and then day, and return only day value.
  const weekArray: CellProp[][] = allDatesMonth
    .splitBy({ week: 1 })
    .map((week) =>
      week.splitBy({ day: 1 }).map(({ start }) => {
        start = start.startOf("day");
        const isToday = start.equals(currDay.startOf("day"));
        const isStart = start.equals(range.start.startOf("day"));
        const isEnd = start.equals(range.end.startOf("day"));
        const isBetween = range.contains(start) && !isStart && !isEnd;
        return {
          day: start.day,
          type: isStart
            ? "left"
            : isBetween
            ? "between"
            : isEnd
            ? "right"
            : "normal",
          isToday,
        };
      })
    );

  // Calculate which weekday the 1st of the month falls on (0 is Sunday, 6 is Saturday).
  const iniDayWeek = date.startOf("month").weekday - 1;

  // Add any extra days from previous or next months to the array.
  let temp: CellProp[];
  for (const [index, current] of weekArray.entries()) {
    if (index !== 0) {
      current.splice(0, 0, ...temp);
    }
    if (index !== weekArray.length - 1) {
      temp = current.splice(current.length - iniDayWeek, iniDayWeek);
    }
  }

  // Add any extra days from the last week to the array.
  const [lastWeek] = weekArray.slice(-1);
  const aux = lastWeek.length - 7;
  if (aux > 0) weekArray.push(lastWeek.splice(-1, aux));

  // Return an array of objects representing each week in the month.
  return weekArray.map((week, index) => ({
    week,
    key: `week${index + 1}`,
  }));
};
