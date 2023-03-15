import * as React from "react";
import { DateTime, DayNumbers, Interval } from "luxon";
import Body from "./Body";
import Header from "./Header";

interface Props {
  date?: DateTime;
  currDay?: DateTime;
  range?: Interval;
}

const MonthCalendar = ({
  date = DateTime.local(),
  currDay = DateTime.local(),
  range,
}: Props) => (
  <>
    <Header date={date} />
    <Body date={date} currDay={currDay} range={range} />
  </>
);
export default MonthCalendar;
