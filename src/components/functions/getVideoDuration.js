export const getVideoDuration = (duration) => {
  return `${Math.floor(duration / 60)}:${duration % 60 < 10 ? `0${duration % 60}` : duration % 60}`;
};