import * as React from "react";
import { DateTime } from "luxon";
import { LeftBtn, RightBtn } from "./Buttons";

interface Props {
  date: DateTime;
  handlePrev: () => void;
  handleNext: () => void;
}

const Header = ({ date, handlePrev, handleNext }: Props) => (
  <div className="flex justify-between items-center">
    <LeftBtn onClick={handlePrev} />
    <span
      tabIndex={0}
      className="focus:outline-none text-base font-bold text-gray-100"
    >
      {date.toFormat("MMMM yyyy")}
    </span>
    <RightBtn onClick={handleNext} />
  </div>
);

export default Header;
