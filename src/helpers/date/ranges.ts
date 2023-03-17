import { DateTime, Interval } from "luxon";

/**
 * Returns a range representing the last 7 days from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the last 7 days.
 */
export const last7Days = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").minus({ days: 7 }), curr);

/**
 * Returns a range representing the last 14 days from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the last 14 days.
 */
export const last14Days = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").minus({ days: 14 }), curr);

/**
 * Returns a range representing the last 30 days from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the last 30 days.
 */
export const last30Days = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").minus({ days: 30 }), curr);

/**
 * Returns a range representing the last 3 months from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the last 3 months.
 */
export const last3Months = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").minus({ months: 3 }), curr);

/**
 * Returns a range representing the last 12 months from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the last 12 months.
 */
export const last12Months = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").minus({ months: 12 }), curr);

/**
 * Returns a range representing the current month to the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the current month.
 */
export const month2date = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").startOf("month"), curr);

/**
 * Returns a range representing the current quarter from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the current quarter.
 */
export const quarter2date = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day").startOf("quarter"), curr);

/**
 * Returns a range representing the current month from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the current month.
 */
export const getAllMonth = (curr = DateTime.local()) =>
  curr.startOf("month").until(curr.endOf("month"));

/**
 * Returns a range representing the current day from the given date.
 *
 * @param curr - The current date. Defaults to the local date and time.
 * @returns An interval object representing the range of the current day.
 */
export const today = (curr = DateTime.local()) =>
  Interval.fromDateTimes(curr.startOf("day"), curr.endOf("day"));
