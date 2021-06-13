export const addErrorMessage = (error) => {
  const errorCode = error.error_code;
  console.warn("error_code: ", errorCode, " error_msg: ", error.error_msg);

  switch(errorCode) {
    case 5:
      return "Авторизация приложения не удалась.";
    case 6:
      return "Слишком много запросов в секунду.";
    case 10:
      return "Произошла внутренняя ошибка сервера.";
    case 15:
      return "Доступ запрещён.";
    case 18:
      return "Страница сообщества удалена или заблокирована.";
    case 28:
      return "Ключ доступа приложения недействителен.";
    default:
      return "Произошла неизвестная ошибка.";
  }
};