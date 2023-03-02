import { DateTime } from "luxon";
import * as React from "react";
import { LeftBtn, RightBtn } from "./Buttons";

type THeader = {
  currDay: DateTime;
};

export default function Header({ currDay }: THeader) {
  return (
    <div className="px-4 flex items-center justify-between">
      <span
        tabIndex={0}
        className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
      >
        {currDay.toFormat("MMMM yyyy")}
      </span>
      <div className="flex items-center">
        <LeftBtn />
        <RightBtn />
      </div>
    </div>
  );
}
