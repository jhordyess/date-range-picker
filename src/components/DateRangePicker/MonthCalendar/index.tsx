import * as React from "react";
import { DateTime, DayNumbers } from "luxon";
import Body from "./Body";
import Header from "./Header";

const getMonthWeeks = (date: DateTime) => {
  const allDatesMonth = date.startOf("month").until(date.endOf("month"));
  //? Get array of weeks
  const weekArray = allDatesMonth
    .splitBy({ week: 1 })
    .map((week) => week.splitBy({ day: 1 }).map(({ start }) => start.day));
  //? Loop on the "weekArray", with every item, shift the last subitems to the left of the next item.
  const iniDayWeek = date.startOf("month").weekday - 1;
  let temp: DayNumbers[];
  weekArray.forEach((current, index) => {
    //? Insert subitems at the beginning.
    if (index !== 0) current.splice(0, 0, ...temp);
    //? Remove subitems at the end, the number of subitems removed is equal to "iniDayWeek" variable.
    if (index !== weekArray.length - 1)
      temp = current.splice(current.length - iniDayWeek, iniDayWeek);
  });
  //? Fix the last item
  temp = weekArray[weekArray.length - 1];
  const aux = temp.length - 7;
  if (aux > 0) weekArray.push(temp.splice(-1, aux));
  return weekArray.map((week, index) => ({
    values: week,
    key: `week${index + 1}`,
  }));
};

const MonthCalendar = ({ now = DateTime.local(), currDay = undefined }) => (
  <>
    <Header currDay={now} />
    <Body monthWeeks={getMonthWeeks(now)} currDay={currDay} />
  </>
);
export default MonthCalendar;
