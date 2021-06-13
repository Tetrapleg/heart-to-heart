const settingMinutesFormat = (messageMinutes) => {
  return messageMinutes < 10 ? `0${messageMinutes}` : messageMinutes;
};

export const getContentDate = (date, { nowDateMs, nowYear, nowHour, nowMinutes, nowSeconds }) => {
  const messageYear = new Date(date * 1000).getFullYear();
  const messageHour = new Date(date * 1000).getHours();
  const messageMinutes = new Date(date * 1000).getMinutes();

  const secondsToday = nowSeconds + nowMinutes * 60 + nowHour * 3600;
  const differentDate = (nowDateMs - date * 1000) / 1000;

  if(differentDate < 3600) {
    const minutesAgo = Math.floor(differentDate / 60);

    if(minutesAgo < 5 || minutesAgo > 20) {
      switch(minutesAgo % 10) {
        case 1: 
          return `${minutesAgo} минуту назад`;
        case 2: 
        case 3: 
        case 4: 
          return `${minutesAgo} минуты назад`;
        default:
          return `${minutesAgo} минут назад`;
      }
    }
    return `${minutesAgo} минут назад`;
  }
  
  if(secondsToday - differentDate >= 0 && secondsToday / 3600 <= 24) {
    if(-5 < secondsToday - differentDate < 0 && messageHour !== 0){
      return `вчера в ${messageHour}:${settingMinutesFormat(messageMinutes)}`;
    }
    return `cегодня в ${messageHour}:${settingMinutesFormat(messageMinutes)}`;
  }

  if(secondsToday + 24 * 3600 - differentDate >= 0 && secondsToday / 3600 <= 48) {
    if(-5 < secondsToday + 24 * 3600 - differentDate < 0 && messageHour === 0){
      return `вчера в ${messageHour}:${settingMinutesFormat(messageMinutes)}`;
    }
    return `вчера в ${messageHour}:${settingMinutesFormat(messageMinutes)}`;
  }

  if(nowYear === messageYear) {
    return `${new Date(date*1000).toLocaleString("ru", {month: 'long', day: 'numeric'})} в 
            ${new Date(date*1000).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})}`;
  }

  return `${new Date(date*1000).toLocaleString("ru", {year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric',
                                                  hour: 'numeric',
                                                  minute: 'numeric'})}`;
};

export const getNowDate = () => {
  return {
    nowDateMs: new Date().setTime(new Date()),
    nowYear: new Date().getFullYear(),
    nowHour: new Date().getHours(),
    nowMinutes: new Date().getMinutes(),
    nowSeconds: new Date().getSeconds(),
  };
};