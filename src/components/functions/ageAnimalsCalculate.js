export const ageAnimalsCalculate = (arr) => {
  const yearStr = (year => {
    if(year) {
      if(year % 10 === 1 && year !== 11) {
        return `${year} год`;
      } else if(year % 10 > 1 && year % 10 < 5 && Math.floor(year / 10) !== 1) {
        return `${year} года`;
      }
      return `${year} лет`;
    }
    return null;
  });

  const monthStr = (month => {
    if(month) {
      if(month === 1) {
        return "1 месяц";
      } else if (month > 1 && month < 5) {
        return `${month} месяца`;
      }
      return `${month} месяцев`
    }
    return null;
  });

  const yearString = yearStr(arr[0] - 1);
  const monthString = monthStr(arr[1]);

  return `(${yearString ? yearString : ""}${monthString ? ` ${monthString}` : ""})`;
};