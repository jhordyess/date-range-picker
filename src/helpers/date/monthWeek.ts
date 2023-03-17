import { DateTime, Interval } from "luxon";
import { CellProp } from "../../types";
import { getAllMonth } from "./ranges";

type weekFormat = { week: CellProp[]; key: string };

/**
 * Returns an array of weeks formatted with their respective cells within a given month.
 *
 * @param date - The initial date to be used to get all dates from a certain month.
 * @param currDay - The current day to identify if it's today.
 * @param range - The time range represented by an interval.
 * @returns An array of weeks with their respective cells within a given month.
 */
export function getMonthWeeks(
  date: DateTime,
  currDay: DateTime,
  range: Interval
): weekFormat[] {
  const allDatesMonth = getAllMonth(date);
  const totalWeeks = 6;
  const minusStartMonth = date.startOf("month").weekday - 1;
  const weekIntervals: weekFormat[] = [];
  let start = allDatesMonth.start
    .minus({ days: minusStartMonth })
    .startOf("day");
  let end;

  for (let i = 1; i <= totalWeeks; i++) {
    end = start.plus({ days: 6 }).endOf("day");

    const week: CellProp[] = Interval.fromDateTimes(start, end)
      .splitBy({ day: 1 })
      .map(({ start }) => {
        start = start.startOf("day");
        const isToday = start.equals(currDay.startOf("day"));
        const isStart = start.equals(range.start.startOf("day"));
        const isEnd = start.equals(range.end.startOf("day"));
        const isRangeToday = isStart && isEnd;
        const isAnotherMonth = !allDatesMonth.contains(start);
        const isBetween =
          range.contains(start) && !isStart && !isEnd && !isAnotherMonth;

        return {
          day: start.day,
          type: isRangeToday
            ? "full"
            : isStart
            ? "left"
            : isBetween
            ? "between"
            : isEnd
            ? "right"
            : isAnotherMonth
            ? "empty"
            : "normal",
          isToday,
        };
      });

    weekIntervals.push({ week, key: `week${i}` });
    start = end.plus({ days: 1 }).startOf("day");
  }

  return weekIntervals;
}

/**
 * Returns a range spanning two months containing a specified DateTime range.
 *
 * @param now - The reference date to determine where the range lies.
 * @param range - A given time range represented by an interval.
 * @returns An object containing two DateTime objects,
 * representing the first and second month in the range.
 */
export function calc2Months(
  now: DateTime,
  range: Interval
): { firstMonth: DateTime; secondMonth: DateTime } {
  const allMonth = getAllMonth(now);
  const rangeStart = range.start;
  const rangeEnd = range.end;
  const monthContainRange = allMonth.contains(rangeStart);
  const nextMonth = now.plus({ month: 1 });
  const firstMonth = monthContainRange ? now : rangeStart;
  const secondMonth = monthContainRange ? nextMonth : rangeEnd;
  return { firstMonth, secondMonth };
}
