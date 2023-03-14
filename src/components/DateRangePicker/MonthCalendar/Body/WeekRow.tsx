import * as React from "react";
import * as _ from "lodash";

interface Props {
  firstWeek: boolean;
  days: number[];
  currDayIndex?: number;
  id: string;
}

const WeekRow = ({
  firstWeek = false,
  days = [],
  currDayIndex,
  id = "w0883676",
}: Props) => {
  if (days.length < 0 || days.length > 7) throw new RangeError("Max 7 days!");
  const leftEmpty = firstWeek ? 7 - days.length : 0;
  return (
    <tr>
      {_.times(leftEmpty, (index) => (
        <td key={id + "e" + index}>
          <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
        </td>
      ))}
      {days.map((day, index) => (
        <td className={firstWeek ? "pt-6" : ""} key={id + index}>
          {index === currDayIndex ? (
            <div className="w-full h-full">
              <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                <a
                  role="link"
                  tabIndex={0}
                  className="text-base w-10 h-10 flex items-center justify-center font-medium text-white bg-primary rounded-lg"
                >
                  {String(day)}
                </a>
              </div>
            </div>
          ) : (
            <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
              <p className="text-base text-gray-100 font-medium">
                {String(day)}
              </p>
            </div>
          )}
        </td>
      ))}
    </tr>
  );
};

export default WeekRow;
