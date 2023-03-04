import { DateTime } from "luxon";
import * as React from "react";
import MonthCalendar from "./MonthCalendar";

const ranges = [
  { label: "Last 7 days", key: "lst7d" },
  { label: "Last 14 days", key: "lst14d" },
  { label: "Last 30 days", key: "lst30d" },
  { label: "Last 3 months", key: "lst30m" },
  { label: "Last 12 months", key: "lst12m", active: true },
  { label: "Month to date", key: "m2d" },
  { label: "Quarter to date", key: "q2d" },
  { label: "All times", key: "all" },
  { label: "Custom", key: "ctm" },
];

const DateRangePicker = ({ now = DateTime.local() }) => (
  <div className="flex w-max h-max">
    <aside className="py-5 bg-background border-r-2 border-secondary rounded-l-lg">
      <ul>
        {ranges.map(({ label, key, active }) => (
          <li
            key={key}
            className={`px-8 py-2 hover:bg-secondary text-white text-sm font-medium ${
              active ? "bg-secondary" : ""
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
    <main className="w-642 flex-row">
      <section className="flex">
        <div className="w-320 h-320 p-5 bg-background border-r-2 border-secondary">
          <MonthCalendar now={now} currDay={now.day} />
        </div>
        <div className="w-320 h-320 p-5 bg-background rounded-tr-lg">
          <MonthCalendar
            now={now.plus({
              month: 1,
            })}
          />
        </div>
      </section>
      <section className="flex p-5 bg-background border-t-2 border-secondary justify-between rounded-br-lg">
        <div className="flex gap-3" role="group">
          <output className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-white">
            18/02/2021
          </output>
          <b className="text-gray-400 self-center">{"->"}</b>
          <output className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent text-white border border-primary">
            11/03/2021
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

export default DateRangePicker;
