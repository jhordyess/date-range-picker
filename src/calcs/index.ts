export const getFirstDay = (curr = new Date()): Date =>
  new Date(curr.getFullYear(), curr.getMonth(), 1);

export const getLastDay = (curr = new Date()): Date =>
  new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

export const subtractDay = (days = 0, curr = new Date()): Date => {
  const day = curr.getDate() - days;
  return new Date(curr.getFullYear(), curr.getMonth(), day);
};

export const subtractMonth = (months = 0, curr = new Date()): Date => {
  const month = curr.getMonth() - months;
  const out = new Date(curr.getFullYear(), month, 1);
  const day = curr.getDate();
  const lastDay = getLastDay(out).getDate();
  return new Date(
    out.getFullYear(),
    out.getMonth(),
    day < lastDay ? day : lastDay
  );
};
