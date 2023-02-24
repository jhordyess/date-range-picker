import { getFirstDay, subtractDay, subtractMonth } from ".";

type TRange = { ini: Date; end: Date };

export const last7Days = (curr = new Date()): TRange => ({
  ini: subtractDay(7, curr),
  end: curr,
});

export const last14Days = (curr = new Date()): TRange => ({
  ini: subtractDay(14, curr),
  end: curr,
});

export const last30Days = (curr = new Date()): TRange => ({
  ini: subtractDay(30, curr),
  end: curr,
});

export const last3Months = (curr = new Date()): TRange => ({
  ini: subtractMonth(3, curr),
  end: curr,
});

export const last12Months = (curr = new Date()): TRange => ({
  ini: subtractMonth(12, curr),
  end: curr,
});

export const month2date = (curr = new Date()): TRange => ({
  ini: getFirstDay(curr),
  end: curr,
});

export const quarter2date = (curr = new Date()): TRange => {
  const month = Math.round((curr.getMonth() + 1) / 3) - 1;
  const ini = new Date(curr.getFullYear(), month, 1);
  return { ini, end: curr };
};
