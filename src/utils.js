export const getHours = () => Array.from({ length: 24 }, (a, i) => i);
export const getMinutes = () => Array.from({ length: 12 }, (a, i) => i * 5);
export const addZeroToNumberLess10 = (a) => (a < 10 ? "0" + a : a);
export const formatTimes = (arr) => arr.map((a) => addZeroToNumberLess10(a));

export const convertNumToStr = (a) => String(a);
export const convertStrToNum = (a) => Number(a);

export const getTimeHM = (timeStr) => timeStr.split(":").slice(0, 2).join(":");
export const getTimeS = (timeStr) => timeStr.split(":").slice(2).join(":");

export const times = {
  hours: formatTimes(getHours()),
  minutes: formatTimes(getMinutes()),
};

export const convertTimeStrToArr = (timeString) => {
  return timeString.split(":").map((a) => convertStrToNum(a));
};

export const convertArrToTimeStr = (timeArr) => {
  return timeArr
    .map((a) => convertNumToStr(a))
    .map((a) => addZeroToNumberLess10(a))
    .join(":");
};

export const getRestTime = (endTime) => {
  const startMills = Date.now();
  const endMills = new Date(`Jan 04, 2077 ${endTime}`).getTime();

  const restMills = endMills - startMills;

  const h = Math.floor((restMills % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((restMills % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((restMills % (1000 * 60)) / 1000);

  const restArr = [h, m, s];
  return convertArrToTimeStr(restArr);
};
