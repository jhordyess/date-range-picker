import { DayNumbers } from "luxon";

export interface Range {
  start?: {
    day?: DayNumbers;
    include?: boolean;
  };
  end?: {
    day?: DayNumbers;
    include?: boolean;
  };
}

export interface MonthWeeks {
  values: number[];
  key: string;
}
