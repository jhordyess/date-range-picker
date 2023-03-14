import * as React from "react";
import { DateTime } from "luxon";
import Body from "./Body";
import Header from "./Header";
import { getMonthWeeks } from "../../../helpers/date/monthWeek";
import { Range } from "../types";

interface Props {
  now?: DateTime;
  currDay?: number;
  range?: Range;
}

const MonthCalendar = ({
  now = DateTime.local(),
  currDay,
  range = {
    start: {},
    end: {},
  },
}: Props) => (
  <>
    <Header currDay={now} />
    <Body monthWeeks={getMonthWeeks(now)} currDay={currDay} range={range} />
  </>
);
export default MonthCalendar;
