export const getContentDate = (date) => {
  console.log(date);
  return new Date(date*1000).toLocaleString("ru", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  })
};