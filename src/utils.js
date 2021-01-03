export const getHours = () => Array.from({ length: 24 }, (a, i) => i);

export const getMinutes = () => Array.from({ length: 12 }, (a, i) => i * 5);

export const formatToTime = (arr) => arr.map((a) => (a < 10 ? "0" + a : a));

export const times = {
  hours: formatToTime(getHours()),
  minutes: formatToTime(getMinutes()),
};
