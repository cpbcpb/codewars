function lastDayIsFriday(initialYear, endYear) {
  let fridayCounter = 0;
  let lastDayCounter = 0;
  let endYearCopy = endYear;
  if (!endYearCopy) {
    endYearCopy = initialYear;
  }
  for (let i = initialYear; i <= endYearCopy; i++) {
    for (j = 1; j < 13; j++) {
      date = new Date(i, j, 1);
      lastDay = date;
      lastDay.setDate(date.getDate() - 1);
      if (lastDay.getDay() === 5) {
        fridayCounter++;
      }
      lastDayCounter++;
    }
  }
  return fridayCounter;
}
