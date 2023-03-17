import { DateTime, Interval } from "luxon";
import * as React from "react";
import { calc2Months } from "../../helpers/date/monthWeek";
import {
  last12Months,
  last14Days,
  last30Days,
  last3Months,
  last7Days,
  month2date,
  quarter2date,
  today,
} from "../../helpers/date/ranges";
import MonthCalendar from "./MonthCalendar";

type TRanges = {
  [key: string]: { label: string; rangeFn?: (curr: DateTime) => Interval };
};
const ranges: TRanges = {
  lst7d: { label: "Last 7 days", rangeFn: last7Days },
  lst14d: { label: "Last 14 days", rangeFn: last14Days },
  lst30d: { label: "Last 30 days", rangeFn: last30Days },
  lst3m: { label: "Last 3 months", rangeFn: last3Months },
  lst12m: { label: "Last 12 months", rangeFn: last12Months },
  m2d: { label: "Month to date", rangeFn: month2date },
  q2d: { label: "Quarter to date", rangeFn: quarter2date },
  all: { label: "All times", rangeFn: null },
  ctm: { label: "Custom", rangeFn: null },
};

const DateRangePicker = ({ now = DateTime.local() }) => {
  const [items, setItems] = React.useState<{
    range: Interval;
    key: string;
    firstMonth: DateTime;
    secondMonth: DateTime;
  }>({
    range: last12Months(now),
    key: "lst12m",
    ...calc2Months(now, last12Months(now)),
  });

  const handleRange = (key: string) => {
    if (ranges[key].rangeFn) {
      const newRange = ranges[key].rangeFn(now);
      setItems({ range: newRange, key, ...calc2Months(now, newRange) });
    }
  };

  const handleNext1st = () => {
    const firstMonth = items.firstMonth.plus({ month: 1 });
    if (!firstMonth.hasSame(items.secondMonth, "month"))
      setItems({ ...items, firstMonth });
  };

  const handlePrev1st = () => {
    const firstMonth = items.firstMonth.minus({ month: 1 });
    setItems({ ...items, firstMonth });
  };

  const handleNext2nd = () => {
    const secondMonth = items.secondMonth.plus({ month: 1 });
    setItems({ ...items, secondMonth });
  };

  const handlePrev2nd = () => {
    const secondMonth = items.secondMonth.minus({ month: 1 });
    if (!secondMonth.hasSame(items.firstMonth, "month"))
      setItems({ ...items, secondMonth });
  };

  return (
    <div className="flex w-max h-max">
      <aside className="py-5 bg-background border-r-2 border-secondary rounded-l-lg">
        <ul>
          {Object.keys(ranges).map((key) => (
            <li key={key}>
              <button
                className={`w-full text-left px-8 py-2 hover:bg-secondary text-white text-sm font-medium ${
                  key === items.key ? "bg-secondary" : ""
                }`}
                onClick={() => {
                  handleRange(key);
                }}
              >
                {ranges[key].label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-642 flex-row">
        <section className="flex">
          <div className="w-320 h-320 p-5 bg-background border-r-2 border-secondary">
            <MonthCalendar
              date={items.firstMonth}
              currDay={now}
              range={items.range}
              handleNext={handleNext1st}
              handlePrev={handlePrev1st}
            />
          </div>
          <div className="w-320 h-320 p-5 bg-background rounded-tr-lg">
            <MonthCalendar
              date={items.secondMonth}
              currDay={now}
              range={items.range}
              handleNext={handleNext2nd}
              handlePrev={handlePrev2nd}
            />
          </div>
        </section>
        <section className="flex p-5 bg-background border-t-2 border-secondary justify-between rounded-br-lg">
          <div className="flex gap-3" role="group">
            <output className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-white">
              {items.range.start.toFormat("dd/MM/yyyy")}
            </output>
            <b className="text-gray-400 self-center">{"->"}</b>
            <output className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent text-white border border-primary">
              {items.range.end.toFormat("dd/MM/yyyy")}
            </output>
          </div>
          <div className="flex gap-3" role="group">
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-white">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white">
              Set Date
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DateRangePicker;
