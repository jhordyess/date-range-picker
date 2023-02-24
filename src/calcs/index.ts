export const getFirstDay = (curr = new Date()): Date =>
  new Date(curr.getFullYear(), curr.getMonth(), 1);

export const getLastDay = (curr = new Date()): Date =>
  new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

export const subtractDay = (days = 0, curr = new Date()): Date => {
  const today = curr.getDate();
  const sub = today - days;
  if (sub > 0) return new Date(curr.getFullYear(), curr.getMonth(), sub);
  else {
    const lastDayPastMonth = new Date(curr.getFullYear(), curr.getMonth(), 0);
    return new Date(
      lastDayPastMonth.getFullYear(),
      lastDayPastMonth.getMonth(),
      lastDayPastMonth.getDate() + sub
    );
  }
};

export const subtractMonth = (months = 0, curr = new Date()): Date => {
  const _month = curr.getMonth();
  const sub = _month - months;
  let last;
  if (sub > 0) last = new Date(curr.getFullYear(), sub, 1);
  else {
    const lastDayPastYear = new Date(curr.getFullYear(), 0, 0);
    last = new Date(
      lastDayPastYear.getFullYear(),
      lastDayPastYear.getMonth() + sub,
      1
    );
  }
  const lastDate = getLastDay(last).getDate();
  const date = curr.getDate();
  return new Date(
    last.getFullYear(),
    last.getMonth(),
    lastDate < date ? lastDate : date
  );
};
