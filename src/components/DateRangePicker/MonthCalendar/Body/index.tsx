import * as React from "react";
import { getMonthWeeks } from "../../../../helpers/date/monthWeek";
import WeekRow from "./WeekRow";
import HeadRow from "./HeadRow";
import { DateTime, Interval } from "luxon";

interface Props {
  date: DateTime;
  currDay: DateTime;
  range?: Interval;
}

const Body = ({ date, currDay, range }: Props) => {
  const monthWeeks = getMonthWeeks(date, currDay, range);
  return (
    <div className="flex items-center justify-between pt-12 overflow-x-auto">
      <table className="w-full">
        <thead>
          <HeadRow />
        </thead>
        <tbody>
          {monthWeeks.map(({ week, key }, index) => (
            <WeekRow key={key} id={key} week={week} firstWeek={index === 0} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Body;
