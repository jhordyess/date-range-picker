import { DayNumbers } from "luxon";

export interface CellProp {
  day?: DayNumbers;
  type: "left" | "right" | "full" | "between" | "normal";
  isToday: boolean;
}
