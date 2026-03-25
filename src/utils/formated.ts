export const formatedPrice = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value);
