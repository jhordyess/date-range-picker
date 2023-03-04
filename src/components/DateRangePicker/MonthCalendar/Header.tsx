import * as React from "react";
import { DateTime } from "luxon";
import { LeftBtn, RightBtn } from "./Buttons";

type THeader = {
  currDay: DateTime;
};

const Header = ({ currDay }: THeader) => (
  <div className="flex justify-between items-center">
    <LeftBtn />
    <span
      tabIndex={0}
      className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
    >
      {currDay.toFormat("MMMM yyyy")}
    </span>
    <RightBtn />
  </div>
);

export default Header;
