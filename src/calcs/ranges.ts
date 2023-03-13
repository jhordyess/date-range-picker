import { DateTime } from "luxon";

/**
Type representing range between two DateTimes
@typedef {Object} TRange
@property {DateTime} ini - The start datetime
@property {DateTime} end - The end datetime
*/
type TRange = { ini: DateTime; end: DateTime };

/**
Function that returns a TRange object for last 7 days before the current day or given date
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range between given date and 7 days before it
*/
export const last7Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 7 }),
  end: curr,
});

/**
Function that returns a TRange object for last 14 days before the current day or given date
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range between given date and 14 days before it
*/
export const last14Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 14 }),
  end: curr,
});

/**
Function that returns a TRange object for last 30 days before the current day or given date
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range between given date and 30 days before it
*/
export const last30Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 30 }),
  end: curr,
});

/**
Function that returns a TRange object from 3 months before the current day or given date till current day
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range between given date and 3 months before it
*/
export const last3Months = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ months: 3 }),
  end: curr,
});

/**
Function that returns a TRange object from 12 months before the current day or given date till current day
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range between given date and 12 months before it
*/
export const last12Months = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ months: 12 }),
  end: curr,
});

/**
Function that returns a TRange object starting from the beginning of current month till current day
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range of current month
*/
export const month2date = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").startOf("month"),
  end: curr,
});

/**
Function that returns a TRange object starting from the beginning of the quarter till current day
@param {DateTime} curr - An optional parameter of current date
@returns {TRange} - The range of current quarter
*/
export const quarter2date = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").startOf("quarter"),
  end: curr,
});
