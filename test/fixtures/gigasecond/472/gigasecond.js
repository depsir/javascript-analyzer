function gigasecond(date) {
  date.setSeconds(date.getSeconds() + 10 ** 9);
  return date;
}

export { gigasecond };
