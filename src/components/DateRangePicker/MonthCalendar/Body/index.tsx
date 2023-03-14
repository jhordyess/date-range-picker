import * as React from "react";
import * as _ from "lodash";
import { MonthWeeks, Range } from "../../types";
import WeekRow from "./WeekRow";
import HeadRow from "./HeadRow";

interface Props {
  monthWeeks: MonthWeeks[];
  currDay: number;
  range?: Range;
}

const Body = ({ monthWeeks, currDay, range }: Props) => (
  <div className="flex items-center justify-between pt-12 overflow-x-auto">
    <table className="w-full">
      <thead>
        <HeadRow />
      </thead>
      <tbody>
        {monthWeeks.map(({ values, key }, index) => (
          <WeekRow
            key={key}
            id={key}
            days={values}
            firstWeek={index === 0}
            currDayIndex={values.indexOf(currDay)}
          />
        ))}
      </tbody>
    </table>
  </div>
);
export default Body;
