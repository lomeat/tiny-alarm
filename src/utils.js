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

export const convertZeroNumbersToActualTimes = (arr) => {
  return arr.map((a, i) => (a === 0 ? (i === 0 ? 24 : 60) : a));
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
  const startTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });

  const startArr = convertTimeStrToArr(startTime);
  const endArr = convertTimeStrToArr(endTime);

  let restArr = [];

  for (let a = 0; a < 3; a++) {
    if (endArr[a] < startArr[a]) {
      const hourDiff = endArr[a] + (24 - startArr[a]);
      const minuteDiff = endArr[a] + (60 - startArr[a]);
      const newValue = a === 0 ? hourDiff : minuteDiff;
      restArr.push(newValue);
    } else {
      restArr.push(endArr[a] - startArr[a]);
    }

    if (endArr[0] === startArr[0] && endArr[1] < startArr[1]) {
      restArr[0] = 23;
    }

    if (restArr[0] === 1 && restArr[1] === 0 && restArr[2] === 0) {
      restArr[0] = 0;
    }

    if (restArr[2] === 0 && restArr[1] === 1) {
      restArr[1] = 0;
    }

    if (restArr[0] === 0 && restArr[1] === 0 && restArr[2] === 1) {
      return "00:00:00";
    }
  }

  return convertArrToTimeStr(restArr);
};
