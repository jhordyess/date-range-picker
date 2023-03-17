import * as React from "react";
import * as _ from "lodash";
import { CellProp } from "../../../../types";

interface Props {
  firstWeek: boolean;
  week: CellProp[];
  id: string;
}

const Cell = ({ day, type, isToday }: CellProp) => {
  let className = "";
  switch (type) {
    case "right":
      className = "text-white bg-primary rounded-r-lg";
      break;
    case "left":
      className = "text-white bg-primary rounded-l-lg";
      break;
    case "full":
      className = "text-white bg-primary rounded-lg";
      break;
    case "between":
      className = "text-white bg-secondary";
      break;
    case "empty":
      className = "text-gray-400";
      break;
    default:
      className = "text-white";
      break;
  }
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
        <a
          role="link"
          tabIndex={0}
          className={`text-base w-10 h-10 flex items-center justify-center ${className} ${
            isToday ? "font-bold" : "font-medium"
          }`}
        >
          {String(day)}
        </a>
      </div>
    </div>
  );
};

const WeekRow = ({ firstWeek = false, week = [], id = "w0883676" }: Props) => {
  if (week.length < 0 || week.length > 7) throw new RangeError("Max 7 days!");
  return (
    <tr>
      {week.map(({ isToday, type, day }, index) => (
        <td className={firstWeek ? "pt-6" : ""} key={id + index}>
          <Cell day={day} isToday={isToday} type={type} />
        </td>
      ))}
    </tr>
  );
};

export default WeekRow;
