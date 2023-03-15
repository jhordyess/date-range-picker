import * as React from "react";
import { DateTime } from "luxon";
import { LeftBtn, RightBtn } from "./Buttons";

interface Props {
  date: DateTime;
}

const Header = ({ date }: Props) => (
  <div className="flex justify-between items-center">
    <LeftBtn />
    <span
      tabIndex={0}
      className="focus:outline-none text-base font-bold text-gray-100"
    >
      {date.toFormat("MMMM yyyy")}
    </span>
    <RightBtn />
  </div>
);

export default Header;
