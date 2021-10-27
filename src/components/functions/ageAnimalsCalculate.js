export const ageAnimalsCalculate = (arr, ageDateDifference) => {

  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;

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

  let yearString = 0;
  let monthString = 0;

  if(ageDateDifference){
    const sumAge = (+arr[0] - 1) * 12 + (arr[1] ? +arr[1] : 0);
    const reallyAge = (nowYear - ageDateDifference[0]) * 12 + nowMonth - ageDateDifference[1] + sumAge;
    console.log(arr, ageDateDifference);
    console.log(reallyAge);
    console.log(Number(arr[1]));
    yearString = yearStr(Math.floor(reallyAge / 12));
    monthString = monthStr(reallyAge % 12);
  } else {
    yearString = yearStr(arr[0] - 1);
    monthString = monthStr(arr[1]);
  }

  return `(${yearString ? monthString ? yearString + " " : yearString : ""}${monthString ? monthString : ""})`;
};